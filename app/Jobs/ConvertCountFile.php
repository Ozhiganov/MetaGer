<?php

namespace App\Jobs;

use Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Redis;

class ConvertCountFile implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $files;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($files)
    {
        $this->files = $files;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $result = [];
        $fh = false;
        $fullRound = false;
        try {
            $fh = fopen($this->files["logFile"], "r");
            $currentLogTime = Carbon::now()->hour(0)->minute(0)->second(0)->addMinutes(5);

            while ($fh !== false && ($line = fgets($fh)) !== false) {
                $logTime = [];
                $interface = "";
                // i.e. [Wed Apr 17 00:00:01] ref=https://metager.de/ time=0.51 serv=web interface=de
                if (preg_match('/\[[a-zA-z]{3}\s[a-zA-Z]{3}\s\d{2}\s(\d{2}:\d{2}:\d{2}).*?\sinterface=(\S+)/', $line, $matches)) {
                    // Create Date Object
                    $logTime = explode(":", $matches[1]);
                    $interface = $matches[2];
                } else if (preg_match('/\[[a-zA-z]{3},\s\d{2}\s[a-zA-Z]{3}\s\d{2}\s(\d{2}:\d{2}:\d{2})/', $line, $matches)) {
                    $logTime = explode(":", $matches[1]);
                } else if (preg_match('/\[\d{2}\/\d{2}\/\d{4}:(\d{2}:\d{2}:\d{2})/', $line, $matches)) {
                    $logTime = explode(":", $matches[1]);
                } else {
                    continue;
                }

                while (!$fullRound && ((intval($logTime[0]) * 60) + intval($logTime[1])) > (($currentLogTime->hour * 60) + $currentLogTime->minute)) {
                    if (empty($result["insgesamt"])) {
                        continue 2;
                    }
                    $result["time"][$currentLogTime->format('H:i')] = $result["insgesamt"];
                    $currentLogTime->addMinutes(5);
                    if ($currentLogTime->hour === 0 && $currentLogTime->minute === 0) {
                        $fullRound = true;
                    }
                }
                // Update the total statistics
                if (empty($result["insgesamt"]["all"])) {
                    $result["insgesamt"]["all"] = 1;
                } else {
                    $result["insgesamt"]["all"]++;
                }
                if (!empty($interface)) {
                    if (empty($result["insgesamt"][$interface])) {
                        $result["insgesamt"][$interface] = 1;
                    } else {
                        $result["insgesamt"][$interface]++;
                    }
                }
            }

            if (empty($result["time"][$currentLogTime->format('H:i')])) {
                $result["time"][$currentLogTime->format('H:i')] = $result["insgesamt"];
            }
        } finally {
            if ($fh !== false) {
                fclose($fh);
            }
            $oldUmask = umask(0);
            // Write the result to a File
            if (!file_exists($this->files["countPath"])) {
                mkdir($this->files["countPath"], 0777, true);
            }
            file_put_contents($this->files["countFile"], json_encode($result, JSON_PRETTY_PRINT));
            umask($oldUmask);

            Redis::del(md5($this->files["countFile"]));
        }
    }
}
