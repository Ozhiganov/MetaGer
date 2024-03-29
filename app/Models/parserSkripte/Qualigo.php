<?php

namespace App\Models\parserSkripte;

use App\Models\Searchengine;

class Qualigo extends Searchengine
{

    public function __construct($name, \StdClass $engine, \App\MetaGer $metager)
    {
        parent::__construct($name, $engine, $metager);
    }

    public function loadResults($results)
    {
        try {
            $content = simplexml_load_string($results);
        } catch (\Exception $e) {
            abort(500, "$result is not a valid xml string");
        }

        if (!$content) {
            return;
        }
        $results = $content->xpath('//RL/RANK');
        foreach ($results as $result) {
            $title       = $result->{"TITLE"}->__toString();
            $link        = $result->{"URL"}->__toString();
            $anzeigeLink = $result->{"ORIGURL"}->__toString();
            $descr       = $result->{"ABSTRACT"}->__toString();
            $this->counter++;
            $this->ads[] = new \App\Models\Result(
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
