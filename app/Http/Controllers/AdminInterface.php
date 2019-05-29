<?php

namespace App\Http\Controllers;

use App\Jobs\ConvertCountFile;
use Carbon\Carbon;
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
        foreach ($names as $name) {
            $stats = Redis::hgetall($name . ".stats");
            if (sizeof($stats) > 0) {
                $fetcherStatus = Redis::get($name);
                $stati[$name]["status"] = $fetcherStatus;
                foreach ($stats as $pid => $value) {
                    if (strstr($value, ";")) {
                        $value = explode(";", $value);
                        $connection = json_decode(base64_decode($value[0]), true);
                        foreach ($connection as $key => $val) {
                            if (strstr($key, "_time")) {
                                $stati[$name]["fetcher"][$pid]["connection"][$key] = $val;
                            }

                        }
                        $stati[$name]["fetcher"][$pid]["poptime"] = $value[1];
                    }
                }
            }
        }

        // So now we can generate Median Times for every Fetcher
        $fetcherCount = 0;
        foreach ($stati as $engineName => $engineStats) {
            $connection = array();
            $poptime = 0;
            $fetcherCount += sizeof($engineStats["fetcher"]);
            foreach ($engineStats["fetcher"] as $pid => $stats) {
                foreach ($stats["connection"] as $key => $value) {
                    if (!isset($connection[$key])) {
                        $connection[$key] = $value;
                    } else {
                        $connection[$key] += $value;
                    }
                }
                $poptime += floatval($stats["poptime"]);
            }
            foreach ($connection as $key => $value) {
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

    private function getSearchEngineNames()
    {
        $url = config_path() . "/sumas.xml";
        $xml = simplexml_load_file($url);
        $sumas = $xml->xpath("suma");

        $names = array();
        foreach ($sumas as $suma) {
            $names[] = $suma["name"]->__toString();
        }
        return $names;
    }

    public function count(Request $request)
    {
        $days = intval($request->input('days', 28));
        $interface = $request->input('interface', 'all');
        if (!is_int($days) || $days <= 0) {
            $days = 28;
        }
        $logs = $this->getStats($days);

        $oldLogs = [];
        $rekordTag = 0;
        $minCount = 0;
        $rekordTagDate = "";
        $size = 0;
        $count = 0;

        $now = Carbon::now()->subMinutes(Carbon::now()->minute % 5)->format('H:i');
        if ($now === "00:00") {
            $now = "00:05";
        }

        foreach ($logs as $key => $stats) {
            if ($key === 0) {
                // Log for today
                $logToday = empty($stats->insgesamt->{$interface}) ? 0 : $stats->insgesamt->{$interface};
                continue;
            }
            $insgesamt = empty($stats->insgesamt->{$interface}) ? 0 : $stats->insgesamt->{$interface};
            $sameTime = empty($stats->time->{$now}->{$interface}) ? 0 : $stats->time->{$now}->{$interface};

            if ($insgesamt > $rekordTag) {
                $rekordTag = $insgesamt;
                $rekordTagSameTime = $sameTime;
                $rekordTagDate = Carbon::now()->subDays($key)->format('d.m.Y');
            }
            if ($minCount === 0 || $insgesamt < $minCount) {
                $minCount = $insgesamt;
            }
            $oldLogs[$key]['sameTime'] = number_format(floatval($sameTime), 0, ",", ".");
            $oldLogs[$key]['insgesamt'] = number_format(floatval($insgesamt), 0, ",", ".");
            # Nun noch den median:
            $count += $insgesamt;
            $size++;
            if ($size > 0) {
                $oldLogs[$key]['median'] = number_format(floatval(round($count / $size)), 0, ",", ".");
            }

        }

        if ($request->input('out', 'web') === "web") {
            return view('admin.count')
                ->with('title', 'Suchanfragen - MetaGer')
                ->with('today', number_format(floatval($logToday), 0, ",", "."))
                ->with('oldLogs', $oldLogs)
                ->with('minCount', $minCount)
                ->with('rekordCount', number_format(floatval($rekordTag), 0, ",", "."))
                ->with('rekordTagSameTime', number_format(floatval($rekordTagSameTime), 0, ",", "."))
                ->with('rekordDate', $rekordTagDate)
                ->with('days', $days);
        } else {
            $result = "";
            foreach ($oldLogs as $key => $value) {
                $resultTmp = '"' . date("D, d M y", mktime(date("H"), date("i"), date("s"), date("m"), date("d") - $key, date("Y"))) . '",';
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

    public function countGraphToday()
    {
        $stats = $this->getStats(0)[0];

        $hourly = [];
        $previous = 0;
        $max = 0;
        foreach ($stats->time as $time => $timeStats) {
            $hour = intval(substr($time, 0, strpos($time, ":")));
            if (empty($hourly[$hour])) {
                $hourly[$hour] = 0;
            }
            $hourly[$hour] += $timeStats->all - $previous;
            $previous = $timeStats->all;
            if ($hourly[$hour] > $max) {
                $max = $hourly[$hour];
            }
        }
        $result = [
            "insgesamt" => $stats->insgesamt->all,
            "max" => $max,
            "hourly" => $hourly,
        ];

        return response()
            ->view('admin.countGraphToday', ["data" => $result], 200)
            ->header('Content-Type', "image/svg+xml");

    }

    public function engineStats()
    {
        $result = [];
        $result["loadavg"] = sys_getloadavg();

        // Memory Data
        $data = explode("\n", trim(file_get_contents("/proc/meminfo")));
        $meminfo = [];
        foreach ($data as $line) {
            list($key, $val) = explode(":", $line);
            $meminfo[$key] = trim($val);
        }
        $conversions = [
            "KB",
            "MB",
            "GB",
            "TB",
        ];

        $memAvailable = $meminfo["MemAvailable"];
        $memAvailable = intval(explode(" ", $memAvailable)[0]);
        $counter = 0;
        while ($memAvailable > 1000) {
            $memAvailable /= 1000.0;
            $counter++;
        }
        $memAvailable = round($memAvailable);
        $memAvailable .= " " . $conversions[$counter];

        $result["memoryAvailable"] = $memAvailable;

        $resultCount = 0;
        $file = "/var/log/metager/mg3.log";
        if (file_exists($file)) {
            $fh = fopen($file, "r");
            try {
                while (fgets($fh) !== false) {
                    $resultCount++;
                }
            } finally {
                fclose($fh);
            }
        }

        $result["resultCount"] = number_format($resultCount, 0, ",", ".");
        return response()->json($result);
    }

    private function getStats($days)
    {
        $maxDate = Carbon::createFromFormat('d.m.Y', "28.06.2016");
        $selectedDate = Carbon::now()->subDays($days);
        if ($maxDate > $selectedDate) {
            $days = $maxDate->diffInDays(Carbon::now());
        }

        $logToday = "/var/log/metager/mg3.log";

        $archivePath = "/var/log/metager/archive/";

        $today = [
            'logFile' => $logToday,
            'countPath' => storage_path('logs/count/'),
            'countFile' => storage_path('logs/count/' . getmypid()),
        ];
        if (\file_exists($today["countFile"])) {
            unlink($today["countFile"]);
        }

        $neededLogs = [
            0 => $today,
        ];
        $logsToRequest = [
            0 => $today,
        ];
        $requestedLogs = [];
        for ($i = 1; $i <= $days; $i++) {
            $date = Carbon::now()->subDays($i);
            $countPath = storage_path('logs/count/' . $date->year . "/" . $date->month . "/");
            $countFile = $countPath . $date->day . ".json";
            $neededLogs[$i] = [
                'logFile' => $archivePath . "mg3.log.$i",
                'countPath' => $countPath,
                'countFile' => $countFile,
            ];
            if (!file_exists($neededLogs[$i]['countFile'])) {
                $logsToRequest[$i] = $neededLogs[$i];
            }
        }
        if (sizeof($logsToRequest) > 100) {
            set_time_limit(600);
        }
        // Create the Jobs for count file creation
        while (sizeof($logsToRequest) > 0 || sizeof($requestedLogs) > 0) {
            if (sizeof($requestedLogs) < 20 && sizeof($logsToRequest) > 0) {
                $newJob = array_shift($logsToRequest);
                $newJob["startedAt"] = time();
                $requestedLogs[] = $newJob;

                Redis::set(md5($newJob["countFile"]), "running");
                Redis::expire(md5($newJob["countFile"]), 15);
                ConvertCountFile::dispatch($newJob);
            } else {
                usleep(50000);
            }
            // Remove all finished Jobs
            $removedOne = false;
            do {
                $removedOne = false;
                foreach ($requestedLogs as $index => $requestedLog) {
                    if (!Redis::exists(md5($requestedLog["countFile"]))) {
                        unset($requestedLogs[$index]);
                        $removedOne = true;
                        break;
                    }
                }
            } while ($removedOne === true);
        }

        $result = [];

        foreach ($neededLogs as $key => $value) {
            $countFile = $value["countFile"];
            if (file_exists($countFile)) {
                $result[$key] = json_decode(file_get_contents($countFile));
            }
        }

        if (\file_exists($today["countFile"])) {
            unlink($today["countFile"]);
        }

        return $result;
    }

    public function check()
    {
        $q = "";
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
