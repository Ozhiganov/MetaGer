<?php

namespace App\Http\Controllers;

use App;
use App\MetaGer;
use Cache;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use LaravelLocalization;
use View;

const TIP_SERVER = 'http://metager3.de:63825/tips.xml';

class MetaGerSearch extends Controller
{
    public function search(Request $request, MetaGer $metager)
    {
        $spamEntries = [];
        if (file_exists(config_path('spam.txt'))) {
            $spamEntries = file(config_path('spam.txt'));
        }

        $focus = $request->input("focus", "web");

        if ($focus === "maps") {
            $searchinput = $request->input('eingabe', '');
            return redirect()->to('https://maps.metager.de/map/' . $searchinput . '/1240908.5493525574,6638783.2192695495,6');
        }

        # If there is no query parameter we redirect to the startpage
        $eingabe = $request->input('eingabe', '');
        if (empty(trim($eingabe))) {
            return redirect(LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), '/'));
        }

        # Mit gelieferte Formulardaten parsen und abspeichern:
        $metager->parseFormData($request);

        # Nach Spezialsuchen überprüfen:
        $metager->checkSpecialSearches($request);

        if (Cache::has('spam.' . $metager->getFokus() . "." . md5($metager->getQ()))) {
            return response(Cache::get('spam.' . $metager->getFokus() . "." . md5($metager->getQ())));
        }

        # Die Quicktips als Job erstellen
        $quicktips = $metager->createQuicktips();

        # Suche für alle zu verwendenden Suchmaschinen als Job erstellen,
        # auf Ergebnisse warten und die Ergebnisse laden
        $metager->createSearchEngines($request);

        $metager->startSearch();

        $metager->waitForMainResults();

        $metager->retrieveResults();

        # Versuchen die Ergebnisse der Quicktips zu laden
        $quicktipResults = $quicktips->loadResults();
        # Alle Ergebnisse vor der Zusammenführung ranken:
        $metager->rankAll();

        # Ergebnisse der Suchmaschinen kombinieren:
        $metager->prepareResults();

        # Save the results in Redis
        $redis = Redis::connection(env('REDIS_RESULT_CONNECTION'));
        $pipeline = $redis->pipeline();
        foreach ($metager->getResults() as $result) {
            $pipeline->rpush($metager->getRedisCurrentResultList(), base64_encode(serialize($result)));
        }
        $pipeline->expire($metager->getRedisCurrentResultList(), env('REDIS_RESULT_CACHE_DURATION'));
        $pipeline->execute();

        # Die Ausgabe erstellen:
        $resultpage = $metager->createView($quicktipResults);
        foreach ($spamEntries as $index => $entry) {
            $entry = trim($entry);
            if (preg_match("/" . $entry . "/si", $metager->getEingabe())) {
                Cache::put('spam.' . $metager->getFokus() . "." . md5($metager->getQ()), $resultpage->render(), 1440);
            }
        }
        return $resultpage;
    }

    public function loadMore(Request $request)
    {
        /**
         * There are three forms of requests to the resultpage
         * 1. Initial Request: Loads the fastest searchengines and sends them to the user
         * 2. Load more results (with JS): Loads new search engines that answered after the initial request was send
         * 3. Load more results (without JS): Loads new search engines that answered within 1s timeout
         */
        if ($request->filled('loadMore') && $request->filled('script') && $request->input('script') === "yes") {
            return $this->loadMoreJS($request);
        }

    }

    private function loadMoreJS(Request $request)
    {
        # Create a MetaGer Instance with the supplied hash
        $hash = $request->input('loadMore', '');

        $metager = new MetaGer($hash);
        $redis = Redis::connection(env('REDIS_RESULT_CONNECTION'));

        $result = [];
        # Check if there should be more results
        $stats = $redis->hgetall($metager->getRedisEngineResult() . "status");
        $stats["startTime"] = floatval($stats["startTime"]);
        $stats["engineCount"] = intval($stats["engineCount"]);
        $stats["engineAnswered"] = intval($stats["engineAnswered"]);
        $stats["engineDelivered"] = intval($stats["engineDelivered"]);

        $result["finished"] = true;
        $result["engineCount"] = $stats["engineCount"];
        $result["engineAnswered"] = $stats["engineAnswered"];
        $result["engineDelivered"] = $stats["engineDelivered"];
        $result["timeWaiting"] = microtime(true) - $stats["startTime"];

        # Check if we can abort
        if ($stats["engineAnswered"] > $stats["engineDelivered"]/*&& $result["timeWaiting"] <= 10 */) {
            $metager->parseFormData($request);
            # Nach Spezialsuchen überprüfen:
            $metager->checkSpecialSearches($request);

            # Read which search engines are new
            $newEngines = [];

            while (($engine = $redis->lpop($metager->getRedisResultWaitingKey())) != null) {
                $result["engineDelivered"]++;
                $newEngines[$engine] = $metager->getSumaFile()->sumas->{$engine};
            }
            $cache = Cache::get($hash);
            if ($cache != null) {
                $metager->setNext(unserialize($cache)["engines"]);
            }

            # Check if this request is not for page one
            $metager->setEngines($request, $newEngines);

            # Add the results already delivered to the user
            $results = $redis->lrange($metager->getRedisCurrentResultList(), 0, -1);
            foreach ($results as $index => $oldResult) {
                $results[$index] = unserialize(base64_decode($oldResult));
                $results[$index]->new = false;
            }
            $metager->setResults($results);
            $metager->retrieveResults();
            $metager->rankAll();
            $metager->prepareResults();
            $result["nextSearchLink"] = $metager->nextSearchLink();
            $results = $metager->getResults();
            foreach ($results as $index => $resultTmp) {
                if ($resultTmp->new) {
                    if ($metager->getFokus() !== "bilder") {
                        $view = View::make('layouts.result', ['result' => $resultTmp, 'metager' => $metager]);
                        $html = $view->render();
                        $result['newResults'][$index] = $html;
                        $result["imagesearch"] = false;
                    } else {
                        $view = View::make('layouts.image_result', ['result' => $resultTmp, 'metager' => $metager]);
                        $html = $view->render();
                        $result['newResults'][$index] = $html;
                        $result["imagesearch"] = true;
                    }
                }
            }
            # Save the results in Redis
            $pipeline = $redis->pipeline();
            $pipeline->hincrby($metager->getRedisEngineResult() . "status", "engineDelivered", sizeof($newEngines));
            $pipeline->hset($metager->getRedisEngineResult() . "status", "nextSearchLink", $result["nextSearchLink"]);
            foreach ($metager->getResults() as $resultTmp) {
                $resultTmp->new = false;
                $pipeline->rpush($metager->getRedisCurrentResultList(), base64_encode(serialize($resultTmp)));
            }
            $pipeline->expire($metager->getRedisCurrentResultList(), env('REDIS_RESULT_CACHE_DURATION'));
            $pipeline->execute();

        }
        return response()->json($result);
    }

    public function botProtection($redirect)
    {
        $hash = md5(date('YmdHi'));
        return view('botProtection')
            ->with('hash', $hash)
            ->with('r', $redirect);
    }

    public function get($url)
    {
        $ctx = stream_context_create(array('http' => array('timeout' => 2)));
        return file_get_contents($url, false, $ctx);
    }

    private function startsWith($haystack, $needle)
    {
        $length = strlen($needle);
        return (substr($haystack, 0, $length) === $needle);
    }

    public function tips(Request $request)
    {
        $tips_text = file_get_contents(TIP_SERVER);
        $tips = [];
        try {
            $tips_xml = simplexml_load_string($tips_text);

            $tips_xml->registerXPathNamespace('mg', 'http://metager.de/tips/');
            $tips_xml = $tips_xml->xpath('mg:tip');
            foreach ($tips_xml as $tip_xml) {
                $tips[] = $tip_xml->__toString();
            }
        } catch (\Exception $e) {
            Log::error("A problem occurred loading tips from the tip server.");
            Log::error($e->getMessage());
            abort(500);
        }
        return view('tips')
            ->with('title', trans('tips.title'))
            ->with('tips', $tips);
    }
}
