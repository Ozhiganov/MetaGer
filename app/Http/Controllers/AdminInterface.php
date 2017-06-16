<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Response;

class AdminInterface extends Controller
{
    public function index(Request $request)
    {
        // Let's get the stats for this server.
        // First we need to check, which Fetcher could be available by parsing the sumas.xml
        $names = $this->getSearchEngineNames();

        // Now we gonna check which stats we can find
        $stati = array();
        foreach($names as $name){
            $stats = Redis::hgetall($name . ".stats");
            if(sizeof($stats) > 0){
                $fetcherStatus = Redis::get($name);
                $stati[$name]["status"] = $fetcherStatus;
                foreach($stats as $pid => $value){
                    if(strstr($value, ";")){
                        $value = explode(";", $value);
                        $connection = json_decode(base64_decode($value[0]), true);
                        foreach($connection as $key => $val){
                            if(strstr($key, "_time"))
                                $stati[$name]["fetcher"][$pid]["connection"][$key] = $val;
                        }
                        $stati[$name]["fetcher"][$pid]["poptime"] = $value[1];
                    }
                }
            }
        }

        // So now we can generate Median Times for every Fetcher
        $fetcherCount = 0;
        foreach($stati as $engineName => $engineStats){
            $connection = array();
            $poptime = 0;
            $fetcherCount += sizeof($engineStats["fetcher"]);
            foreach($engineStats["fetcher"] as $pid => $stats){
                foreach($stats["connection"] as $key => $value){
                    if(!isset($connection[$key])){
                        $connection[$key] = $value;
                    }else{
                        $connection[$key] += $value;
                    }
                }
                $poptime += floatval($stats["poptime"]);
            }
            foreach($connection as $key => $value){
                $connection[$key] /= sizeof($engineStats["fetcher"]);
            }
            $poptime /= sizeof($engineStats["fetcher"]);

            $stati[$engineName]["median-connection"] = $connection;
            $stati[$engineName]["median-poptime"] = $poptime;
        }

        return view('admin.admin')
            ->with('title', 'Fetcher Status')
            ->with('stati', $stati)
            ->with('fetcherCount', $fetcherCount);
        $stati = json_encode($stati);
        $response = Response::make($stati, 200);
        $response->header("Content-Type", "application/json");
        return $response;
    }

    private function getSearchEngineNames(){
        $url = config_path() . "/sumas.xml";
        $xml = simplexml_load_file($url);
        $sumas = $xml->xpath("suma");

        $names = array();
        foreach($sumas as $suma){
            $names[] = $suma["name"]->__toString();
        }
        return $names;
    }

    public function count(Request $request)
    {
        $days = intval($request->input('days', 28));
        if(!is_int($days) || $days <= 0) $days = 28;
        $logToday = "mg3.log";
        if (file_exists("/var/log/metager/" . $logToday)) {
            $logToday = file("/var/log/metager/" . $logToday);
        } else {
            return redirect('');
        }
        $oldLogs       = [];
        $yesterday     = 0;
        $rekordTag     = 0;
        $rekordTagDate = "";
        $size          = 0;
        $count         = 0;
        for ($i = 1; $i <= $days; $i++) {
            $logDate = "/var/log/metager/archive/mg3.log.$i";
            if (file_exists($logDate)) {
                $sameTime  = exec("grep -n '" . date('H') . ":" . date('i') . ":' $logDate | tail -1 | cut -f1 -d':'");
                $insgesamt = exec("wc -l $logDate | cut -f1 -d' '");
                if ($insgesamt > $rekordTag) {
                    $rekordTag         = $insgesamt;
                    $rekordTagSameTime = $sameTime;
                    $rekordTagDate     = date("d.m.Y", mktime(date("H"), date("i"), date("s"), date("m"), date("d") - $i, date("Y")));
                }
                $oldLogs[$i]['sameTime']  = number_format(floatval($sameTime), 0, ",", ".");
                $oldLogs[$i]['insgesamt'] = number_format(floatval($insgesamt), 0, ",", ".");
                # Nun noch den median:
                $count += $insgesamt;
                $size++;
                if ($size > 0) {
                    $oldLogs[$i]['median'] = number_format(floatval(round($count / $size)), 0, ",", ".");
                }

            }
        }

        if($request->input('out', 'web') === "web"){
            return view('admin.count')
                ->with('title', 'Suchanfragen - MetaGer')
                ->with('today', number_format(floatval(sizeof($logToday)), 0, ",", "."))
                ->with('oldLogs', $oldLogs)
                ->with('rekordCount', number_format(floatval($rekordTag), 0, ",", "."))
                ->with('rekordTagSameTime', number_format(floatval($rekordTagSameTime), 0, ",", "."))
                ->with('rekordDate', $rekordTagDate)
                ->with('days', $days);
        }else{
                $result = "";
                foreach($oldLogs as $key => $value){
                    $resultTmp = '"' . date("D, d M y", mktime(date("H"),date("i"), date("s"), date("m"), date("d")-$key, date("Y"))) . '",';
                    $resultTmp .= '"' . $value['sameTime'] . '",';
                    $resultTmp .= '"' . $value['insgesamt'] . '",';
                    $resultTmp .= '"' . $value['median'] . '"' . "\r\n";
                    $result = $resultTmp . $result;
                }
                return response($result, 200)
                    ->header('Content-Type', 'text/csv')
                    ->header('Content-Disposition', 'attachment; filename="count.csv"');

        }

    }
    public function check()
    {
        $q     = "";
        $redis = Redis::connection('redisLogs');
        if ($redis) {
            $q = $redis->lrange("logs.search", -1, -1)[0];
            $q = substr($q, strpos($q, "search=") + 7);
        }
        return view('admin.check')
            ->with('title', 'Wer sucht was? - MetaGer')
            ->with('q', $q);
    }

    public function engines()
    {
        # Wir laden den Inhalt der Log Datei und übergeben ihn an den view
        $file = "/var/log/metager/engine.log";
        if (file_exists($file) && is_readable($file)) {
            $engineStats = file_get_contents($file);
            # Daten vom JSON Format dekodieren
            $engineStats = json_decode($engineStats, true);

            # Eine Sortierung wäre nicht das verkehrteste
            uasort($engineStats["recent"], function ($a, $b) {
                if ($a["requests"] == $b["requests"]) {
                    return 0;
                }

                return ($a["requests"] < $b["requests"]) ? 1 : -1;
            });

            uasort($engineStats["overall"], function ($a, $b) {
                if ($a["requests"] == $b["requests"]) {
                    return 0;
                }

                return ($a["requests"] < $b["requests"]) ? 1 : -1;
            });
            return view('admin.engines')
                ->with('engineStats', $engineStats)
                ->with('title', "Suchmaschinenstatus - MetaGer");
        } else {
            return redirect(url('admin'));
        }
    }
}
