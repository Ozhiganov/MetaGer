<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;
use Log;

class Flickr extends Searchengine
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

            $results = $content->xpath('//photos/photo');
            foreach ($results as $result) {
                $title = $result["title"]->__toString();
                $link = "https://www.flickr.com/photos/" . $result["owner"]->__toString() . "/" . $result["id"]->__toString();
                $anzeigeLink = $link;
                $descr = "";
                $image = "http://farm" . $result["farm"]->__toString() . ".staticflickr.com/" . $result["server"]->__toString() . "/" . $result["id"]->__toString() . "_" . $result["secret"]->__toString() . "_t.jpg";
                $this->counter++;
                $this->results[] = new \App\Models\Result(
                    $this->engine,
                    $title,
                    $link,
                    $anzeigeLink,
                    $descr,
                    $this->engine->{"display-name"}, $this->engine->homepage,
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

    public function getNext(\App\MetaGer $metager, $result)
    {
        $result = preg_replace("/\r\n/si", "", $result);
        try {
            $content = simplexml_load_string($result);
            if (!$content) {
                return;
            }

            $page = $metager->getPage() + 1;
            $results = $content->xpath('//photos')[0];
            if ($page >= intval($results["pages"]->__toString())) {
                return;
            }
            $next = new Flickr($this->name, $this->engine, $metager);
            $next->getString .= "&page=" . $page;
            $next->hash = md5($next->engine->host . $next->getString . $next->engine->port . $next->name);
            $this->next = $next;
        } catch (\Exception $e) {
            Log::error("A problem occurred parsing results from $this->name:");
            Log::error($e->getMessage());
            return;
        }
    }
}
