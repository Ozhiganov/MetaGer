<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;

class Similar_product extends Searchengine
{
    public $results = [];

    public function __construct($name, \StdClass $engine, \App\MetaGer $metager)
    {
        parent::__construct($name, $engine, $metager);
    }

    public function loadResults($result)
    {
        $results = json_decode($result);

        foreach ($results->{"products"} as $result) {
            $title       = $result->{"title"};
            $link        = $result->{"product_url"};
            $anzeigeLink = $link;
            $descr       = $result->{"description"};

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
