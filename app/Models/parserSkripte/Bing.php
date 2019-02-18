<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;
use Log;

class Bing extends Searchengine
{
    public $results = [];

    public function __construct($name, \stdClass $engine, \App\MetaGer $metager)
    {
        parent::__construct($name, $engine, $metager);
    }

    public function loadResults($result)
    {
        try {
            $results = json_decode($result);
            $this->totalResults = $results->webPages->totalEstimatedMatches;
            $results = $results->webPages->value;

            foreach ($results as $result) {
                $title = $result->name;
                $link = $result->url;
                $anzeigeLink = $result->displayUrl;
                $descr = $result->snippet;
                $this->counter++;
                $this->results[] = new \App\Models\Result(
                    $this->engine,
                    $title,
                    $link,
                    $anzeigeLink,
                    $descr,
                    $this->engine->{"display-name"}, $this->engine->homepage,
                    $this->counter,
                    []
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

            $totalMatches = $results->webPages->totalEstimatedMatches;

            $newEngine = unserialize(serialize($this->engine));

            $perPage = $newEngine->{"get-parameter"}->count;

            $offset = 0;
            if (empty($newEngine->{"get-parameter"}->offset)) {
                $offset = $perPage;
            } else {
                $offset = $newEngine->{"get-parameter"}->offset + $perPage;
            }

            if ($totalMatches < ($offset + $perPage)) {
                return;
            } else {
                $newEngine->{"get-parameter"}->offset = $offset;
            }

            $next = new Bing($this->name, $newEngine, $metager);
            $this->next = $next;

        } catch (\Exception $e) {
            Log::error("A problem occurred parsing results from $this->name:");
            Log::error($e->getMessage());
            return;
        }

    }
}
