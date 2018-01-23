<?php

namespace App\Models;

class Quicktip
{
    private $type;
    private $title;
    private $link;
    private $descr;
    private $details;

    # Erstellt ein neues Ergebnis
    public function __construct($type, $title, $link, $descr, $details)
    {
        $this->type = $type;
        $this->title = $title;
        $this->link = $link;
        $this->descr = $descr;
        $this->details = $details;
    }
}

class Quicktip_Detail
{
    private $title;
    private $link;
    private $descr;

    public function __construct($title, $link, $descr)
    {
        $this->title = $title;
        $this->link = $link;
        $this->descr = $descr;
    }
}
