<?php

namespace App\Http\Controllers;

use App;
use Illuminate\Http\Request;
use Jenssegers\Agent\Agent;
use Response;

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
            if ($value === 'on'
                && $key !== 'meta_sprueche'
                && $key !== 'meta_maps'
                && $key !== 'meta_newtab'
                && $key !== 'meta_lang'
                && $key !== 'request'
                && $key !== 'meta_autocomplete') {
                $focusPages[] = str_replace('meta_', '', $key);
            }
            if ($key === 'meta_theme') {
                $theme = str_replace('meta_', '', $key);
            }
        }

        $maps = $request->input('meta_maps', 'on');

        $agent   = new Agent();
        $browser = $agent->browser();

        return view('index')
            ->with('title', trans('titles.index'))
            ->with('homeIcon')
            ->with('focus', $request->input('focus', 'web'))
            ->with('lang', $request->input('meta_lang', 'all'))
            ->with('resultCount', $request->input('meta_resultCount', '20'))
            ->with('time', $request->input('meta_time', '1000'))
            ->with('sprueche', $request->input('meta_sprueche', 'off'))
            ->with('tab', $request->input('meta_tab', 'off'))
            ->with('focusPages', $focusPages)
            ->with('browser', $browser)
            ->with('navbarFocus', 'suche')
            ->with('theme', $theme)
            ->with('maps', $maps)
            ->with('autocomplete', $request->input('meta_autocomplete', 'on'));
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
}
