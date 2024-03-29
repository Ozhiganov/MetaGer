<?php

namespace App\Models;

use App\Jobs\Searcher;
use App\MetaGer;
use Cache;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Support\Facades\Redis;

abstract class Searchengine
{
    use DispatchesJobs;

    public $getString = ""; # Der String für die Get-Anfrage
    public $engine; # Die ursprüngliche Engine XML
    public $totalResults = 0; # How many Results the Searchengine has found
    public $results = []; # Die geladenen Ergebnisse
    public $ads = []; # Die geladenen Werbungen
    public $products = []; # Die geladenen Produkte
    public $loaded = false; # wahr, sobald die Ergebnisse geladen wurden
    public $cached = false;

    public $ip; # Die IP aus der metager
    public $uses; # Die Anzahl der Nutzungen dieser Suchmaschine
    public $homepage; # Die Homepage dieser Suchmaschine
    public $name; # Der Name dieser Suchmaschine
    public $disabled; # Ob diese Suchmaschine ausgeschaltet ist
    public $useragent; # Der HTTP Useragent
    public $startTime; # Die Zeit der Erstellung dieser Suchmaschine
    public $hash; # Der Hash-Wert dieser Suchmaschine

    private $username; # Username für HTTP-Auth (falls angegeben)
    private $password; # Passwort für HTTP-Auth (falls angegeben)

    private $headers; # Headers to add

    public $fp; # Wird für Artefakte benötigt
    public $socketNumber = null; # Wird für Artefakte benötigt
    public $counter = 0; # Wird eventuell für Artefakte benötigt
    public $write_time = 0; # Wird eventuell für Artefakte benötigt
    public $connection_time = 0; # Wird eventuell für Artefakte benötigt

    public function __construct($name, \stdClass $engine, MetaGer $metager)
    {
        $this->engine = $engine;
        $this->name = $name;

        # Cache Standarddauer 60
        $this->cacheDuration = 60;
        if (isset($engine->{"cache-duration"}) && $engine->{"cache-duration"} !== -1) {
            $this->cacheDuration = $engine->{"cache-duration"};
        }

        $this->useragent = $metager->getUserAgent();
        $this->ip = $metager->getIp();
        $this->startTime = microtime();
        # check for http Auth
        if (!empty($this->engine->{"http-auth-credentials"}->username) && !empty($this->engine->{"http-auth-credentials"}->password)) {
            $this->username = $this->engine->{"http-auth-credentials"}->username;
            $this->password = $this->engine->{"http-auth-credentials"}->password;
        }

        $this->headers = $this->engine->{"request-header"};

        # Suchstring generieren
        $q = $metager->getQ();
        $filters = $metager->getSumaFile()->filter;
        foreach ($metager->getQueryFilter() as $queryFilter => $filter) {
            $filterOptions = $filters->{"query-filter"}->$queryFilter;
            $filterOptionsEngine = $filterOptions->sumas->{$this->name};
            $query = $filterOptionsEngine->prefix . $filter . $filterOptionsEngine->suffix;
            $q = $query . " " . $q;
        }

        # Parse enabled Parameter-Filter
        foreach ($metager->getParameterFilter() as $filterName => $filter) {
            $inputParameter = $filter->value;

            if (empty($inputParameter) || empty($filter->sumas->{$name}->values->{$inputParameter})) {
                continue;
            }
            $engineParameterKey = $filter->sumas->{$name}->{"get-parameter"};
            $engineParameterValue = $filter->sumas->{$name}->values->{$inputParameter};
            $this->engine->{"get-parameter"}->{$engineParameterKey} = $engineParameterValue;
        }

        $this->getString = $this->generateGetString($q);
        $this->hash = md5($this->engine->host . $this->getString . $this->engine->port . $this->name);
        $this->resultHash = $metager->getSearchUid();
        $this->canCache = $metager->canCache();
    }

    abstract public function loadResults($result);

    # Standardimplementierung der getNext Funktion, damit diese immer verwendet werden kann
    public function getNext(MetaGer $metager, $result)
    {

    }

    # Prüft, ob die Suche bereits gecached ist, ansonsted wird sie als Job dispatched
    public function startSearch(\App\MetaGer $metager)
    {
        if ($this->canCache && Cache::has($this->hash)) {
            $this->cached = true;
            $this->retrieveResults($metager);
        } else {
            $redis = Redis::connection(env('REDIS_RESULT_CONNECTION'));
            // We will push the confirmation of the submission to the Result Hash
            $redis->hset($metager->getRedisEngineResult() . $this->name, "status", "waiting");
            $redis->expire($metager->getRedisEngineResult() . $this->name, env('REDIS_RESULT_CACHE_DURATION'));

            // We need to submit a action that one of our workers can understand
            // The missions are submitted to a redis queue in the following string format
            // <ResultHash>;<URL to fetch>
            // With <ResultHash> being the Hash Value where the fetcher will store the result.
            // and <URL to fetch> being the full URL to the searchengine

            $url = "";
            if ($this->engine->port === 443) {
                $url = "https://";
            } else {
                $url = "http://";
            }
            $url .= $this->engine->host;
            if ($this->engine->port !== 80 && $this->engine->port !== 443) {
                $url .= ":" . $this->engine->port;
            }
            $url .= $this->getString;
            $url = base64_encode($url);

            $mission = $this->resultHash . ";" . $url . ";" . $metager->getTime();
            // Submit this mission to the corresponding Redis Queue
            // Since each Searcher is dedicated to one specific search engine
            // each Searcher has it's own queue lying under the redis key <name>.queue
            Redis::rpush($this->name . ".queue", $mission);

            // The request is not cached and will be submitted to the searchengine
            // We need to check if the number of requests to this engine are limited
            if (!empty($this->engine->{"monthly-requests"})) {
                Redis::incr("monthlyRequests:" . $this->name);
            }

            /**
             * We have Searcher processes running for MetaGer
             * Each Searcher is dedicated to one specific Searchengine and fetches it's results.
             * We can have multiple Searchers for each engine, if needed.
             * At this point we need to decide, whether we need to start a new Searcher process or
             * if we have enough of them running.
             * The information for that is provided through the redis system. Each running searcher
             * gives information how long it has waited to be given the last fetcher job.
             * The longer this time value is, the less frequent the search engine is used and the less
             * searcher of that type we need.
             * But if it's too low, i.e. 100ms, then the searcher is near to it's full workload and needs assistence.
             **/
            $needSearcher = false;
            $searcherData = Redis::hgetall($this->name . ".stats");

            // We now have an array of statistical data from the searchers
            // Each searcher has one entry in it.
            // So if it's empty, then we have currently no searcher running and
            // of course need to spawn a new one.
            if (sizeof($searcherData) === 0) {
                $needSearcher = true;
            } else {
                // There we go:
                // There's at least one Fetcher running for this search engine.
                // Now we have to check if the current count is enough to fetch all the
                // searches or if it needs help.
                // Let's hardcode a minimum of 100ms between every search job.
                // First calculate the median of all Times
                $median = 0;
                foreach ($searcherData as $pid => $data) {
                    $data = explode(";", $data);
                    $median += floatval($data[1]);
                }
                $median /= sizeof($searcherData);
                if ($median < .1) {
                    $needSearcher = true;
                }
            }
            if ($needSearcher && Redis::get($this->name) !== "locked") {
                Redis::set($this->name, "locked");
                $this->dispatch(new Searcher($this->name, $this->username, $this->password, $this->headers));
            }
        }
    }

    # Ruft die Ranking-Funktion aller Ergebnisse auf.
    public function rank($eingabe)
    {
        foreach ($this->results as $result) {
            $result->rank($eingabe);
        }
    }

    public function setResultHash($hash)
    {
        $this->resultHash = $hash;
    }

    # Fragt die Ergebnisse von Redis ab und lädt Sie
    public function retrieveResults(MetaGer $metager)
    {
        if ($this->loaded) {
            return true;
        }

        $body = "";
        $redis = Redis::connection(env('REDIS_RESULT_CONNECTION'));

        if ($this->canCache && $this->cacheDuration > 0 && Cache::has($this->hash)) {
            $body = Cache::get($this->hash);
        } elseif ($redis->hexists($metager->getRedisEngineResult() . $this->name, "response")) {
            $body = $redis->hget($metager->getRedisEngineResult() . $this->name, "response");
            if ($this->canCache && $this->cacheDuration > 0) {
                Cache::put($this->hash, $body, $this->cacheDuration);
            }
        }
        if ($body !== "" && $body !== "connected" && $body !== "waiting") {
            $this->loadResults($body);
            $this->getNext($metager, $body);
            $this->loaded = true;
            return true;
        } else {
            return false;
        }
    }

    # Erstellt den für die Get-Anfrage genutzten String
    protected function generateGetString($query)
    {
        $getString = "";

        # Skript:
        if (!empty($this->engine->path)) {
            $getString .= $this->engine->path;
        } else {
            $getString .= "/";
        }

        $getString .= "?";
        $parameter = [];
        foreach ($this->engine->{"get-parameter"} as $key => $value) {
            $parameter[] = $this->urlEncode($key) . "=" . $this->urlEncode($value);
        }
        $getString .= implode("&", $parameter);

        # Append the Query String
        $getString .= "&" . $this->engine->{"query-parameter"} . "=" . $this->urlEncode($query);

        return $getString;
    }

    # Wandelt einen String nach aktuell gesetztem inputEncoding dieser Searchengine in URL-Format um
    protected function urlEncode($string)
    {
        if (isset($this->inputEncoding)) {
            return urlencode(mb_convert_encoding($string, $this->inputEncoding));
        } else {
            return urlencode($string);
        }
    }
}
