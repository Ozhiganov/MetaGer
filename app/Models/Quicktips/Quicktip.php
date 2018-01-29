<?php

namespace App\Models\Quicktips;

class Quicktip
{
    public $type;
    public $title;
    public $link;
    public $descr;
    public $details;

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
