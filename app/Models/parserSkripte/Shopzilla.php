<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;
use Log;

class Shopzilla extends Searchengine
{
    public $results = [];

    public function __construct($name, \StdClass $engine, \App\MetaGer $metager)
    {
        parent::__construct($name, $engine, $metager);
    }

    public function loadResults($result)
    {
        $result = preg_replace("/\r\n/si", "", $result);
        try {
            $content = simplexml_load_string($result);
            if (!$content) {
                return;
            }

            $results = $content->{"Products"};
            $count = 0;
            foreach ($results->{"Offer"} as $result) {
                $title = $result->{"title"}->__toString();
                $link = $result->{"url"}->__toString();
                $anzeigeLink = $result->{"rawUrl"}->__toString();
                // Try to extract the display Urls:

                if (preg_match("/^http[s]{0,1}:\/\/ad.eanalyzer.de/", $anzeigeLink)) {
                    $parts = parse_url($anzeigeLink);
                    parse_str($parts['query'], $query);
                    $anzeigeLink = $query["url"];
                }
                $descr = $result->{"description"}->__toString();
                $image = $result->{"Images"}->{"Image"}[1]->__toString();
                $price = $result->{"price"}->__toString();
                $this->counter++;

                $this->results[] = new \App\Models\Result(
                    $this->engine,
                    $title,
                    $link,
                    $anzeigeLink,
                    $descr,
                    $this->engine->{"display-name"}, $this->engine->homepage,
                    $this->counter,
                    ['partnershop' => true,
                        'price' => $price,
                        'image' => $image]
                );
                $count++;
            }
        } catch (\Exception $e) {
            Log::error("A problem occurred parsing results from $this->name:");
            Log::error($e->getMessage());
            return;
        }
    }

    public function getNext(\App\MetaGer $metager, $result)
    {
        $result = preg_replace("/\r\n/si", "", $result);
        try {
            $content = simplexml_load_string($result);
            if (!$content) {
                return;
            }
        } catch (\Exception $e) {
            Log::error("A problem occurred parsing results from $this->name:");
            Log::error($e->getMessage());
            return;
        }

        // Get total Result Count
        $totalResults = intval($content->{"Products"}["totalResults"]->__toString());

        // Get the current Result Position
        $current = 0;
        if (strpos($this->getString, "&start=") !== false) {
            $tmp = substr($this->getString, strpos($this->getString, "&start=") + 7);
            if (strpos($tmp, "&") !== false) {
                $tmp = substr($tmp, 0, strpos($tmp, "&"));
            }
            $current = intval($tmp);
        }

        if ($current >= ($totalResults - 10)) {
            return;
        }

        # Erstellen des neuen Suchmaschinenobjekts und anpassen des GetStrings:
        $next = new Shopzilla($this->name, $this->engine, $metager);
        if (strpos($next->getString, "&start=") !== false) {
            $next->getString = preg_replace("/&start=\d+/si", "&start=" . ($current + 10), $next->getString);
        } else {
            $next->getString .= "&start=" . ($current + 10);
        }

        $next->hash = md5($next->engine->host . $next->getString . $next->engine->port . $next->name);
        $this->next = $next;
    }
}
