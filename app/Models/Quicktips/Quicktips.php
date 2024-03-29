<?php

namespace App\Models\Quicktips;

use App\Jobs\Searcher;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Support\Facades\Redis;
use Log;

class Quicktips
{
    use DispatchesJobs;

    const QUICKTIP_URL = "http://localhost:63825/1.1/quicktips.xml";
    const QUICKTIP_NAME = "quicktips";
    const CACHE_DURATION = 60;

    private $hash;

    public function __construct($search, $locale, $max_time)
    {
        $this->startSearch($search, $locale, $max_time);
    }

    public function startSearch($search, $locale, $max_time)
    {
        $url = self::QUICKTIP_URL . "?search=" . $this->normalize_search($search) . "&locale=" . $locale;
        # TODO anders weitergeben
        $this->hash = md5($url);

        # TODO cache wieder einbauen (eventuell)
        if ( /*!Cache::has($hash)*/true) {
            $redis = Redis::connection(env('REDIS_RESULT_CONNECTION'));

            $redis->hset("search." . $this->hash . ".results." . self::QUICKTIP_NAME, "status", "waiting");

            // Queue this search
            $mission = $this->hash . ";" . base64_encode($url) . ";" . $max_time;
            Redis::rpush(self::QUICKTIP_NAME . ".queue", $mission);

            // Check the current status of Searchers for QUICKTIP_NAME
            $needSearcher = false;
            $searcherData = Redis::hgetall(self::QUICKTIP_NAME . ".stats");

            // Create additional Searchers for QUICKTIP_NAME if necessary
            if (sizeof($searcherData) === 0) {
                $needSearcher = true;
            } else {
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
            if ($needSearcher && Redis::get(self::QUICKTIP_NAME) !== "locked") {
                Redis::set(self::QUICKTIP_NAME, "locked");
                $this->dispatch(new Searcher(self::QUICKTIP_NAME));
            }
        }
    }

    /**
     * Load the current Quicktip results
     * 1. Retrieve the raw results
     * 2. Parse the results
     * Returns an empty array if no results are found
     */
    public function loadResults()
    {
        $resultsRaw = $this->retrieveResults($this->hash);
        if ($resultsRaw) {
            $results = $this->parseResults($resultsRaw);
            return $results;
        } else {
            return [];
        }
    }

    public function retrieveResults($hash)
    {
        $body = "";
        $redis = Redis::connection(env('REDIS_RESULT_CONNECTION'));
        $body = $redis->hget('search.' . $hash . ".results." . self::QUICKTIP_NAME, "response");

        $redis->del('search.' . $hash . ".results." . self::QUICKTIP_NAME);
        $redis->del('search.' . $hash . ".ready");
        if ($body !== "") {
            return $body;
        } else {
            return false;
        }
    }

    public function parseResults($quicktips_raw)
    {
        $quicktips_raw = preg_replace("/\r\n/si", "", $quicktips_raw);
        try {
            $content = simplexml_load_string($quicktips_raw);
            if (!$content) {
                return;
            }

            $content->registerXPathNamespace('main', 'http://www.w3.org/2005/Atom');

            $quicktips = [];

            $quicktips_xpath = $content->xpath('main:entry');
            foreach ($quicktips_xpath as $quicktip_xml) {
                // Type
                $quicktip_xml->registerXPathNamespace('mg', 'http://metager.de/opensearch/quicktips/');
                $types = $quicktip_xml->xpath('mg:type');
                if (sizeof($types) > 0) {
                    $type = $types[0]->__toString();
                } else {
                    $type = "";
                }

                // Title
                $title = $quicktip_xml->title->__toString();

                // Link
                $link = $quicktip_xml->link['href']->__toString();

                // gefVon
                $quicktip_xml->registerXPathNamespace('mg', 'http://metager.de/opensearch/quicktips/');
                $gefVonTitles = $quicktip_xml->xpath('mg:gefVonTitle');
                if (sizeof($gefVonTitles) > 0) {
                    $gefVonTitle = $gefVonTitles[0]->__toString();
                } else {
                    $gefVonTitle = "";
                }
                $gefVonLinks = $quicktip_xml->xpath('mg:gefVonLink');
                if (sizeof($gefVonLinks) > 0) {
                    $gefVonLink = $gefVonLinks[0]->__toString();
                } else {
                    $gefVonLink = "";
                }

                $quicktip_xml->registerXPathNamespace('mg', 'http://metager.de/opensearch/quicktips/');
                $author = $quicktip_xml->xpath('mg:author');
                if (sizeof($author) > 0) {
                    $author = $author[0]->__toString();
                } else {
                    $author = "";
                }

                // Description
                $descr = $quicktip_xml->content->__toString();

                // Details
                $details = [];
                $details_xpath = $quicktip_xml->xpath('mg:details');
                if (sizeof($details_xpath) > 0) {
                    foreach ($details_xpath[0] as $detail_xml) {
                        $details_title = $detail_xml->title->__toString();
                        $details_link = $detail_xml->url->__toString();
                        $details_descr = $detail_xml->text->__toString();
                        $details[] = new \App\Models\Quicktips\Quicktip_detail(
                            $details_title,
                            $details_link,
                            $details_descr
                        );
                    }
                }
                $quicktips[] = new \App\Models\Quicktips\Quicktip(
                    $type,
                    $title,
                    $link,
                    $gefVonTitle,
                    $gefVonLink,
                    $author,
                    $descr,
                    $details
                );
            }
            return $quicktips;
        } catch (\Exception $e) {
            Log::error("A problem occurred parsing quicktips");
            return [];
        }
    }

    public function normalize_search($search)
    {
        return urlencode($search);
    }
}
