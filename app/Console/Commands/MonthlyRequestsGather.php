<?php

namespace App\Console\Commands;

use DB;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Redis;

class MonthlyRequestsGather extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'requests:gather';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sends the gathered monthly requests from the redis to the central Database';

    private $values = [];

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        # Read in the suma Files
        $sumaFile = config_path('sumas.json');
        $sumaEnFile = config_path('sumasEn.json');
        if (file_exists($sumaFile) && file_exists($sumaEnFile)) {
            $sumas = json_decode(file_get_contents($sumaFile));
            $sumasEn = json_decode(file_get_contents($sumaEnFile));

            $this->gatherLogs($sumas);
            $this->gatherLogs($sumasEn);

            foreach ($this->values as $name => $value) {
                $entry = DB::table('monthlyrequests')->where(['name' => $name])->first();
                $newCount = $value;
                if ($entry === null) {
                    DB::table('monthlyrequests')->insert(['name' => $name, 'count' => $newCount]);
                } else {
                    $newCount = $value + $entry->count;
                    DB::table('monthlyrequests')->where(['name' => $name])->update(['count' => $newCount]);
                }
            }

            $this->disableOverusedEngines($sumaFile, $sumas);
            $this->disableOverusedEngines($sumaEnFile, $sumasEn);
            DB::disconnect('mysql');
        }
    }

    private function disableOverusedEngines($sumasFile, $sumas)
    {
        $currentValues = DB::table('monthlyrequests')->get();
        foreach ($sumas->sumas as $sumaName => $suma) {
            if (!empty($suma->disabled) && $suma->disabled === true) {
                continue;
            }

            if (empty($suma->{"monthly-requests"})) {
                continue;
            }
            $currentValue = 0;
            foreach ($currentValues as $value) {
                if ($value->name === $sumaName) {
                    $currentValue = $value->count;
                }
            }

            $monthlyRequests = $suma->{"monthly-requests"};

            if (!empty($suma->{"auto-disabled"}) && $suma->{"auto-disabled"} === true) {
                # Maybe this engine should be enabled again
                if ($currentValue < $monthlyRequests) {
                    unset($sumas->sumas->{$sumaName}->{"auto-disabled"});
                    file_put_contents($sumasFile, json_encode($sumas, JSON_PRETTY_PRINT));
                }
            } else if ($currentValue >= $monthlyRequests) {
                $sumas->sumas->{$sumaName}->{"auto-disabled"} = true;
                file_put_contents($sumasFile, json_encode($sumas, JSON_PRETTY_PRINT));
            }
        }
    }

    private function gatherLogs($sumas)
    {
        foreach ($sumas->sumas as $sumaName => $suma) {
            if (!empty($suma->{"monthly-requests"})) {
                $monthlyLimit = $suma->{"monthly-requests"};
                $currentValue = Redis::get('monthlyRequests:' . $sumaName);
                Redis::del('monthlyRequests:' . $sumaName);
                if (empty($currentValue)) {
                    $currentValue = 0;
                }
                if (empty($this->values[$sumaName]) && $currentValue > 0) {
                    $this->values[$sumaName] = intval($currentValue);
                }
            }

        }
    }
}
