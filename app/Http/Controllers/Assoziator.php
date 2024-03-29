<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use LaravelLocalization;

class Assoziator extends Controller
{
    public function asso(Request $request)
    {
        $eingabe = $request->input('q', '');
        if (empty($eingabe)) {
            return redirect(LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), '/asso'));
        }

        $url = "https://metager.de/meta/meta.ger3?eingabe=" . urlencode($eingabe) . "&out=atom10&key=test";

        $ch = curl_init();

        curl_setopt_array($ch, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_USERAGENT => $_SERVER["AGENT"],
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_CONNECTTIMEOUT => 10,
            CURLOPT_MAXCONNECTS => 500,
            CURLOPT_LOW_SPEED_LIMIT => 500,
            CURLOPT_LOW_SPEED_TIME => 5,
            CURLOPT_TIMEOUT => 10,
            CURLOPT_URL => $url,
            CURLOPT_HTTPHEADER, array(
                "X_FORWARDED_FOR: " . $request->ip(),
            ),
        ));

        $response = curl_exec($ch);
        $responseCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($responseCode !== 200) {
            abort(500, "Server currently not available");
        }

        $response = preg_replace("/^<\?.*\?>/s", "<?xml version=\"1.0\" encoding=\"UTF-8\"?>", $response);
        $content = simplexml_load_string($response);

        $words = [];

        foreach ($content->entry as $entry) {
            #
            $title = $entry->title->__toString();
            $content = $entry->content->__toString();

            $n_words = preg_match_all('/([a-zA-Z]|\xC3[\x80-\x96\x98-\xB6\xB8-\xBF]|\xC5[\x92\x93\xA0\xA1\xB8\xBD\xBE]){2,}/', $title, $match_arr);

            $wordsTmp = $match_arr[0];
            $n_words = preg_match_all('/([a-zA-Z]|\xC3[\x80-\x96\x98-\xB6\xB8-\xBF]|\xC5[\x92\x93\xA0\xA1\xB8\xBD\xBE]){2,}/', $content, $match_arr);

            $wordsTmp = array_merge($wordsTmp, $match_arr[0]);
            #

            foreach ($wordsTmp as $word) {
                if (isset($words[$word])) {
                    $words[$word]++;
                } else if (isset($words[ucfirst($word)])) {
                    $words[ucfirst($word)]++;
                } else if (isset($words[strtolower($word)])) {
                    $words[strtolower($word)]++;
                } else {
                    $words[$word] = 1;
                }
            }

        }
        arsort($words);

        $eingabeWords = explode(" ", $eingabe);
        foreach ($eingabeWords as $eingabeWord) {
            unset($words[$eingabeWord]);
            unset($words[strtolower($eingabeWord)]);
            unset($words[ucfirst($eingabeWord)]);
            unset($words[strtoupper($eingabeWord)]);
        }

        unset($words["de"]);
        unset($words["com"]);
        unset($words["wiki"]);
        unset($words["Wiki"]);

        // Remove Stopwords
        $stopWords = file(storage_path('app/public/stopwords.txt'));

        foreach ($stopWords as $stopWord) {
            $stopWord = trim($stopWord);
            unset($words[$stopWord]);
            unset($words[strtolower($stopWord)]);
            unset($words[ucfirst($stopWord)]);
        }

        $wordCount = 0;

        $i = 1;
        $max = 60;
        foreach ($words as $key => $value) {
            if ($i > $max) {
                unset($words[$key]);
            }

            $wordCount += $value;
            $i++;
        }

        return view('assoziator.asso')
            ->with('title', trans('titles.asso'))
            ->with('navbarFocus', 'dienste')
            ->with('words', $words)
            ->with('keywords', $eingabe)
            ->with('wordCount', $wordCount);

        die(var_dump($words));
    }
}
