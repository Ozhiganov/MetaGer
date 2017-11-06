<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;

class Fess extends Searchengine
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
            $content = json_decode($result);
            if (!$content) {
                return;
            }

            $results = $content->response->result;
            foreach ($results as $result) {
                try {
                    $title       = $result->content_title;
                    $link        = $result->url;
                    $anzeigeLink = $link;
                    $descr       = $result->content_description;
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
                } catch (\ErrorException $e) {

                }
            }
        } catch (\Exception $e) {
            Log::error("A problem occurred parsing results from $this->name:");
            Log::error($e->getMessage());
            return;
        }
    }
}
