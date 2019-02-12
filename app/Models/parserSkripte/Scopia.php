<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;
use Log;

class Scopia extends Searchengine
{
    public $results = [];

    public function __construct($name, \stdClass $engine, \App\MetaGer $metager)
    {
        parent::__construct($name, $engine, $metager);
    }

    public function loadResults($result)
    {
        $result = html_entity_decode($result);
        $result = preg_replace("/<description>(.*?)<\/description>/si", "<description><![CDATA[ $1 ]]></description>", $result);
        $result = preg_replace("/<title>(.*?)<\/title>/si", "<title><![CDATA[ $1 ]]></title>", $result);
        $result = preg_replace("/<url>(.*?)<\/url>/si", "<url><![CDATA[ $1 ]]></url>", $result);

        try {

            $content = simplexml_load_string($result);
            if (!$content) {
                return;
            }

            $results = $content->xpath('//results/result');
            foreach ($results as $result) {

                $title = $result->title->__toString();
                $link = $result->url->__toString();
                $anzeigeLink = $link;
                $descr = $result->description->__toString();
                $this->counter++;
                $this->results[] = new \App\Models\Result(
                    $this->engine,
                    $title,
                    $link,
                    $anzeigeLink,
                    $descr,
                    $this->engine->{"display-name"},
                    $this->engine->homepage,
                    $this->counter
                );
            }
        } catch (\Exception $e) {
            Log::error("A problem occurred parsing results from $this->name:");
            Log::error($e->getMessage());
            return;
        }
    }

    public function getNext(\App\MetaGer $metager, $result)
    {
        $result = html_entity_decode($result);
        $result = str_replace("&", "&amp;", $result);
        try {
            $content = simplexml_load_string($result);

        } catch (\Exception $e) {
            Log::error("A problem occurred parsing results from $this->name:");
            Log::error($e->getMessage());
            return;
        }

        if (!$content) {
            return;
        }

        $more = $content->xpath('//results/more')[0]->__toString() === "1" ? true : false;

        if ($more) {
            $results = $content->xpath('//results/result');
            $number = $results[sizeof($results) - 1]->number->__toString();
            # Erstellen des neuen Suchmaschinenobjekts und anpassen des GetStrings:
            $newEngine = unserialize(serialize($this->engine));
            $newEngine->{"get-parameter"}->s = $number;
            $next = new Scopia($this->name, $newEngine, $metager);
            $this->next = $next;
        }

    }
}
