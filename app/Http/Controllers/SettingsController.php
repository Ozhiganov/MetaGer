<?php

namespace App\Http\Controllers;

use Cookie;
use LaravelLocalization;
use \App\MetaGer;
use \Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function index(Request $request)
    {
        $fokus = $request->input('fokus', '');
        $fokusName = "";
        if (empty($fokus)) {
            return redirect('/');
        } else {
            $fokusName = trans('index.foki.' . $fokus);
        }

        $langFile = MetaGer::getLanguageFile();
        $langFile = json_decode(file_get_contents($langFile));

        $sumas = $this->getSumas($fokus);

        # Parse the Parameter Filter
        $filters = [];
        $filteredSumas = false;
        foreach ($langFile->filter->{"parameter-filter"} as $name => $filter) {
            $values = $filter->values;
            $cookie = Cookie::get($fokus . "_setting_" . $filter->{"get-parameter"});
            foreach ($sumas as $suma => $sumaInfo) {
                if (!$filteredSumas && $sumaInfo["filtered"]) {
                    $filteredSumas = true;
                }
                if (!$sumaInfo["filtered"] && $sumaInfo["enabled"] && !empty($filter->sumas->{$suma})) {
                    if (empty($filters[$name])) {
                        $filters[$name] = $filter;
                        unset($filters[$name]->values);
                    }
                    if (empty($filters[$name]->values)) {
                        $filters[$name]->values = (object) [];
                    }
                    foreach ($filter->sumas->{$suma}->values as $key => $value) {
                        $filters[$name]->values->$key = $values->$key;
                    }
                }

            }
        }

        $url = $request->input('url', '');

        # Check if any setting is active
        $cookies = Cookie::get();
        $settingActive = false;
        foreach ($cookies as $key => $value) {
            if (\starts_with($key, [$fokus . "_engine_", $fokus . "_setting_"])) {
                $settingActive = true;
            }
        }

        return view('settings.index')
            ->with('title', trans('titles.settings', ['fokus' => $fokusName]))
            ->with('fokus', $request->input('fokus', ''))
            ->with('fokusName', $fokusName)
            ->with('filteredSumas', $filteredSumas)
            ->with('sumas', $sumas)
            ->with('filter', $filters)
            ->with('settingActive', $settingActive)
            ->with('url', $url);
    }

    private function getSumas($fokus)
    {
        $langFile = MetaGer::getLanguageFile();
        $langFile = json_decode(file_get_contents($langFile));

        $sumasFoki = $langFile->foki->{$fokus}->sumas;

        $sumas = [];
        foreach ($sumasFoki as $suma) {
            if ((!empty($langFile->sumas->{$suma}->disabled) && $langFile->sumas->{$suma}->disabled) ||
                (!empty($langFile->sumas->{$suma}->{"auto-disabled"}) && $langFile->sumas->{$suma}->{"auto-disabled"})) {
                continue;
            }
            $sumas[$suma]["display-name"] = $langFile->sumas->{$suma}->{"display-name"};
            $sumas[$suma]["filtered"] = false;
            if (Cookie::get($fokus . "_engine_" . $suma) === "off") {
                $sumas[$suma]["enabled"] = false;
            } else {
                $sumas[$suma]["enabled"] = true;
            }
        }

        foreach ($langFile->filter->{"parameter-filter"} as $name => $filter) {
            $values = $filter->values;
            $cookie = Cookie::get($fokus . "_setting_" . $filter->{"get-parameter"});
            foreach ($sumas as $suma => $sumaInfo) {
                if ($cookie !== null && (empty($filter->sumas->{$suma}) || (!empty($filter->sumas->{$suma}) && empty($filter->sumas->{$suma}->values->$cookie)))) {
                    $sumas[$suma]["filtered"] = true;
                }
            }
        }
        return $sumas;
    }

    public function disableSearchEngine(Request $request)
    {
        $suma = $request->input('suma', '');
        $fokus = $request->input('fokus', '');
        $url = $request->input('url', '');

        if (empty($suma) || empty($fokus)) {
            abort(404);
        }

        # Only disable this engine if it's not the last
        $sumas = $this->getSumas($fokus);
        $sumaCount = 0;
        foreach ($sumas as $name => $sumainfo) {
            if (!$sumainfo["filtered"] && $sumainfo["enabled"]) {
                $sumaCount++;
            }
        }
        $langFile = MetaGer::getLanguageFile();
        $langFile = json_decode(file_get_contents($langFile));

        if ($sumaCount > 1 && in_array($suma, $langFile->foki->{$fokus}->sumas)) {
            $path = \Request::path();
            $cookiePath = "/" . substr($path, 0, strpos($path, "meta/") + 5);
            Cookie::queue($fokus . "_engine_" . $suma, "off", 525600, $cookiePath, null, false, false);
        }

        return redirect(LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), route('settings', ["fokus" => $fokus, "url" => $url])));

    }

    public function enableSearchEngine(Request $request)
    {
        $suma = $request->input('suma', '');
        $fokus = $request->input('fokus', '');
        $url = $request->input('url', '');

        if (empty($suma) || empty($fokus)) {
            abort(404);
        }

        if (Cookie::get($fokus . "_engine_" . $suma) !== null) {
            $path = \Request::path();
            $cookiePath = "/" . substr($path, 0, strpos($path, "meta/") + 5);
            Cookie::queue($fokus . "_engine_" . $suma, "", 0, $cookiePath, null, false, false);
        }

        return redirect(LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), route('settings', ["fokus" => $fokus, "url" => $url])));

    }

    public function enableFilter(Request $request)
    {
        $fokus = $request->input('fokus', '');
        $url = $request->input('url', '');
        if (empty($fokus)) {
            abort(404);
        }

        $newFilters = $request->except(["fokus", "url"]);

        $langFile = MetaGer::getLanguageFile();
        $langFile = json_decode(file_get_contents($langFile));

        foreach ($newFilters as $key => $value) {
            if ($value === "") {
                $path = \Request::path();
                $cookiePath = "/" . substr($path, 0, strpos($path, "meta/") + 5);
                Cookie::queue($fokus . "_setting_" . $key, "", 0, $cookiePath, null, false, false);
            } else {
                # Check if this filter and its value exists:
                foreach ($langFile->filter->{"parameter-filter"} as $name => $filter) {
                    if ($key === $filter->{"get-parameter"} && !empty($filter->values->$value)) {
                        $path = \Request::path();
                        $cookiePath = "/" . substr($path, 0, strpos($path, "meta/") + 5);
                        Cookie::queue($fokus . "_setting_" . $key, $value, 525600, $cookiePath, null, false, false);
                        break;
                    }
                }
            }
        }

        return redirect(LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), route('settings', ["fokus" => $fokus, "url" => $url])));

    }

    public function deleteSettings(Request $request)
    {
        $fokus = $request->input('fokus', '');
        $url = $request->input('url', '');
        if (empty($fokus)) {
            abort(404);
        }

        $cookies = Cookie::get();
        foreach ($cookies as $key => $value) {
            if (\starts_with($key, [$fokus . "_engine_", $fokus . "_setting_"])) {
                $path = \Request::path();
                $cookiePath = "/" . substr($path, 0, strpos($path, "meta/") + 5);
                Cookie::queue($key, "", 0, $cookiePath, null, false, false);
            }
        }

        return redirect(LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), route('settings', ["fokus" => $fokus, "url" => $url])));
    }

    public function allSettingsIndex(Request $request)
    {
        $sumaFile = MetaGer::getLanguageFile();
        $sumaFile = json_decode(file_get_contents($sumaFile));

        return view('settings.allSettings')
            ->with('title', trans('titles.allSettings'))
            ->with('url', $request->input('url', ''))
            ->with('sumaFile', $sumaFile);
    }

    public function removeOneSetting(Request $request)
    {
        $key = $request->input('key', '');
        $path = \Request::path();
        $cookiePath = "/" . substr($path, 0, strpos($path, "meta/") + 5);
        Cookie::queue($key, "", 0, $cookiePath, null, false, false);

        return redirect($request->input('url', 'https://metager.de'));

    }

    public function removeAllSettings(Request $request)
    {
        $path = \Request::path();
        $cookiePath = "/" . substr($path, 0, strpos($path, "meta/") + 5);

        foreach (Cookie::get() as $key => $value) {
            Cookie::queue($key, "", 0, $cookiePath, null, false, false);
        }
        return redirect($request->input('url', 'https://metager.de'));
    }
}
