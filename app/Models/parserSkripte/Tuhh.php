<?php

namespace app\Models\parserSkripte;
use App\Models\Searchengine;

class Tuhh extends Searchengine 
{
	public $results = [];

	function __construct (\SimpleXMLElement $engine,  \App\MetaGer $metager)
	{
		parent::__construct($engine, $metager);
	}

	public function loadResults ($result)
	{
		try {
			$content = simplexml_load_string($result);
		} catch (\Exception $e) {
			abort(500, "$result is not a valid xml string");
		}
		
		if(!$content)
		{
			return;
		}
		$count = 0;
		foreach($content->{"entry"} as $result)
		{
			if($count > 10)
				break;
			$title = $result->{"title"}->__toString();
			$link = $result->{"link"}["href"]->__toString();
			$anzeigeLink = $link;
			$descr = strip_tags($result->{"summary"}->__toString());
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
			$count++;
		}
		
	}
}