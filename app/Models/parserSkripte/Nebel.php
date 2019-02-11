<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;

class Nebel extends Searchengine
{
    public $results = [];

    public function __construct($name, \stdClass $engine, \App\MetaGer $metager)
    {
        parent::__construct($name, $engine, $metager);
    }

    public function loadResults($result)
    {
        $results = trim($result);
        foreach (explode("\n", $results) as $result) {
            $res = explode("|", $result);
            if (sizeof($res) < 3) {
                continue;
            }

            $title = $res[1];
            $link = $res[0];
            $anzeigeLink = $link;
            $descr = $res[2];

            $this->counter++;
            $this->results[] = new \App\Models\Result(
                $this->engine,
                $title,
                $link,
                $anzeigeLink,
                $descr,
                $this->engine->{"display-name"}, $this->engine->homepage,
                $this->counter
            );
        }

    }
}
