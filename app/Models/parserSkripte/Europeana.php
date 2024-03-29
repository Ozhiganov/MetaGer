<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;
use Log;

class Europeana extends Searchengine
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
            $content = json_decode($result);
            if (!$content) {
                return;
            }

            $results = $content->items;
            foreach ($results as $result) {
                if (isset($result->edmPreview)) {
                    $title = $result->title[0];
                    if (preg_match("/(.+)\?.*/si", $result->guid, $match)) {
                        $link = $match[1];
                    } else {
                        $link = "";
                    }
                    $anzeigeLink = $link;
                    $descr = "";
                    $image = urldecode($result->edmPreview[0]);
                    $this->counter++;
                    $this->results[] = new \App\Models\Result(
                        $this->engine,
                        $title,
                        $link,
                        $anzeigeLink,
                        $descr,
                        $this->engine->{"display-name"}, $this->engine->homepage,
                        $this->counter,
                        ['image' => $image]
                    );
                }
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
            $content = json_decode($result);
            if (!$content) {
                return;
            }

            $start = ($metager->getPage()) * 10 + 1;
            if ($start > $content->totalResults) {
                return;
            }
            $next = new Europeana($this->engine, $metager);
            $next->getString .= "&start=" . $start;
            $next->hash = md5($next->engine->host . $next->getString . $next->engine->port . $next->name);
            $this->next = $next;
        } catch (\Exception $e) {
            Log::error("A problem occurred parsing results from $this->name:");
            Log::error($e->getMessage());
            return;
        }
    }
}
