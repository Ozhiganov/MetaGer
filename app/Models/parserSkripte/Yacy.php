<?php

namespace app\Models\parserSkripte;
use App\Models\Searchengine;

class Yacy extends Searchengine 
{
    public $results = [];

    function __construct (\SimpleXMLElement $engine, \App\MetaGer $metager)
    {
        parent::__construct($engine, $metager);
    }

    public function loadResults (String $result)
    {
        
       # die($result);
        try {
            $content = simplexml_load_string($result);
        } catch (\Exception $e) {
            abort(500, "$result is not a valid xml string");
        }

        $results = $content->xpath("//rss/channel/item");

        foreach($results as $res)
        {
            $title = $res->{"title"};
            $link = $res->{"link"};
            $anzeigeLink = $link;
            $descr = $res->{"description"};

            $this->counter++;
            $this->results[] = new \App\Models\Result(
                $title,
                $link,
                $anzeigeLink,
                $descr,
                $this->gefVon,
                $this->counter
            );
        }       
    }
}