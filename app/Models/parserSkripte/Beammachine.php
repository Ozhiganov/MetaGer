<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;

class Beammachine extends Searchengine
{
    public $results = [];

    public function __construct($name, \StdClass $engine, \App\MetaGer $metager)
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
            $title       = $res[0];
            $link        = $res[1];
            $anzeigeLink = $link;
            $descr       = $res[2];

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
