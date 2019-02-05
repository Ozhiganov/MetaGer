<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;
use Log;

class BingBilder extends Searchengine
{
    public $results = [];

    public function __construct(\SimpleXMLElement $engine, \App\MetaGer $metager)
    {
        parent::__construct($engine, $metager);
    }

    public function loadResults($result)
    {
        try {
            $results = json_decode($result);
            $results = $results->value;

            foreach ($results as $result) {
                $title = $result->name;
                $link = $result->hostPageUrl;
                $anzeigeLink = $link;
                $descr = "";
                $image = $result->thumbnailUrl;
                $this->counter++;
                $this->results[] = new \App\Models\Result(
                    $this->engine,
                    $title,
                    $link,
                    $anzeigeLink,
                    $descr,
                    $this->displayName, $this->homepage,
                    $this->counter,
                    ['image' => $image]
                );

            }

        } catch (\Exception $e) {
            Log::error("A problem occurred parsing results from $this->name:");
            Log::error($e->getMessage());
            return;
        }
    }

    public function getNext(\App\MetaGer $metager, $result)
    {
        try {
            $results = json_decode($result);

            $totalMatches = $results->totalEstimatedMatches;
            $nextOffset = $results->nextOffset;

            if ($nextOffset >= $totalMatches) {
                return;
            }

            $next = new BingBilder(simplexml_load_string($this->engine), $metager);
            if (\str_contains($next->getString, "&offset=")) {
                $next->getString = preg_replace("/&offset=.*/si", "", $next->getString);
            }
            $next->getString .= "&offset=" . $nextOffset;
            $next->hash = md5($next->host . $next->getString . $next->port . $next->name);
            $this->next = $next;

        } catch (\Exception $e) {
            Log::error("A problem occurred parsing results from $this->name:");
            Log::error($e->getMessage());
            return;
        }

    }
}
