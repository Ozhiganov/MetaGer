<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;

class ProdSearch extends Searchengine
{
    public $results = [];

    public function __construct($name, \StdClass $engine, \App\MetaGer $metager)
    {
        parent::__construct($name, $engine, $metager);
    }

    public function loadResults($result)
    {
        $results = json_decode($result, true);
        foreach ($results as $result) {
            if ($this->counter >= 10) {
                break;
            }

            $title       = $result["title"];
            $link        = $result["product-link"];
            $anzeigeLink = $link;
            $price       = 0;
            $descr       = "";
            if (isset($result['price_cents'])) {
                $price = intval($result['price_cents']);
                $descr .= "<p>Preis: " . (intval($result['price_cents']) / 100.0) . " €</p>";
            }
            if (isset($result['image-url'])) {
                $image = $result['image-url'];
            }

            $this->counter++;
            $this->results[] = new \App\Models\Result(
                $this->engine,
                $title,
                $link,
                $anzeigeLink,
                $descr,
                $this->engine->{"display-name"},$this->engine->homepage,
                $this->counter,
                [
                    'price' => $price,
                    'image' => $image]
            );
        }
    }
}
