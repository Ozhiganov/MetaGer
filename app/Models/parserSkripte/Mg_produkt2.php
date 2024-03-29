<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;
use Log;

class Mg_produkt2 extends Searchengine
{
    public $results = [];

    public function __construct($name, \StdClass $engine, \App\MetaGer $metager)
    {
        parent::__construct($name, $engine, $metager);
    }

    public function loadResults($result)
    {
        $result = preg_replace("/\r\n/si", "", $result);
        try {
            $content = simplexml_load_string($result);
            if (!$content) {
                return;
            }

            $results = $content->xpath('//response/result[@name="response"]/doc');

            foreach ($results as $result) {

                $result      = simplexml_load_string($result->saveXML());
                $title       = $result->xpath('/doc/arr[@name="artikelName"]')[0]->{"str"}->__toString();
                $link        = $result->xpath('/doc/arr[@name="artikelDeeplink"]')[0]->{"str"}->__toString();
                $anzeigeLink = parse_url($link);
                parse_str($anzeigeLink['query'], $query);
                $anzeigeLink = $query['diurl'];
                $descr       = $result->xpath('/doc/arr[@name="artikelBeschreibung"]')[0]->{"str"}->__toString();
                $image       = $result->xpath('/doc/arr[@name="artikelImageurl"]')[0]->{"str"}->__toString();
                $this->counter++;
                $this->results[] = new \App\Models\Result(
                    $this->engine,
                    $title,
                    $link,
                    $anzeigeLink,
                    $descr,
                    $this->engine->{"display-name"},$this->engine->homepage,
                    $this->counter,
                    ['image' => $image]
                );
            }
        } catch (\Exception $e) {
            Log::error("A problem occurred parsing results from $this->name:");
            Log::error($e->getMessage());
            return;
        }
    }
}
