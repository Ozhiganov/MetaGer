<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;

class Zeitde extends Searchengine
{
    public $results = [];

    public function __construct($name, \StdClass $engine, \App\MetaGer $metager)
    {
        parent::__construct($name, $engine, $metager);
    }

    public function loadResults($result)
    {

        $results = json_decode($result);
        if (!$results) {
            return;
        }

        foreach ($results->{"matches"} as $result) {
            if (!isset($result->{"title"}) || !isset($result->{"href"}) || !isset($result->{"snippet"})) {
                continue;
            }

            $title       = $result->{"title"};
            $link        = $result->{"href"};
            $anzeigeLink = $link;
            $descr       = $result->{"snippet"};

            $this->counter++;
            $this->results[] = new \App\Models\Result(
                $this->engine,
                $title,
                $link,
                $anzeigeLink,
                $descr,
                $this->engine->{"display-name"},$this->engine->homepage,
                $this->counter
            );
        }

    }
}
