<?php

namespace App\Models;

class Quicktips
{
    use DispatchesJobs;
    
    const QUICKTIP_URL = "https://quicktips.metager3.de/quicktips.xml";
    const QUICKTIP_NAME = "quicktips";

    public function __construct($search, $locale, $max_time, $resultHash)
    {
        $this->startSearch($search, $locale, $max_time, $resultHash);
    }

    public function startSearch($search, $locale, $max_time, $resultHash)
    {
        $full_url = QUICKTIP_URL . "?search=" . $search . "&locale=" . $locale;

        $hash = md5($full_url);
		
        if (Cache::has($hash)) {
            $cached = true;
            $this->retrieveResults();
        } else {
            // ???
            Redis::hset("search." . $resultHash, QUICKTIP_NAME, "waiting");

            // Queue this search
            $mission = $resultHash . ";" . $url . ";" . $max_time;
            Redis::rpush(QUICKTIP_NAME . ".queue", $mission);

            // Check the current status of Searchers for QUICKTIP_NAME
            $needSearcher = false;
            $searcherData = Redis::hgetall(QUICKTIP_NAME . ".stats");

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
            if ($needSearcher && Redis::get(QUICKTIP_NAME) !== "locked") {
                Redis::set(QUICKTIP_NAME, "locked");
                $this->dispatch(new Searcher(QUICKTIP_NAME));
            }
        }
    }

    public function retrieveResults($hash, $resultHash)
    {
        $body = "";
        if (Cache::has($hash)) {
            $body = Cache::get($hash);
        } elseif (Redis::hexists('search.' . $resultHash, QUICKTIP_NAME)) {
            $body = Redis::hget('search.' . $resultHash, QUICKTIP_NAME);
            Redis::hdel('search.' . $resultHash, QUICKTIP_NAME);
            Cache::put($hash, $body, $cacheDuration);
        }
        if ($body !== "") {
            return $this->loadResults($body);
        } else {
            return false;
        }
    }

    public function loadResults($quicktips_raw) {
        $quicktips_raw = preg_replace("/\r\n/si", "", $quicktips_raw);
        try {
            $content = simplexml_load_string($quicktips_raw);
            if (!$content) {
                return;
            }

            $quicktips = [];

            $quicktips_xpath = $content->xpath('feed/entry');
            foreach ($quicktips_xpath as $quicktip_xml) {
                $type = $quicktip_xml->{"mg:type"}->__toString();
                $title = $quicktip_xml->{"title"}->__toString();
                $link = $quicktip_xml->{"link"}->__toString();
                $descr = $quicktip_xml->{"content"}->__toString();
                $details = [];
                foreach ($quicktip_xml->{"mg:details"}->{"entry"} as $detail_xml) {
                    $details_title = $detail_xml->{"title"}->__toString();
                    $details_link = $detail_xml->{"url"}->__toString();
                    $details_descr = $detail_xml->{"text"}->__toString();
                    $details[] = new \App\Models\Detail(
                        $details_title,
                        $details_link,
                        $details_descr
                    );
                }
                $quicktips[] = new \App\Models\Quicktip(
                    $type,
                    $title,
                    $link,
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
}
