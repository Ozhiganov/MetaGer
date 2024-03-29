<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;

class Onenewspagevideo extends Searchengine
{
    public $results = [];
    public $resultCount = 0;

    private $offset = 0;
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
            $title = $res[0];
            $link = $res[2];
            $anzeigeLink = $link;
            $descr = $res[1];
            $additionalInformation = sizeof($res) > 3 ? ['date' => intval($res[3])] : [];

            $this->counter++;
            $this->results[] = new \App\Models\Result(
                $this->engine,
                $title,
                $link,
                $anzeigeLink,
                $descr,
                $this->engine->{"display-name"}, $this->engine->homepage,
                $this->counter,
                $additionalInformation
            );
        }
        if (count($this->results) > $this->resultCount) {
            $this->resultCount += count($this->results);
        }
    }

    public function getNext(\App\MetaGer $metager, $result)
    {
        if (count($this->results) <= 0) {
            return;
        }

        $next = new Onenewspagevideo($this->name, $this->engine, $metager);
        $next->resultCount = $this->resultCount;
        $next->offset = $this->offset + $this->resultCount;
        $next->getString .= "&o=" . $next->offset;
        $next->hash = md5($next->engine->host . $next->getString . $next->engine->port . $next->name);
        $this->next = $next;
    }
}
