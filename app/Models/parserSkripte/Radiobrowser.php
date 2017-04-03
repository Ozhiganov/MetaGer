<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;
use Log;

class Radiobrowser extends Searchengine
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

            foreach ($content as $result) {
                $title       = $result->name;
                $link        = $result->homepage;
                $anzeigeLink = $link;
                $descr       = "";
                if ($result->tags != "") {
                    $descr .= "Tags: " . $result->tags;
                }
                if ($result->tags != "") {
                    if ($descr != "") {
                        $descr .= " - ";
                    }
                    $descr .= "Country: " . $result->country;
                }
                if ($result->tags != "") {
                    if ($descr != "") {
                        $descr .= " - ";
                    }
                    $descr .= "Language: " . $result->language;
                }
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
