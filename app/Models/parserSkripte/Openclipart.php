<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;
use Log;

class Openclipart extends Searchengine
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

            $results = $content->payload;
            foreach ($results as $result) {
                $title = $result->title;
                $link = $result->detail_link;
                $anzeigeLink = $link;
                $descr = $result->description;
                $image = $result->svg->png_thumb;
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

            if ($content->info->current_page > $content->info->pages) {
                return;
            }
            $next = new Openclipart($this->name, $this->engine, $metager);
            $next->getString .= "&page=" . ($metager->getPage() + 1);
            $next->hash = md5($next->engine->host . $next->getString . $next->engine->port . $next->name);
            $this->next = $next;
        } catch (\Exception $e) {
            Log::error("A problem occurred parsing results from $this->name:");
            Log::error($e->getMessage());
            return;
        }
    }
}
