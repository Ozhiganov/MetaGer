<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;

class Dmoznebel extends Searchengine
{
    public $results = [];

    public function __construct($name, \StdClass $engine, \App\MetaGer $metager)
    {
        parent::__construct($name, $engine, $metager);
    }

    public function loadResults($result)
    {

        $result  = mb_convert_encoding($result, "UTF-8", "ISO-8859-1");
        $results = trim($result);

        foreach (explode("\n", $results) as $result) {
            $res = explode("|", $result);
            if (sizeof($res) < 3) {
                continue;
            }
            $title       = $res[1];
            $link        = $res[2];
            $anzeigeLink = $link;
            $descr       = $res[3];

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
