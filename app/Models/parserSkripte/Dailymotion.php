<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;
use Log;

class Dailymotion extends Searchengine
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

            $results = $content->list;
            foreach ($results as $result) {
                $title       = $result->title;
                $link        = $result->url;
                $anzeigeLink = $link;
                $descr       = $result->description;
                $image       = $result->thumbnail_240_url;
                $this->counter++;
                $this->results[] = new \App\Models\Result(
                    $this->engine,
                    $title,
                    $link,
                    $anzeigeLink,
                    $descr,
                    $this->engine->{"display-name"},$this->engine->homepage,
                    $this->counter,
                    ['partnershop' => false]
                );
            }
        } catch (\Exception $e) {
            Log::error("A problem occurred parsing results from $this->name:");
            Log::error($e->getMessage());
            return;
        }
    }
}
