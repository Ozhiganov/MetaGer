<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;
use Log;

class Pixabay extends Searchengine
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

            $results = $content->hits;
            foreach ($results as $result) {
                $title = $result->tags;
                $link = $result->pageURL;
                $anzeigeLink = $link;
                $descr = "";
                $image = $result->previewURL;
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

            $page = $metager->getPage() + 1;
            try {
                $content = json_decode($result);
            } catch (\Exception $e) {
                Log::error("Results from $this->name are not a valid json string");
                return;
            }
            if (!$content) {
                return;
            }
            if ($page * 20 > $content->total) {
                return;
            }
            $next = new Pixabay($this->name, $this->engine, $metager);
            $next->getString .= "&page=" . $page;
            $next->hash = md5($next->engine->host . $next->getString . $next->engine->port . $next->name);
            $this->next = $next;
        } catch (\Exception $e) {
            Log::error("A problem occurred parsing results from $this->name:");
            Log::error($e->getMessage());
            return;
        }
    }
}
