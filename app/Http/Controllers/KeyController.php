<?php

namespace App\Http\Controllers;

use Cookie;
use Illuminate\Http\Request;
use LaravelLocalization;

class KeyController extends Controller
{
    public function index(Request $request)
    {
        $redirUrl = $request->input('redirUrl', "");

        return view('key')
            ->with('title', trans('titles.key'));

    }

    public function setKey(Request $request)
    {
        $redirUrl = $request->input('redirUrl', "");
        $key = $request->input('key', '');

        if ($this->authorizeKey($key)) {
            # Valid Key
            $host = $request->header("X_Forwarded_Host", "");
            if (empty($host)) {
                $host = $request->header("Host", "");
            }

            Cookie::queue('key', $key, 525600, '/meta/', null, false, false);
            return redirect($redirUrl);
        } else {
            return view('key')
                ->with('title', trans('titles.key'))
                ->with('keyValid', false);
        }
    }

    public function removeKey(Request $request)
    {
        $redirUrl = $request->input('redirUrl', "");
        Cookie::queue('key', '', 0, '/meta/', null, false, false);
        $url = LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), action('KeyController@index', ['redirUrl' => $redirUrl]));
        return redirect($url);
    }

    private function authorizeKey($key)
    {
        $postdata = http_build_query(array(
            'dummy' => rand(),
        ));
        $opts = array('http' => array(
            'method' => 'POST',
            'header' => 'Content-type: application/x-www-form-urlencoded',
            'content' => $postdata,
        ),
        );

        $context = stream_context_create($opts);

        try {
            $link = "https://key.metager3.de/" . urlencode($key) . "/request-permission/api-access";
            $result = json_decode(file_get_contents($link, false, $context));
            if ($result->{'api-access'} == true) {
                return true;
            } else {
                return false;
            }

        } catch (\ErrorException $e) {
            return false;
        }

    }
}
