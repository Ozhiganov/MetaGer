<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;

class Witch extends Searchengine
{
    public $results = [];

    public function __construct($name, \stdClass $engine, \App\MetaGer $metager)
    {
        parent::__construct($name, $engine, $metager);
    }

    public function loadResults($result)
    {
        $result = html_entity_decode(trim(utf8_encode($result)));

        $results = explode("\n", $result);
        array_shift($results);
        foreach ($results as $res) {

            $res = explode(";", $res);
            if (sizeof($res) !== 4 || $res[3] === "'Kein Ergebnis'") {
                continue;
            }
            $title = trim($res[0], "'");
            $link = trim($res[2], "'");
            $anzeigeLink = $link;
            $descr = trim($res[1], "'");

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

    public function getNext(\App\MetaGer $metager, $result)
    {
        if (count($this->results) <= 0) {
            return;
        }

        $offset = $metager->getPage() * 10;
        $newEngine = unserialize(serialize($this->engine));
        $newEngine->{"get-parameter"}->cn = "$offset";
        $next = new Witch($this->name, $newEngine, $metager);
        $this->next = $next;
    }
}
