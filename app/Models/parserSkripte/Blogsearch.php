<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;
use Log;

class Blogsearch extends Searchengine
{
    public $results = [];

    public function __construct(\SimpleXMLElement $engine, \App\MetaGer $metager)
    {
        parent::__construct($engine, $metager);
    }

    public function loadResults($result)
    {
        $result = preg_replace("/\r\n/si", "", $result);
        try {
            $content = simplexml_load_string($result);
            if (!$content) {
                return;
            }

            $results = $content->xpath('//xml/docs/doc');
            foreach ($results as $result) {
                $title       = $result->{"title"}->__toString();
                $link        = $result->{"url"}->__toString();
                $anzeigeLink = $link;
                $descr       = $result->{"content"}->__toString();
                $this->counter++;
                $this->results[] = new \App\Models\Result(
                    $this->engine,
                    $title,
                    $link,
                    $anzeigeLink,
                    $descr,
                    $this->gefVon,
                    $this->counter
                );
            }
        } catch (\Exception $e) {
            Log::error("A problem occurred parsing results from $this->name:");
            Log::error($e->getMessage());
            return;
        }
    }
}
