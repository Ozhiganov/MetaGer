<?php

namespace App\Models\Quicktips;

class Quicktip
{
    public $type;
    public $title;
    public $link;
    public $gefVonTitle;
    public $gefVonLink;
    public $author;
    public $descr;
    public $details;

    # Erstellt ein neues Ergebnis
    public function __construct($type, $title, $link, $gefVonTitle, $gefVonLink, $author, $descr, $details)
    {
        $this->type = $type;
        $this->title = $title;
        $this->link = $link;
        $this->gefVonTitle = $gefVonTitle;
        $this->gefVonLink = $gefVonLink;
        $this->author = $author;
        $this->descr = $descr;
        $this->details = $details;
    }
}
