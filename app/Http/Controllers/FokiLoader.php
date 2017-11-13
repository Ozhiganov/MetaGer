<?php

namespace App\Http\Controllers;

use App;

class FokiLoader
{
    public static function loadFoki()
    {
        $sumaFile = "";
        if (App::isLocale('en')) {
            $sumaFile = config_path() . "/sumas.xml";
        } else {
            $sumaFile = config_path() . "/sumas.xml";
        }

        $xml   = simplexml_load_file($sumaFile);
        $sumas = $xml->xpath("suma");

        $foki = [];
        foreach ($sumas as $suma) {
            if ((!isset($suma['disabled']) || $suma['disabled'] === "") && (!isset($suma['userSelectable']) || $suma['userSelectable']->__toString() === "1")) {
                if (isset($suma['type'])) {
                    $f = explode(",", $suma['type']->__toString());
                    foreach ($f as $tmp) {
                        $displayName                             = $suma['displayName']->__toString();
                        $url                                     = isset($suma['homepage']) ? $suma['homepage']->__toString() : "https://metager.de";
                        $foki[$tmp][$suma['name']->__toString()] = ['displayName' => $displayName, 'url' => $url];
                    }
                } else {
                    $displayName                                 = $suma['displayName']->__toString();
                    $url                                         = isset($suma['homepage']) ? $suma['homepage']->__toString() : "https://metager.de";
                    $foki["andere"][$suma['name']->__toString()] = ['displayName' => $displayName, 'url' => $url];
                }
            }
        }

        return $foki;
    }
}
