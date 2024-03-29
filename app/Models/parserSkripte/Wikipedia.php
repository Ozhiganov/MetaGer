<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;

class Wikipedia extends Searchengine
{
    public $results = [];

    public function __construct($name, \StdClass $engine, \App\MetaGer $metager)
    {
        parent::__construct($name, $engine, $metager);
    }

    public function loadResults($result)
    {
        $result  = utf8_decode($result);
        $counter = 0;

        $this->results[] = new \App\Models\Result(
            $this->engine,
            trim(strip_tags($result[1])),
            $link,
            $result[3],
            $result[2],
            $this->engine->{"display-name"},$this->engine->homepage,
            $counter
        );
    }
}
