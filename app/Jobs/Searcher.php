<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Redis;

class Searcher implements ShouldQueue
{
    use InteractsWithQueue, Queueable, SerializesModels;

    protected $name, $ch, $pid, $counter, $lastTime, $connectionInfo, $user, $password, $headers;
    # Each Searcher will shutdown after a specified time(s) or number of requests
    protected $MAX_REQUESTS = 100;
    # This value should always be below the retry_after value in config/queue.php
    protected $MAX_TIME = 240;
    protected $startTime = null;
    protected $importantEngines = array("Fastbot", "overture", "overtureAds");
    protected $recheck;

    /**
     * Create a new job instance.
     * This is our new Worker/Searcher Class
     * It will take it's name from the sumas.xml as constructor argument
     * Each Searcher is dedicated to one remote server from our supported Searchengines
     * It will listen to a queue in the Redis Database within the handle() method and
     * answer requests to this specific search engine.
     * The curl handle will be left initialized and opened so that we can make full use of
     * keep-alive requests.
     * @return void
     */
    public function __construct($name, $user = null, $password = null, $headers = null)
    {
        $this->name = $name;
        $this->pid = getmypid();
        $this->recheck = false;
        $this->startTime = microtime(true);
        $this->user = $user;
        $this->password = $password;
        $this->headers = $headers;
        // Submit this worker to the Redis System
        Redis::expire($this->name, 5);
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // This Searches is freshly called so we need to initialize the curl handle $ch
        $this->ch = $this->initCurlHandle();
        try {
            $this->counter = 0; // Counts the number of answered jobs
            $time = microtime(true);
            while (true) {
                // Update the expire
                Redis::expire($this->name, 5);
                Redis::expire($this->name . ".stats", 5);
                // One Searcher can handle a ton of requests to the same server
                // Each search to the server of this Searcher will be submitted to a queue
                // stored in redis which has the same name as this searchengine appended by a ".queue"
                // We will perform a blocking pop on this queue so the queue can remain empty for a while
                // without killing this searcher directly.
                $mission = Redis::blpop($this->name . ".queue", 4);
                $this->counter++;
                $this->updateStats(microtime(true) - $time);
                $this->switchToRunning();
                // The mission can be empty when blpop hit the timeout
                if (!empty($mission)) {
                    $mission = $mission[1];
                    $poptime = microtime(true) - $time;

                    // The mission is a String which can be divided to retrieve three informations:
                    // 1. The Hash Value where the result should be stored
                    // 2. The Url to Retrieve
                    // 3. The maximum time to take
                    // These three informations are divided by a ";" in the mission string
                    $mission = explode(";", $mission);
                    $hashValue = $mission[0]; // The hash value for redis to store the results under
                    $url = base64_decode($mission[1]); // The url to fetch
                    $timeout = $mission[2]; // Timeout from the MetaGer process in ms
                    $medianFetchTime = $this->getFetchTime(); // The median Fetch time of the search engine in ms
                    Redis::hset('search.' . $hashValue . ".results." . $this->name, "status", "connected");
                    $result = $this->retrieveUrl($url);

                    $this->storeResult($result, $poptime, $hashValue);

                    // Reset the time of the last Job so we can calculate
                    // the time we have spend waiting for a new job
                    // We submit that calculation to the Redis systemin the method
                    $time = microtime(true);
                }

                // In sync mode every Searcher may only retrieve one result because it would block
                // the execution of the remaining code otherwise:
                if (getenv("QUEUE_CONNECTION") === "sync"
                    || $this->counter > $this->MAX_REQUESTS
                    || (microtime(true) - $this->startTime) > $this->MAX_TIME) {
                    break;
                }
            }
        } finally {
            // When we reach this point, time has come for this Searcher to retire
            $this->shutdown();
        }
    }

    private function switchToRunning()
    {
        /**
         * When a Searcher is initially started the redis value for $this->name is set to "locked"
         * which effectively will prevent new Searchers of this type to be started. (Value is checked by the MetaGer process which starts the Searchers)
         * This is done so the MetaGer processes won't start hundreds of Searchers parallely when under high work load.
         * It will force that Searchers can only be started one after the other.
         * When a new Searcher has served a minimum of three requests we have enough data to decide whether we need even more Searchers.
         * To do so we will then set the redis value for $this->name to "running".
         * There is a case where we don't want new Searchers to be started even if we would need to do so to serve every Request:
         *   When a search engine needs more time to produce search results than the timeout of the MetaGer process, we won't even bother of spawning
         *   more and more Searchers because they would just block free worker processes from serving the important engines which will give results in time.
         **/
        if ($this->counter === 3 || getenv("QUEUE_DRIVER") === "sync") {
            # If the MetaGer process waits longer for the results than this Fetcher will probably need to fetch
            # Or if this engine is in the array of important engines which we will always try to serve
            Redis::set($this->name, "running");
            $this->recheck = false;
        }
    }
    private function updateStats($poptime)
    {
        if ($this->connectionInfo !== null) {
            $connectionInfo = base64_encode(json_encode($this->connectionInfo));
            Redis::hset($this->name . ".stats", $this->pid, $connectionInfo . ";" . $poptime);
        }
    }

    private function getFetchTime()
    {
        $vals = Redis::hgetall($this->name . ".stats");
        if (sizeof($vals) === 0) {
            return 0;
        } else {
            $totalTime = 0;
            foreach ($vals as $pid => $value) {
                $time = floatval(json_decode(base64_decode(explode(";", $value)[0]), true)["total_time"]);
                $time *= 1000; // Transform from seconds to milliseconds
                $totalTime += $time;
            }
            $totalTime /= sizeof($vals);
            return $totalTime;
        }
    }

    private function retrieveUrl($url)
    {
        // Set this URL to the Curl handle
        curl_setopt($this->ch, CURLOPT_URL, $url);
        $result = curl_exec($this->ch);
        $this->connectionInfo = curl_getinfo($this->ch);
        return $result;
    }

    private function storeResult($result, $poptime, $hashValue)
    {
        $redis = Redis::connection(env('REDIS_RESULT_CONNECTION'));
        $pipeline = $redis->pipeline();
        $pipeline->hset('search.' . $hashValue . ".results." . $this->name, "response", $result);
        $pipeline->hset('search.' . $hashValue . ".results." . $this->name, "delivered", "0");
        $pipeline->hincrby('search.' . $hashValue . ".results.status", "engineAnswered", 1);
        // After 60 seconds the results should be read by the MetaGer Process and stored in the Cache instead
        $pipeline->expire('search.' . $hashValue . ".results." . $this->name, env('REDIS_RESULT_CACHE_DURATION'));
        $pipeline->rpush('search.' . $hashValue . ".ready", $this->name);
        $pipeline->expire('search.' . $hashValue . ".ready", env('REDIS_RESULT_CACHE_DURATION'));
        $pipeline->sadd('search.' . $hashValue . ".engines", $this->name);
        $pipeline->expire('search.' . $hashValue . ".engines", env('REDIS_RESULT_CACHE_DURATION'));
        $pipeline->execute();
        $this->lastTime = microtime(true);
    }

    private function shutdown()
    {
        Redis::hdel($this->name . ".stats", $this->pid);
        if (sizeof(Redis::hgetall($this->name . ".stats")) === 0) {
            Redis::del($this->name);
        }
        // We should close our curl handle before we do so
        curl_close($this->ch);
    }

    private function initCurlHandle()
    {
        $ch = curl_init();

        curl_setopt_array($ch, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_USERAGENT => "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1",
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_CONNECTTIMEOUT => 10,
            CURLOPT_MAXCONNECTS => 500,
            CURLOPT_LOW_SPEED_LIMIT => 500,
            CURLOPT_LOW_SPEED_TIME => 5,
            CURLOPT_TIMEOUT => 10,
        ));

        if ($this->user !== null && $this->password !== null) {
            curl_setopt($ch, CURLOPT_USERPWD, $this->user . ":" . $this->password);
        }

        if ($this->headers !== null) {
            $headers = [];
            foreach ($this->headers as $key => $value) {
                $headers[] = $key . ":" . $value;
            }
            # Headers are in the Form:
            # <key>:<value>;<key>:<value>
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        }

        return $ch;
    }
}
