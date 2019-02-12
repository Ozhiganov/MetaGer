<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;

class Dmoznebel_int extends Searchengine
{
    public $results = [];

    public function __construct($name, \StdClass $engine, \App\MetaGer $metager)
    {
        parent::__construct($name, $engine, $metager);
    }

    public function loadResults($result)
    {

        $title       = "";
        $link        = "";
        $anzeigeLink = $link;
        $descr       = "";

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
