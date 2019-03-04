<?php

namespace App\Http\Controllers;

use App;
use App\MetaGer;
use Illuminate\Http\Request;

const TIP_SERVER = 'http://metager3.de:63825/tips.xml';

class MetaGerSearch extends Controller
{
    public function search(Request $request, MetaGer $metager)
    {
        $focus = $request->input("focus", "web");

        if ($focus === "maps") {
            $searchinput = $request->input('eingabe', '');
            return redirect()->to('https://maps.metager.de/map/' . $searchinput . '/1240908.5493525574,6638783.2192695495,6');
        }

        /*if ($focus !== "angepasst" && $this->startsWith($focus, "focus_")) {
        $metager->parseFormData($request);
        return $metager->createView();
        }*/

        #die($request->header('User-Agent'));
        $time = microtime();
        # Mit gelieferte Formulardaten parsen und abspeichern:
        $metager->parseFormData($request);

        # Nach Spezialsuchen überprüfen:
        $metager->checkSpecialSearches($request);

        # Die Quicktips als Job erstellen
        $quicktips = $metager->createQuicktips();

        # Suche für alle zu verwendenden Suchmaschinen als Job erstellen,
        # auf Ergebnisse warten und die Ergebnisse laden
        $metager->createSearchEngines($request);

        # Versuchen die Ergebnisse der Quicktips zu laden
        $quicktipResults = $quicktips->loadResults();

        # Alle Ergebnisse vor der Zusammenführung ranken:
        $metager->rankAll();

        # Ergebnisse der Suchmaschinen kombinieren:
        $metager->prepareResults();

        # Die Ausgabe erstellen:
        return $metager->createView($quicktipResults);
    }

    public function botProtection($redirect)
    {
        $hash = md5(date('YmdHi'));
        return view('botProtection')
            ->with('hash', $hash)
            ->with('r', $redirect);
    }

    public function get($url)
    {
        $ctx = stream_context_create(array('http' => array('timeout' => 2)));
        return file_get_contents($url, false, $ctx);
    }

    private function startsWith($haystack, $needle)
    {
        $length = strlen($needle);
        return (substr($haystack, 0, $length) === $needle);
    }

    public function tips(Request $request)
    {
        $tips_text = file_get_contents(TIP_SERVER);
        $tips = [];
        try {
            $tips_xml = simplexml_load_string($tips_text);

            $tips_xml->registerXPathNamespace('mg', 'http://metager.de/tips/');
            $tips_xml = $tips_xml->xpath('mg:tip');
            foreach ($tips_xml as $tip_xml) {
                $tips[] = $tip_xml->__toString();
            }
        } catch (\Exception $e) {
            Log::error("A problem occurred loading tips from the tip server.");
            Log::error($e->getMessage());
            abort(500);
        }
        return view('tips')
            ->with('title', trans('tips.title'))
            ->with('tips', $tips);
    }
}
