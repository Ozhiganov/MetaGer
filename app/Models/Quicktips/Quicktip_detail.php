<?php

namespace App\Models\Quicktips;

class Quicktip_detail
{
    public $title;
    public $link;
    public $descr;

    public function __construct($title, $link, $descr)
    {
        $this->title = $title;
        $this->link = $link;
        $this->descr = $descr;
    }
}
