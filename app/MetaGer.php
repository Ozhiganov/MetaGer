<?php
namespace App;

use App;
use Cache;
use Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Jenssegers\Agent\Agent;
use LaravelLocalization;
use Log;
use Predis\Connection\ConnectionException;

class MetaGer
{
    # Einstellungen für die Suche
    protected $fokus;
    protected $eingabe;
    protected $q;
    protected $page;
    protected $lang;
    protected $cache = "";
    protected $site;
    protected $time = 2000;
    protected $hostBlacklist = [];
    protected $domainBlacklist = [];
    private $urlBlacklist = [];
    protected $stopWords = [];
    protected $phrases = [];
    protected $engines = [];
    protected $totalResults = 0;
    protected $results = [];
    protected $queryFilter = [];
    protected $parameterFilter = [];
    protected $ads = [];
    protected $warnings = [];
    protected $errors = [];
    protected $addedHosts = [];
    protected $availableFoki = [];
    protected $startCount = 0;
    protected $canCache = false;
    # Daten über die Abfrage$
    protected $ip;
    protected $useragent;
    protected $language;
    protected $agent;
    protected $apiKey = "";
    protected $apiAuthorized = false;
    protected $next = [];
    # Konfigurationseinstellungen:
    protected $sumaFile;
    protected $mobile;
    protected $resultCount;
    protected $sprueche;
    protected $newtab;
    protected $domainsBlacklisted = [];
    protected $urlsBlacklisted = [];
    protected $url;
    protected $fullUrl;
    protected $languageDetect;
    protected $verificationId;
    protected $verificationCount;
    protected $searchUid;
    protected $redisResultWaitingKey, $redisResultEngineList, $redisEngineResult, $redisCurrentResultList;

    public function __construct($hash = "")
    {
        # Timer starten
        $this->starttime = microtime(true);
        # Versuchen Blacklists einzulesen
        if (file_exists(config_path() . "/blacklistDomains.txt") && file_exists(config_path() . "/blacklistUrl.txt")) {
            $tmp = file_get_contents(config_path() . "/blacklistDomains.txt");
            $this->domainsBlacklisted = explode("\n", $tmp);
            $tmp = file_get_contents(config_path() . "/blacklistUrl.txt");
            $this->urlsBlacklisted = explode("\n", $tmp);
        } else {
            Log::warning("Achtung: Eine, oder mehrere Blacklist Dateien, konnten nicht geöffnet werden");
        }

        # Parser Skripte einhängen
        $dir = app_path() . "/Models/parserSkripte/";
        foreach (scandir($dir) as $filename) {
            $path = $dir . $filename;
            if (is_file($path)) {
                require_once $path;
            }
        }

        # Cachebarkeit testen
        try {
            Cache::has('test');
            $this->canCache = true;
        } catch (ConnectionException $e) {
            $this->canCache = false;
        }
        if ($hash === "") {
            $this->searchUid = md5(uniqid());
        } else {
            $this->searchUid = $hash;
        }
        $redisPrefix = "search";
        # This is a list on which the MetaGer process can do a blocking pop to wait for new results
        $this->redisResultWaitingKey = $redisPrefix . "." . $this->searchUid . ".ready";
        # This is a list of searchengines which have delivered results for this search
        $this->redisResultEngineList = $redisPrefix . "." . $this->searchUid . ".engines";
        # This is the key where the results of the engine are stored as well as some statistical data
        $this->redisEngineResult = $redisPrefix . "." . $this->searchUid . ".results.";
        # A list of all search results already delivered to the user (sorted of course)
        $this->redisCurrentResultList = $redisPrefix . "." . $this->searchUid . ".currentResults";

    }

    # Erstellt aus den gesammelten Ergebnissen den View
    public function createView($quicktipResults = [])
    {
        # Hiermit werden die evtl. ausgewählten SuMas extrahiert, damit die Input-Boxen richtig gesetzt werden können
        $focusPages = [];

        foreach ($this->request->all() as $key => $value) {
            if (starts_with($key, 'engine_') && $value === 'on') {
                $focusPages[] = $key;
            }
        }

        $viewResults = [];
        # Wir extrahieren alle notwendigen Variablen und geben Sie an unseren View:
        foreach ($this->results as $result) {
            $viewResults[] = get_object_vars($result);
        }
        # Wir müssen natürlich noch den Log für die durchgeführte Suche schreiben:
        $this->createLogs();
        if ($this->fokus === "bilder") {
            switch ($this->out) {
                case 'results':
                    return view('resultpages.results_images')
                        ->with('results', $viewResults)
                        ->with('eingabe', $this->eingabe)
                        ->with('mobile', $this->mobile)
                        ->with('warnings', $this->warnings)
                        ->with('errors', $this->errors)
                        ->with('apiAuthorized', $this->apiAuthorized)
                        ->with('metager', $this)
                        ->with('browser', (new Agent())->browser());
                default:
                    return view('resultpages.resultpage_images')
                        ->with('results', $viewResults)
                        ->with('eingabe', $this->eingabe)
                        ->with('mobile', $this->mobile)
                        ->with('warnings', $this->warnings)
                        ->with('errors', $this->errors)
                        ->with('apiAuthorized', $this->apiAuthorized)
                        ->with('metager', $this)
                        ->with('browser', (new Agent())->browser())
                        ->with('quicktips', $quicktipResults)
                        ->with('focus', $this->fokus)
                        ->with('resultcount', count($this->results));
            }
        } else {
            switch ($this->out) {
                case 'results':
                    return view('resultpages.results')
                        ->with('results', $viewResults)
                        ->with('eingabe', $this->eingabe)
                        ->with('mobile', $this->mobile)
                        ->with('warnings', $this->warnings)
                        ->with('errors', $this->errors)
                        ->with('apiAuthorized', $this->apiAuthorized)
                        ->with('metager', $this)
                        ->with('browser', (new Agent())->browser())
                        ->with('fokus', $this->fokus);
                    break;
                case 'results-with-style':
                    return view('resultpages.resultpage')
                        ->with('results', $viewResults)
                        ->with('eingabe', $this->eingabe)
                        ->with('mobile', $this->mobile)
                        ->with('warnings', $this->warnings)
                        ->with('errors', $this->errors)
                        ->with('apiAuthorized', $this->apiAuthorized)
                        ->with('metager', $this)
                        ->with('suspendheader', "yes")
                        ->with('browser', (new Agent())->browser())
                        ->with('fokus', $this->fokus);
                    break;
                case 'rich':
                    return view('resultpages.metager3rich')
                        ->with('results', $viewResults)
                        ->with('eingabe', $this->eingabe)
                        ->with('mobile', $this->mobile)
                        ->with('warnings', $this->warnings)
                        ->with('errors', $this->errors)
                        ->with('apiAuthorized', $this->apiAuthorized)
                        ->with('metager', $this)
                        ->with('browser', (new Agent())->browser())
                        ->with('fokus', $this->fokus);
                    break;
                case 'rss20':
                    return view('resultpages.metager3resultsrss20')
                        ->with('results', $viewResults)
                        ->with('eingabe', $this->eingabe)
                        ->with('apiAuthorized', $this->apiAuthorized)
                        ->with('metager', $this)
                        ->with('resultcount', sizeof($viewResults))
                        ->with('fokus', $this->fokus);
                    break;
                case 'api':
                    return response()->view('resultpages.metager3resultsatom10', ['results' => $viewResults, 'eingabe' => $this->eingabe, 'metager' => $this, 'resultcount' => sizeof($viewResults), 'apiAuthorized' => $this->apiAuthorized])->header('Content-Type', 'application/xml');
                    break;
                case 'atom10':
                    return response()->view('resultpages.metager3resultsatom10', ['results' => $viewResults, 'eingabe' => $this->eingabe, 'metager' => $this, 'resultcount' => sizeof($viewResults), 'apiAuthorized' => true])
                        ->header('Content-Type', 'application/xml');
                    break;
                case 'result-count':
                    # Wir geben die Ergebniszahl und die benötigte Zeit zurück:
                    return sizeof($viewResults) . ";" . round((microtime(true) - $this->starttime), 2);
                    break;
                default:
                    return view('resultpages.resultpage')
                        ->with('eingabe', $this->eingabe)
                        ->with('focusPages', $focusPages)
                        ->with('mobile', $this->mobile)
                        ->with('warnings', $this->warnings)
                        ->with('errors', $this->errors)
                        ->with('apiAuthorized', $this->apiAuthorized)
                        ->with('metager', $this)
                        ->with('browser', (new Agent())->browser())
                        ->with('quicktips', $quicktipResults)
                        ->with('resultcount', count($this->results))
                        ->with('focus', $this->fokus);
                    break;
            }
        }
    }

    public function prepareResults()
    {
        $engines = $this->engines;
        // combine
        $this->combineResults($engines);
        // misc (WiP)
        if ($this->fokus == "nachrichten") {
            $this->results = array_filter($this->results, function ($v, $k) {
                return !is_null($v->getRank());
            }, ARRAY_FILTER_USE_BOTH);
            uasort($this->results, function ($a, $b) {
                $datea = $a->getDate();
                $dateb = $b->getDate();
                return $dateb - $datea;
            });
        } else {
            uasort($this->results, function ($a, $b) {
                if ($a->getRank() == $b->getRank()) {
                    return 0;
                }

                return ($a->getRank() < $b->getRank()) ? 1 : -1;
            });
        }

        # Validate Results
        $newResults = [];
        foreach ($this->results as $result) {
            if ($result->isValid($this)) {
                $newResults[] = $result;
            }

        }
        $this->results = $newResults;

        #Adgoal Implementation
        if (!$this->apiAuthorized) {
            $this->results = $this->parseAdgoal($this->results);
        }

        # Human Verification
        $this->results = $this->humanVerification($this->results);
        $this->ads = $this->humanVerification($this->ads);

        $counter = 0;
        $firstRank = 0;

        if (count($this->results) <= 0) {
            if (strlen($this->site) > 0) {
                $no_sitesearch_query = str_replace(urlencode("site:" . $this->site), "", $this->fullUrl);
                $this->errors[] = trans('metaGer.results.failedSitesearch', ['altSearch' => $no_sitesearch_query]);
            } else {
                $this->errors[] = trans('metaGer.results.failed');
            }
        }

        if ($this->canCache() && isset($this->next) && count($this->next) > 0 && count($this->results) > 0) {
            $page = $this->page + 1;
            $this->next = [
                'page' => $page,
                'engines' => $this->next,
            ];
            Cache::put($this->getSearchUid(), serialize($this->next), 60);
        } else {
            $this->next = [];
        }

    }

    public function combineResults($engines)
    {
        foreach ($engines as $engine) {
            if (isset($engine->next)) {
                $this->next[] = $engine->next;
            }
            if (isset($engine->last)) {
                $this->last[] = $engine->last;
            }
            foreach ($engine->results as $result) {
                if ($result->valid) {
                    $this->results[] = $result;
                }
            }
            foreach ($engine->ads as $ad) {
                $this->ads[] = $ad;
            }
        }
    }

    public function parseAdgoal($results)
    {
        $publicKey = getenv('adgoal_public');
        $privateKey = getenv('adgoal_private');
        if ($publicKey === false) {
            return $results;
        }
        $tldList = "";
        try {
            foreach ($results as $result) {
                if (!$result->new) {
                    continue;
                }
                $link = $result->anzeigeLink;
                if (strpos($link, "http") !== 0) {
                    $link = "http://" . $link;
                }
                $tldList .= parse_url($link, PHP_URL_HOST) . ",";
                $result->tld = parse_url($link, PHP_URL_HOST);
            }
            $tldList = rtrim($tldList, ",");

            # Hashwert
            $hash = md5("meta" . $publicKey . $tldList . "GER");

            # Query
            $query = urlencode($this->q);

            $link = "https://api.smartredirect.de/api_v2/CheckForAffiliateUniversalsearchMetager.php?p=" . $publicKey . "&k=" . $hash . "&tld=" . $tldList . "&q=" . $query;
            $answer = json_decode(file_get_contents($link));

            # Nun müssen wir nur noch die Links für die Advertiser ändern:
            foreach ($answer as $el) {
                $hoster = $el[0];
                $hash = $el[1];

                foreach ($results as $result) {
                    if ($result->new && $hoster === $result->tld && !$result->partnershop) {
                        # Hier ist ein Advertiser:
                        # Das Logo hinzufügen:
                        if ($result->image !== "") {
                            $result->logo = "https://img.smartredirect.de/logos_v2/60x30/" . $hash . ".gif";
                        } else {
                            $result->image = "https://img.smartredirect.de/logos_v2/120x60/" . $hash . ".gif";
                        }

                        # Den Link hinzufügen:
                        $publicKey = $publicKey;
                        $targetUrl = $result->anzeigeLink;
                        if (strpos($targetUrl, "http") !== 0) {
                            $targetUrl = "http://" . $targetUrl;
                        }

                        $gateHash = md5($targetUrl . $privateKey);
                        $newLink = "https://api.smartredirect.de/api_v2/ClickGate.php?p=" . $publicKey . "&k=" . $gateHash . "&url=" . urlencode($targetUrl) . "&q=" . $query;
                        $result->link = $newLink;
                        $result->partnershop = true;
                    }
                }
            }
        } catch (\ErrorException $e) {
            return $results;
        }

        return $results;
    }

    public function humanVerification($results)
    {
        # Let's check if we need to implement a redirect for human verification
        if ($this->verificationCount > 10) {
            foreach ($results as $result) {
                $link = $result->link;
                $day = Carbon::now()->day;
                $pw = md5($this->verificationId . $day . $link . env("PROXY_PASSWORD"));
                $url = route('humanverification', ['mm' => $this->verificationId, 'pw' => $pw, "url" => urlencode(str_replace("/", "<<SLASH>>", base64_encode($link)))]);
                $proxyPw = md5($this->verificationId . $day . $result->proxyLink . env("PROXY_PASSWORD"));
                $proxyUrl = route('humanverification', ['mm' => $this->verificationId, 'pw' => $proxyPw, "url" => urlencode(str_replace("/", "<<SLASH>>", base64_encode($result->proxyLink)))]);
                $result->link = $url;
                $result->proxyLink = $proxyUrl;
            }
            return $results;
        } else {
            return $results;
        }
    }

    public function authorize($key)
    {
        $postdata = http_build_query(array(
            'dummy' => rand(),
        ));
        $opts = array('http' => array(
            'method' => 'POST',
            'header' => 'Content-type: application/x-www-form-urlencoded',
            'content' => $postdata,
        ),
        );

        $context = stream_context_create($opts);

        try {
            $link = "https://key.metager3.de/" . urlencode($key) . "/request-permission/api-access";
            $result = json_decode(file_get_contents($link, false, $context));
            if ($result->{'api-access'} == true) {
                return true;
            } else {
                return false;
            }

        } catch (\ErrorException $e) {
            return false;
        }
    }

    public function createQuicktips()
    {
        # Die quicktips werden als job erstellt und zur Abarbeitung freigegeben
        $quicktips = new \App\Models\Quicktips\Quicktips($this->q, LaravelLocalization::getCurrentLocale(), $this->getTime());
        return $quicktips;
    }

    /*
     * Die Erstellung der Suchmaschinen bis die Ergebnisse da sind mit Unterfunktionen
     */

    public function createSearchEngines(Request $request)
    {
        # Wenn es kein Suchwort gibt
        if (!$request->filled("eingabe") || $this->q === "") {
            return;
        }

        $this->enabledSearchengines = [];
        $overtureEnabled = false;

        # Check if selected focus is valid
        if (empty($this->sumaFile->foki->{$this->fokus})) {
            $this->fokus = "web";
        }
        foreach ($this->sumaFile->foki->{$this->fokus}->sumas as $suma) {
            # Check if this engine is disabled and can't be used
            $disabled = empty($this->sumaFile->sumas->{$suma}->disabled) ? false : $this->sumaFile->sumas->{$suma}->disabled;
            $autoDisabled = empty($this->sumaFile->sumas->{$suma}->{"auto-disabled"}) ? false : $this->sumaFile->sumas->{$suma}->{"auto-disabled"};
            if ($disabled || $autoDisabled) {
                continue;
            }

            # Check if this engine can use eventually defined query-filter
            $valid = true;
            foreach ($this->queryFilter as $queryFilter => $filter) {
                if (empty($this->sumaFile->filter->{"query-filter"}->$queryFilter->sumas->$suma)) {
                    $valid = false;
                    break;
                }
            }
            # Check if this engine can use eventually defined parameter-filter
            if ($valid) {
                foreach ($this->parameterFilter as $filterName => $filter) {
                    # We need to check if the searchengine supports the parameter value, too
                    $value = $request->input($filter->{"get-parameter"}, "");
                    if (empty($filter->sumas->$suma) || empty($filter->sumas->{$suma}->values->{$value})) {
                        $valid = false;
                        break;
                    }
                }
            }
            # Check if this engine should only be active when filter is used
            if ($this->sumaFile->sumas->{$suma}->{"filter-opt-in"}) {
                # This search engine should only be used when a parameter filter of it is used
                $validTmp = false;
                foreach ($this->parameterFilter as $filterName => $filter) {
                    if (!empty($filter->sumas->{$suma})) {
                        $validTmp = true;
                        break;
                    }
                }
                if (!$validTmp) {
                    $valid = false;
                }

            }
            # If it can we add it
            if ($valid) {
                $this->enabledSearchengines[$suma] = $this->sumaFile->sumas->{$suma};
            }

        }

        # Implements Yahoo Ads if Yahoo is not enabled as a searchengine
        if (empty($this->enabledSearchengines["yahoo"]) && $this->fokus != "bilder" && !empty($this->sumaFile->sumas->{"yahoo-ads"})) {
            $this->enabledSearchengines["yahoo-ads"] = $this->sumaFile->sumas->{"yahoo-ads"};
        }

        if (sizeof($this->enabledSearchengines) === 0) {
            $filter = "";
            foreach ($this->queryFilter as $queryFilter => $filterPhrase) {
                $filter .= trans($this->sumaFile->filter->{"query-filter"}->{$queryFilter}->name) . ",";
            }
            $filter = rtrim($filter, ",");
            $error = trans('metaGer.engines.noSpecialSearch', ['fokus' => trans($this->sumaFile->foki->{$this->fokus}->{"display-name"}),
                'filter' => $filter]);
            $this->errors[] = $error;
        }
        $engines = [];
        $typeslist = [];
        $counter = 0;
        $this->setEngines($request);
    }

    public function setEngines(Request $request, $enabledSearchengines = [])
    {
        if ($this->requestIsCached($request)) {
            # If this is a page other than 1 the request is "cached"
            $engines = $this->getCachedEngines($request);
            # We need to edit some Options of the Cached Search Engines
            foreach ($engines as $engine) {
                $engine->setResultHash($this->getSearchUid());
            }
            $this->engines = $engines;
        } else {
            if (sizeof($enabledSearchengines) > 0) {
                $this->enabledSearchengines = $enabledSearchengines;
            }
            $this->actuallyCreateSearchEngines($this->enabledSearchengines);
        }
    }

    public function startSearch()
    {
        # Wir starten alle Suchen
        foreach ($this->engines as $engine) {
            $engine->startSearch($this);
        }
    }

    # Spezielle Suchen und Sumas

    public function sumaIsSelected($suma, $request, $custom)
    {
        if ($custom) {
            if ($request->filled("engine_" . strtolower($suma["name"]))) {
                return true;
            }
        } else {
            $types = explode(",", $suma["type"]);
            if (in_array($this->fokus, $types)) {
                return true;
            }
        }
        return false;
    }

    public function actuallyCreateSearchEngines($enabledSearchengines)
    {
        $engines = [];
        foreach ($enabledSearchengines as $engineName => $engine) {

            if (!isset($engine->{"parser-class"})) {
                die(var_dump($engine));
            }
            # Setze Pfad zu Parser
            $path = "App\\Models\\parserSkripte\\" . $engine->{"parser-class"};

            # Prüfe ob Parser vorhanden
            if (!file_exists(app_path() . "/Models/parserSkripte/" . $engine->{"parser-class"} . ".php")) {
                Log::error("Konnte " . $engine->{"display-name"} . " nicht abfragen, da kein Parser existiert");
                $this->errors[] = trans('metaGer.engines.noParser', ['engine' => $engine->{"display-name"}]);
                continue;
            }

            # Es wird versucht die Suchengine zu erstellen
            $time = microtime();
            try {
                $tmp = new $path($engineName, $engine, $this);
            } catch (\ErrorException $e) {
                Log::error("Konnte " . $engine->{"display-name"} . " nicht abfragen. " . var_dump($e));
                continue;
            }

            $engines[] = $tmp;
        }
        $this->engines = $engines;
    }

    public function getAvailableParameterFilter()
    {
        $parameterFilter = $this->sumaFile->filter->{"parameter-filter"};

        $availableFilter = [];

        foreach ($parameterFilter as $filterName => $filter) {
            # Check if any of the enabled search engines provide this filter
            foreach ($this->enabledSearchengines as $engineName => $engine) {
                if (!empty($filter->sumas->$engineName)) {
                    $availableFilter[$filterName] = $filter;
                }
            }
            # We will also add the filter from the opt-in search engines (the searchengines that are only used when a filter of it is too)
            foreach ($this->sumaFile->foki->{$this->fokus}->sumas as $suma) {
                if ($this->sumaFile->sumas->{$suma}->{"filter-opt-in"}) {
                    if (!empty($filter->sumas->{$suma})) {
                        # If the searchengine is disabled this filter shouldn't be available
                        if ((!empty($this->sumaFile->sumas->{$suma}->disabled) && $this->sumaFile->sumas->{$suma}->disabled === true)
                            || (!empty($this->sumaFile->sumas->{$suma}->{"auto-disabled"}) && $this->sumaFile->sumas->{$suma}->{"auto-disabled"} === true)) {
                            continue;
                        }
                        $availableFilter[$filterName] = $filter;
                    }
                }
            }
        }

        return $availableFilter;
    }

    public function isBildersuche()
    {
        return $this->fokus === "bilder";
    }

    public function sumaIsAdsuche($suma, $overtureEnabled)
    {
        $sumaName = $suma["name"]->__toString();
        return
            $sumaName === "qualigo"
            || $sumaName === "similar_product_ads"
            || (!$overtureEnabled && $sumaName === "overtureAds");
    }

    public function sumaIsDisabled($suma)
    {
        return
        isset($suma['disabled'])
        && $suma['disabled']->__toString() === "1";
    }

    public function sumaIsOverture($suma)
    {
        return
        $suma["name"]->__toString() === "overture"
        || $suma["name"]->__toString() === "overtureAds";
    }

    public function sumaIsNotAdsuche($suma)
    {
        return
        $suma["name"]->__toString() !== "qualigo"
        && $suma["name"]->__toString() !== "similar_product_ads"
        && $suma["name"]->__toString() !== "overtureAds";
    }

    public function requestIsCached($request)
    {
        return
        $request->filled('next')
        && Cache::has($request->input('next'))
        && unserialize(Cache::get($request->input('next')))['page'] > 1;
    }

    public function getCachedEngines($request)
    {
        $next = unserialize(Cache::get($request->input('next')));
        $this->page = $next['page'];
        $engines = $next['engines'];
        return $engines;
    }

    public function waitForMainResults()
    {
        $redis = Redis::connection(env('REDIS_RESULT_CONNECTION'));
        $engines = $this->engines;
        $enginesToWaitFor = [];
        $mainEngines = $this->sumaFile->foki->{$this->fokus}->main;
        foreach ($mainEngines as $mainEngine) {
            foreach ($engines as $engine) {
                if (!$engine->cached && $engine->name === $mainEngine) {
                    $enginesToWaitFor[] = $engine;
                }
            }
        }

        $timeStart = microtime(true);
        $answered = [];
        $results = null;

        # If there is no main searchengine to wait for or if the only main engine is yahoo-ads we will define a timeout of 1s
        $forceTimeout = null;
        if (sizeof($enginesToWaitFor) === 0 || (sizeof($enginesToWaitFor) === 1 && $enginesToWaitFor[0]->name === "yahoo-ads")) {
            $forceTimeout = 1;
        }

        while (sizeof($enginesToWaitFor) > 0 || ($forceTimeout !== null && (microtime(true) - $timeStart) < $forceTimeout)) {
            $newEngine = $redis->blpop($this->redisResultWaitingKey, 1);
            if ($newEngine === null || sizeof($newEngine) !== 2) {
                continue;
            } else {
                $newEngine = $newEngine[1];
                foreach ($enginesToWaitFor as $index => $engine) {
                    if ($engine->name === $newEngine) {
                        unset($enginesToWaitFor[$index]);
                        break;
                    }
                }
                $answered[] = $newEngine;
            }
            if ((microtime(true) - $timeStart) >= 2) {
                break;
            }
        }

        # Now we can add an entry to Redis which defines the starting time and how many engines should answer this request

        $pipeline = $redis->pipeline();
        $pipeline->hset($this->getRedisEngineResult() . "status", "startTime", $timeStart);
        $pipeline->hset($this->getRedisEngineResult() . "status", "engineCount", sizeof($engines));
        $pipeline->hset($this->getRedisEngineResult() . "status", "engineDelivered", sizeof($answered));
        # Add the cached engines as answered
        foreach ($engines as $engine) {
            if ($engine->cached) {
                $pipeline->hincrby($this->getRedisEngineResult() . "status", "engineDelivered", 1);
                $pipeline->hincrby($this->getRedisEngineResult() . "status", "engineAnswered", 1);
            }
        }
        foreach ($answered as $engine) {
            $pipeline->hset($this->getRedisEngineResult() . $engine, "delivered", "1");
        }
        $pipeline->execute();

    }

    public function retrieveResults()
    {
        $engines = $this->engines;
        # Von geladenen Engines die Ergebnisse holen
        foreach ($engines as $engine) {
            if (!$engine->loaded) {
                try {
                    $engine->retrieveResults($this);
                } catch (\ErrorException $e) {
                    Log::error($e);
                }
            }
            if (!empty($engine->totalResults) && $engine->totalResults > $this->totalResults) {
                $this->totalResults = $engine->totalResults;
            }
        }
    }

/*
 * Ende Suchmaschinenerstellung und Ergebniserhalt
 */

    public function parseFormData(Request $request)
    {

        # Sichert, dass der request in UTF-8 formatiert ist
        if ($request->input('encoding', 'utf8') !== "utf8") {
            # In früheren Versionen, als es den Encoding Parameter noch nicht gab, wurden die Daten in ISO-8859-1 übertragen
            $input = $request->all();
            foreach ($input as $key => $value) {
                $input[$key] = mb_convert_encoding("$value", "UTF-8", "ISO-8859-1");
            }
            $request->replace($input);
        }
        $this->url = $request->url();
        $this->fullUrl = $request->fullUrl();
        # Zunächst überprüfen wir die eingegebenen Einstellungen:
        # Fokus
        $this->fokus = $request->input('focus', 'web');
        # Suma-File
        if (App::isLocale("en")) {
            $this->sumaFile = config_path() . "/sumasEn.json";
        } else {
            $this->sumaFile = config_path() . "/sumas.json";
        }
        if (!file_exists($this->sumaFile)) {
            die(trans('metaGer.formdata.cantLoad'));
        } else {
            $this->sumaFile = json_decode(file_get_contents($this->sumaFile));
        }
        # Sucheingabe
        $this->eingabe = trim($request->input('eingabe', ''));
        $this->q = $this->eingabe;
        # IP
        $this->ip = $this->anonymizeIp($request->ip());

        $this->useragent = $request->header('User-Agent');

        # Language
        if (isset($_SERVER['HTTP_LANGUAGE'])) {
            $this->language = $_SERVER['HTTP_LANGUAGE'];
        } else {
            $this->language = "";
        }

        # Page
        $this->page = 1;
        # Lang
        $this->lang = $request->input('lang', 'all');
        if ($this->lang !== "de" && $this->lang !== "en" && $this->lang !== "all") {
            $this->lang = "all";
        }

        $this->agent = new Agent();
        $this->mobile = $this->agent->isMobile();
        # Sprüche
        $this->sprueche = $request->input('sprueche', 'on');
        if ($this->sprueche === "on") {
            $this->sprueche = true;
        } else {
            $this->sprueche = false;
        }

        $this->newtab = $request->input('newtab', 'on');
        if ($this->newtab === "on") {
            $this->newtab = "_blank";
        } else {
            $this->newtab = "_self";
        }
        if ($request->filled("key") && $request->input('key') === getenv("mainz_key")) {
            $this->newtab = "_blank";
        }
        # Theme
        $this->theme = preg_replace("/[^[:alnum:][:space:]]/u", '', $request->input('theme', 'default'));
        # Ergebnisse pro Seite:
        $this->resultCount = $request->input('resultCount', '20');

        if ($request->filled('minism') && ($request->filled('fportal') || $request->filled('harvest'))) {
            $input = $request->all();
            $newInput = [];
            foreach ($input as $key => $value) {
                if ($key !== "fportal" && $key !== "harvest") {
                    $newInput[$key] = $value;
                }
            }
            $request->replace($newInput);
        }
        if (App::isLocale("en")) {
            $this->sprueche = "off";
        }
        if ($this->resultCount <= 0 || $this->resultCount > 200) {
            $this->resultCount = 1000;
        }
        if ($request->filled('onenewspageAll') || $request->filled('onenewspageGermanyAll')) {
            $this->time = 5000;
            $this->cache = "cache";
        }
        if ($request->filled('password')) {
            $this->password = $request->input('password');
        }
        if ($request->filled('quicktips')) {
            $this->quicktips = false;
        } else {
            $this->quicktips = true;
        }

        $this->queryFilter = [];
        $this->verificationId = $request->input('verification_id', null);
        $this->verificationCount = intval($request->input('verification_count', '0'));

        $this->apiKey = $request->input('key', '');
        if (empty($this->apiKey)) {
            $this->apiKey = \Cookie::get('key');
            if (empty($this->apiKey)) {
                $this->apiKey = "";
            }
        }
        if ($this->apiKey) {
            $this->apiAuthorized = $this->authorize($this->apiKey);
        }

        // Remove Inputs that are not used
        $this->request = $request->replace($request->except(['verification_id', 'uid', 'verification_count']));

        $this->out = $request->input('out', "html");
        # Standard output format html
        if ($this->out !== "html" && $this->out !== "json" && $this->out !== "results" && $this->out !== "results-with-style" && $this->out !== "result-count" && $this->out !== "rss20" && $this->out !== "atom10" && $this->out !== "rich" && $this->out !== "api") {
            $this->out = "html";
        }
        # Wir schalten den Cache aus, wenn die Ergebniszahl überprüft werden soll
        #   => out=result-count
        # Ist dieser Parameter gesetzt, so soll überprüft werden, wie viele Ergebnisse wir liefern.
        # Wenn wir gecachte Ergebnisse zurück liefern würden, wäre das nicht sonderlich klug, da es dann keine Aussagekraft hätte
        # ob MetaGer funktioniert (bzw. die Fetcher laufen)
        # Auch ein Log sollte nicht geschrieben werden, da es am Ende ziemlich viele Logs werden könnten.
        if ($this->out === "result-count") {
            $this->canCache = false;
            $this->shouldLog = false;
        } else {
            $this->shouldLog = true;
        }
    }

    private function anonymizeIp($ip)
    {
        if (str_contains($ip, ":")) {
            # IPv6
            # Check if IP contains "::"
            if (str_contains($ip, "::")) {
                $ipAr = explode("::", $ip);
                $count = 0;
                if (!empty($ipAr[0])) {
                    $ipLAr = explode(":", $ipAr[0]);
                    $count += sizeof($ipLAr);
                }
                if (!empty($ipAr[1])) {
                    $ipRAr = explode(":", $ipAr[1]);
                    $count += sizeof($ipRAr);
                }

                $fillUp = "";
                for ($i = 1; $i <= (8 - $count); $i++) {
                    $fillUp .= "0000:";
                }
                $fillUp = rtrim($fillUp, ":");

                $ip = $ipAr[0] . ":" . $fillUp . ":" . $ipAr[1];
                $ip = trim($ip, ":");
            }
            $resultIp = "";
            foreach (explode(":", $ip) as $block) {
                $blockAr = str_split($block);
                while (sizeof($blockAr) < 4) {
                    array_unshift($blockAr, "0");
                }
                $resultIp .= implode("", $blockAr) . ":";
            }
            $resultIp = rtrim($resultIp, ":");

            # Now that we have the expanded Form of the IPv6 we can anonymize it
            # we use the first 48 bit and replace the rest with zeros
            # Our expanded IPv6 now has 8 blocks with 16 bit each
            # xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx
            # We just want to use the first thre blocks and replace the rest with zeros
            # xxxx:xxxx:xxxx::
            $resultIp = preg_replace("/^([^:]+:[^:]+:[^:]+).*$/", "$1::", $resultIp);
            return $resultIp;
        } else {
            # IPv4
            return preg_replace("/(\d+)\.(\d+)\.\d+.\d+/s", "$1.$2.0.0", $ip);
        }
        die(var_dump($ip));
    }

    public function checkSpecialSearches(Request $request)
    {
        $this->searchCheckPhrase();

        # Check for query-filter (i.e. Sitesearch, etc.):
        foreach ($this->sumaFile->filter->{"query-filter"} as $filterName => $filter) {
            if (!empty($filter->{"optional-parameter"}) && $request->filled($filter->{"optional-parameter"})) {
                $this->queryFilter[$filterName] = $request->input($filter->{"optional-parameter"});
            } else if (preg_match_all("/" . $filter->regex . "/si", $this->q, $matches) > 0) {
                switch ($filter->match) {
                    case "last":
                        $this->queryFilter[$filterName] = $matches[$filter->save][sizeof($matches[$filter->save]) - 1];
                        $toDelete = preg_quote($matches[$filter->delete][sizeof($matches[$filter->delete]) - 1], "/");
                        $this->q = preg_replace('/(' . $toDelete . '(?!.*' . $toDelete . '))/si', '', $this->q);
                        break;
                    default: # First occurence
                        $this->queryFilter[$filterName] = $matches[$filter->save][0];
                        $toDelete = preg_quote($matches[$filter->delete][0], "/");
                        $this->q = preg_replace('/' . $toDelete . '/si', '', $this->q, 1);
                }
            }

        }
        # Check for parameter-filter (i.e. SafeSearch)
        $this->parameterFilter = [];
        $usedParameters = [];
        foreach ($this->sumaFile->filter->{"parameter-filter"} as $filterName => $filter) {
            if (!empty($usedParameters[$filter->{"get-parameter"}])) {
                die("Der Get-Parameter \"" . $filter->{"get-parameter"} . "\" wird mehrfach verwendet!");
            } else {
                $usedParameters[$filter->{"get-parameter"}] = true;
            }
            if ($request->filled($filter->{"get-parameter"})) {
                $this->parameterFilter[$filterName] = $filter;
            }
        }
        $this->searchCheckHostBlacklist($request);
        $this->searchCheckDomainBlacklist($request);
        $this->searchCheckUrlBlacklist();
        $this->searchCheckStopwords($request);
        $this->searchCheckNoSearch();
    }

    private function searchCheckPhrase()
    {
        $p = "";
        $tmp = $this->q;
        // matches '[... ]"test satz"[ ...]'
        while (preg_match("/(^|.*?\s)\"(.+)\"(\s.*|$)/si", $tmp, $match)) {
            $tmp = $match[1] . $match[3];
            $this->phrases[] = $match[2];
        }
        foreach ($this->phrases as $phrase) {
            $p .= "\"$phrase\", ";
        }
        $p = rtrim($p, ", ");
        if (sizeof($this->phrases) > 0) {
            $this->warnings[] = trans('metaGer.formdata.phrase', ['phrase' => $p]);
        }
    }

    private function searchCheckHostBlacklist($request)
    {
        // matches '[... ]-site:test.de[ ...]'
        while (preg_match("/(^|.*?\s)-site:([^\*\s]\S*)(\s.*|$)/si", $this->q, $match)) {
            $this->hostBlacklist[] = $match[2];
            $this->q = $match[1] . $match[3];
        }
        # Overwrite Setting if it's submitted via Parameter
        if ($request->has('blacklist')) {
            $this->hostBlacklist = [];
            $blacklistString = trim($request->input('blacklist'));
            if (strpos($blacklistString, ",") !== false) {
                $blacklistArray = explode(',', $blacklistString);
                foreach ($blacklistArray as $blacklistElement) {
                    $blacklistElement = trim($blacklistElement);
                    if (strpos($blacklistElement, "*") !== 0) {
                        $this->hostBlacklist[] = $blacklistElement;
                    }
                }
            } else if (strpos($blacklistString, "*") !== 0) {
                $this->hostBlacklist[] = $blacklistString;
            }
        }

        // print the host blacklist as a user warning
        if (sizeof($this->hostBlacklist) > 0) {
            $hostString = "";
            foreach ($this->hostBlacklist as $host) {
                $hostString .= $host . ", ";
            }
            $hostString = rtrim($hostString, ", ");
            $this->warnings[] = trans('metaGer.formdata.hostBlacklist', ['host' => $hostString]);
        }
    }

    private function searchCheckDomainBlacklist($request)
    {
        // matches '[... ]-site:*.test.de[ ...]'
        while (preg_match("/(^|.*?\s)-site:\*\.(\S+)(\s.*|$)/si", $this->q, $match)) {
            $this->domainBlacklist[] = $match[2];
            $this->q = $match[1] . $match[3];
        }
        # Overwrite Setting if it's submitted via Parameter
        if ($request->has('blacklist')) {
            $this->domainBlacklist = [];
            $blacklistString = trim($request->input('blacklist'));
            if (strpos($blacklistString, ",") !== false) {
                $blacklistArray = explode(',', $blacklistString);
                foreach ($blacklistArray as $blacklistElement) {
                    $blacklistElement = trim($blacklistElement);
                    if (strpos($blacklistElement, "*.") === 0) {
                        $this->domainBlacklist[] = substr($blacklistElement, strpos($blacklistElement, "*.") + 2);
                    }
                }
            } else if (strpos($blacklistString, "*.") === 0) {
                $this->domainBlacklist[] = substr($blacklistString, strpos($blacklistString, "*.") + 2);
            }
        }
        // print the domain blacklist as a user warning
        if (sizeof($this->domainBlacklist) > 0) {
            $domainString = "";
            foreach ($this->domainBlacklist as $domain) {
                $domainString .= $domain . ", ";
            }
            $domainString = rtrim($domainString, ", ");
            $this->warnings[] = trans('metaGer.formdata.domainBlacklist', ['domain' => $domainString]);
        }
    }

    private function searchCheckUrlBlacklist()
    {
        // matches '[... ]-site:*.test.de[ ...]'
        while (preg_match("/(^|.*?\s)-url:(\S+)(\s.*|$)/si", $this->q, $match)) {
            $this->urlBlacklist[] = $match[2];
            $this->q = $match[1] . $match[3];
        }
        // print the url blacklist as a user warning
        if (sizeof($this->urlBlacklist) > 0) {
            $urlString = "";
            foreach ($this->urlBlacklist as $url) {
                $urlString .= $url . ", ";
            }
            $urlString = rtrim($urlString, ", ");
            $this->warnings[] = trans('metaGer.formdata.urlBlacklist', ['url' => $urlString]);
        }
    }

    private function searchCheckStopwords($request)
    {
        $oldQ = $this->q;
        // matches '[... ]-test[ ...]'
        $words = preg_split("/\s+/si", $this->q);
        $newQ = "";
        foreach ($words as $word) {
            if (strpos($word, "-") === 0 && strlen($word) > 1) {
                $this->stopWords[] = substr($word, 1);
            } else {
                $newQ .= " " . $word;
            }
        }
        $this->q = trim($newQ);
        # Overwrite Setting if submitted via Parameter
        if ($request->has('stop')) {
            $this->stopWords = [];
            $stop = trim($request->input('stop'));
            if (strpos($stop, ',') !== false) {
                $stopArray = explode(',', $stop);
                foreach ($stopArray as $stopElement) {
                    $stopElement = trim($stopElement);
                    $this->stopWords[] = $stopElement;
                }
            } else {
                $this->stopWords[] = $stop;
            }
            $this->q = $oldQ;
        }
        // print the stopwords as a user warning
        if (sizeof($this->stopWords) > 0) {
            $stopwordsString = "";
            foreach ($this->stopWords as $stopword) {
                $stopwordsString .= $stopword . ", ";
            }
            $stopwordsString = rtrim($stopwordsString, ", ");
            $this->warnings[] = trans('metaGer.formdata.stopwords', ['stopwords' => $stopwordsString]);
        }
    }

    private function searchCheckNoSearch()
    {
        if ($this->q === "") {
            $this->warnings[] = trans('metaGer.formdata.noSearch');
        }
    }

    public function nextSearchLink()
    {
        if (isset($this->next) && isset($this->next['engines']) && count($this->next['engines']) > 0) {
            $requestData = $this->request->except(['page', 'out']);
            if ($this->request->input('out', '') !== "results" && $this->request->input('out', '') !== '') {
                $requestData["out"] = $this->request->input('out');
            }
            $requestData['next'] = $this->getSearchUid();
            $link = action('MetaGerSearch@search', $requestData);
        } else {
            $link = "#";
        }
        return $link;
    }

    public function rankAll()
    {
        foreach ($this->engines as $engine) {
            $engine->rank($this->getQ());
        }
    }

# Hilfsfunktionen
    public function startsWith($haystack, $needle)
    {
        $length = strlen($needle);
        return (substr($haystack, 0, $length) === $needle);
    }

    public function removeInvalids()
    {
        $results = [];
        foreach ($this->results as $result) {
            if ($result->isValid($this)) {
                $results[] = $result;
            }
        }
        $this->results = $results;
    }

    public function atLeastOneSearchengineSelected(Request $request)
    {
        foreach ($request->all() as $key => $value) {
            if ($this->startsWith($key, 'engine')) {
                return true;
            }
        }
        return false;
    }

    public function showQuicktips()
    {
        return $this->quicktips;
    }

    public function popAd()
    {
        if (count($this->ads) > 0) {
            return array_shift($this->ads);
        } else {
            return null;
        }
    }

    public function canCache()
    {
        return $this->canCache;
    }

    public function createLogs()
    {
        if ($this->shouldLog) {
            $redis = Redis::connection('redisLogs');
            try
            {
                $logEntry = "";
                $logEntry .= "[" . date("D M d H:i:s") . "]";
                /*
                Someone might wonder now why we are saving the IP-Adress to the log file here:
                It's because we were targets of heavy Bot attacks which created so many Search-Request to our Servers that
                not only our servers but the ones from some of our search engines too collapsed.
                At that point we could'nt prevent the Bot from accessing our server because we would need it's IP-Adress to do so.

                That's why we need to save the IP-Adress to our Log-Files temporarily. The logrotate process that shifts our Log-Files will then
                automatically remove the IP-Adresses from the Log-File after a few hours.
                This method gives us just enough time to prevent malicious Software from bringing our servers down and at the same time having not a single
                IP-Adress older than one day stored on our servers. (Except the ones who got banned in that short period of course) ;-)
                 */
                $logEntry .= " ip=" . $this->request->ip();
                $logEntry .= " ref=" . $this->request->header('Referer');
                $logEntry .= " time=" . round((microtime(true) - $this->starttime), 2) . " serv=" . $this->fokus;
                $logEntry .= " interface=" . LaravelLocalization::getCurrentLocale();
                $logEntry .= " sprachfilter=" . $this->lang;

                # 2 Arten von Logs in einem wird die Anzahl der Abfragen an eine Suchmaschine gespeichert und in der anderen
                # die Anzahl, wie häufig diese Ergebnisse geliefert hat.
                $redis->rpush('logs.search', $logEntry);
            } catch (\Exception $e) {
                return;
            }
        }
    }

    public function setNext($next)
    {
        $this->next = $next;
    }

    public function addLink($link)
    {
        if (strpos($link, "http://") === 0) {
            $link = substr($link, 7);
        }

        if (strpos($link, "https://") === 0) {
            $link = substr($link, 8);
        }

        if (strpos($link, "www.") === 0) {
            $link = substr($link, 4);
        }

        $link = trim($link, "/");
        $hash = md5($link);
        if (isset($this->addedLinks[$hash])) {
            return false;
        } else {
            $this->addedLinks[$hash] = 1;
            return true;
        }
    }

    public function addHostCount($host)
    {
        $hash = md5($host);
        if (isset($this->addedHosts[$hash])) {
            $this->addedHosts[$hash] += 1;
        } else {
            $this->addedHosts[$hash] = 1;
        }
    }

# Generators

    public function generateSearchLink($fokus, $results = true)
    {
        $except = ['page', 'next'];
        # Remove every Filter
        foreach ($this->sumaFile->filter->{"parameter-filter"} as $filterName => $filter) {
            $except[] = $filter->{"get-parameter"};
        }
        $requestData = $this->request->except($except);
        $requestData['focus'] = $fokus;
        $requestData['out'] = "";

        $link = action('MetaGerSearch@search', $requestData);
        return $link;
    }

    public function generateQuicktipLink()
    {
        $link = action('MetaGerSearch@quicktips');

        return $link;
    }

    public function generateSiteSearchLink($host)
    {
        $host = urlencode($host);
        $requestData = $this->request->except(['page', 'out', 'next']);
        $requestData['eingabe'] .= " site:$host";
        $requestData['focus'] = "web";
        $link = action('MetaGerSearch@search', $requestData);
        return $link;
    }

    public function generateRemovedHostLink($host)
    {
        $host = urlencode($host);
        $requestData = $this->request->except(['page', 'out', 'next']);
        $requestData['eingabe'] .= " -site:$host";
        $link = action('MetaGerSearch@search', $requestData);
        return $link;
    }

    public function generateRemovedDomainLink($domain)
    {
        $domain = urlencode($domain);
        $requestData = $this->request->except(['page', 'out', 'next']);
        $requestData['eingabe'] .= " -site:*.$domain";
        $link = action('MetaGerSearch@search', $requestData);
        return $link;
    }

    public function getUnFilteredLink()
    {
        $requestData = $this->request->except(['lang']);
        $requestData['lang'] = "all";
        $link = action('MetaGerSearch@search', $requestData);
        return $link;
    }

# Komplexe Getter

    public function getHostCount($host)
    {
        $hash = md5($host);
        if (isset($this->addedHosts[$hash])) {
            return $this->addedHosts[$hash];
        } else {
            return 0;
        }
    }

    public function getImageProxyLink($link)
    {
        $requestData = [];
        $requestData["url"] = $link;
        $link = action('Pictureproxy@get', $requestData);
        return $link;
    }

    public function getSearchUid()
    {
        return $this->searchUid;
    }

# Einfache Getter

    public function getVerificationId()
    {
        return $this->verificationId;
    }

    public function getNext()
    {
        return $this->next;
    }

    public function getVerificationCount()
    {
        return $this->verificationCount;
    }

    public function getSite()
    {
        return $this->site;
    }

    public function getNewtab()
    {
        return $this->newtab;
    }

    public function setResults($results)
    {
        $this->results = $results;
    }

    public function getResults()
    {
        return $this->results;
    }

    public function getFokus()
    {
        return $this->fokus;
    }

    public function getIp()
    {
        return $this->ip;
    }

    public function getUserAgent()
    {
        return $this->useragent;
    }

    public function getEingabe()
    {
        return $this->eingabe;
    }

    public function getQ()
    {
        return $this->q;
    }

    public function getUrl()
    {
        return $this->url;
    }

    public function getLanguage()
    {
        return $this->language;
    }

    public function getLang()
    {
        return $this->lang;
    }

    public function getAvailableFoki()
    {
        return $this->availableFoki;
    }

    public function getSprueche()
    {
        return $this->sprueche;
    }

    public function getPhrases()
    {
        return $this->phrases;
    }
    public function getPage()
    {
        return $this->page;
    }

    public function getSumaFile()
    {
        return $this->sumaFile;
    }

    public function getTotalResultCount()
    {
        return number_format($this->totalResults, 0, ",", ".");
    }

    public function getQueryFilter()
    {
        return $this->queryFilter;
    }

    public function getParameterFilter()
    {
        return $this->parameterFilter;
    }

    public function getTime()
    {
        return $this->time;
    }

    public function getUserHostBlacklist()
    {
        return $this->hostBlacklist;
    }

    public function getUserDomainBlacklist()
    {
        return $this->domainBlacklist;
    }

    public function getUserUrlBlacklist()
    {
        return $this->urlBlacklist;
    }

    public function getDomainBlacklist()
    {
        return $this->domainsBlacklisted;
    }

    public function getUrlBlacklist()
    {
        return $this->urlsBlacklisted;
    }

    public function getLanguageDetect()
    {
        return $this->languageDetect;
    }

    public function getStopWords()
    {
        return $this->stopWords;
    }

    public function getStartCount()
    {
        return $this->startCount;
    }

    public function getRedisResultWaitingKey()
    {
        return $this->redisResultWaitingKey;
    }

    public function getRedisResultEngineList()
    {
        return $this->redisResultEngineList;
    }

    public function getRedisEngineResult()
    {
        return $this->redisEngineResult;
    }
    public function getRedisCurrentResultList()
    {
        return $this->redisCurrentResultList;
    }
}
