<?php

namespace App\Http\Controllers;

use App;
use Illuminate\Http\Request;
use Jenssegers\Agent\Agent;
use Response;
use LaravelLocalization;

class StartpageController extends Controller
{
    /**
     * Load Startpage accordingly to the given URL-Parameter and Mobile
     *
     * @param  int  $id
     * @return Response
     */

    public function loadStartPage(Request $request)
    {
        $focusPages = [];
        $theme      = "default";

        foreach ($request->all() as $key => $value) {
            if ($value === 'on' && $key != 'param_sprueche' && $key != 'param_newtab' && $key !== 'param_maps' && $key !== 'param_autocomplete') {
                $focusPages[] = str_replace('param_', '', $key);
            }
            if ($key === 'param_theme') {
                $theme = str_replace('param_', '', $key);
            }
        }

        $lang = LaravelLocalization::getCurrentLocale();
        if ($lang === 'de') {
            $lang = 'all';
        }

        return view('index')
            ->with('title', trans('titles.index'))
            ->with('homeIcon')
            ->with('focusPages', $focusPages)
            ->with('browser', (new Agent())->browser())
            ->with('navbarFocus', 'suche')
            ->with('theme', $theme)
            ->with('autocomplete', $request->input('param_autocomplete', 'on'))
            ->with('foki', $this->loadFoki())
            ->with('focus', $request->input('focus', 'web'))
            ->with('lang', $lang)
            ->with('resultCount', $request->input('param_resultCount', '20'))
            ->with('time', $request->input('param_time', '1500'))
            ->with('sprueche', $request->input('param_sprueche', 'on'))
            ->with('newtab', $request->input('param_newtab', 'on'))
            ->with('maps', $maps = $request->input('param_maps', 'off'))
            ->with('key', $request->input('param_key', ''));
    }

    public function loadPage($subpage)
    {
        /* TODO CSS und Titel laden
        $css = array(
        'datenschutz' => 'privacy.css',
        );

        if (in_array($subpage, $css)) {
        return view($subpage, [ 'title' => 'Datenschutz Richtlinien', 'css' => $css[$subpage]]);
        } else {
        return view($subpage, [ 'title' => 'Datenschutz Richtlinien']);
        }*/
        return view($subpage, ['title' => 'Datenschutz Richtlinien']);
    }

    public function loadLocalPage($locale = "de", $subpage = "datenschutz")
    {
        \App::setLocale($locale);
        return loadPage($subpage);
    }

    public function loadPlugin($params, $locale = "de")
    {
        $params   = unserialize(base64_decode($params));
        $requests = $params;
        $params   = [];
        foreach ($requests as $key => $value) {
            if (strpos($key, "param_") === 0) {
                $key = substr($key, strpos($key, "param_") + 6);
            }
            $params[$key] = $value;
        }

        if (!isset($params['focus'])) {
            $params['focus'] = 'web';
        }

        if (!isset($params['encoding'])) {
            $params['encoding'] = 'utf8';
        }

        if (!isset($params['lang'])) {
            $params['lang'] = 'all';
        }

        if (isset($params['request']) && ($params['request'] === "GET" || $params['request'] === "POST")) {
            $request = $params['request'];
        } else {
            $request = "GET";
        }

        array_forget($params, 'eingabe');
        array_forget($params, 'out');
        array_forget($params, 'page');
        array_forget($params, 'request');
        $link = action('MetaGerSearch@search', $params);

        $response = Response::make(
            view('plugin')
                ->with('link', $link)
                ->with('request', $request), "200");
        $response->header('Content-Type', "application/xml");
        return $response;
    }

    public function loadSettings(Request $request)
    {
        $foki = $this->loadFoki();

        return view('settings')
            ->with('foki', $foki)
            ->with('title', 'Einstellungen')
            ->with('js', ['settings.js'])
            ->with('navbarFocus', 'suche');
        die(var_dump($foki));

        return $xml->saveXML();
    }

    public function berlin(Request $request)
    {
        $link     = "";
        $password = "";
        if ($request->has('eingabe')) {
            $password = getenv('berlin');
            $password = md5($request->input('eingabe') . " -host:userpage.fu-berlin.de" . $password);
            $link     = "/meta/meta.ger3?eingabe=" . $request->input('eingabe') . " -host:userpage.fu-berlin.de&focus=web&password=" . $password . "&encoding=utf8&lang=all&site=fu-berlin.de&quicktips=off&out=results-with-style";
        }
        return view('berlin')
            ->with('title', 'Testseite für die FU-Berlin')
            ->with('link', $link)
            ->with('password', $password);
    }

    private function loadFoki()
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
