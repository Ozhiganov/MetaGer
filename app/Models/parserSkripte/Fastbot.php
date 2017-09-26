<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;

class Fastbot extends Searchengine
{
    public $results = [];

    public function __construct(\SimpleXMLElement $engine, \App\MetaGer $metager)
    {
        parent::__construct($engine, $metager);
        if (strpos($this->urlEncode($metager->getEingabe()), "%") !== false) {
            $this->enabled = false;
            return null;
        }
    }

    public function loadResults($result)
    {
        $result  = utf8_encode($result);
        $counter = 0;
        foreach (explode("\n", $result) as $line) {
            $line = trim($line);
            if (strlen($line) > 0) {
                # Hier bekommen wir jedes einzelne Ergebnis
                $result = explode("|:|", $line);
                if(count($result) < 4) continue;
                $link   = $result[1];
                $link   = substr($link, strpos($link, "href=\"") + 6);
                $link   = substr($link, 0, strpos($link, "\""));
                $counter++;
                $this->gefVon    = "<a href=\"" . $this->homepage . "\" target=\"_blank\" rel=\"noopener\">" . $this->displayName . " " . trans('results.redirect') . "</a>";
                $this->results[] = new \App\Models\Result(
                    $this->engine,
                    trim(strip_tags($result[1])),
                    $link,
                    $result[3],
                    $result[2],
                    $this->gefVon,
                    $counter
                );
            }

        }

    }
}
