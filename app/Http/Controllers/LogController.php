<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class LogController extends Controller
{
    public function clicklog(Request $request)
    {
        $redis = Redis::connection('redisLogs');
        if ($redis) {
            $logEntry = "";
            $logEntry .= "[" . date(DATE_RFC822, mktime(date("H"), date("i"), date("s"), date("m"), date("d"), date("Y"))) . "]";
            $logEntry .= "  " . $request->input('i');
            $logEntry .= "  " . $request->input('s');
            $logEntry .= "  " . $request->input('q');
            $logEntry .= "  " . $request->input('p');
            $logEntry .= "  " . $request->input('url');

            $redis->rpush('logs.clicks', $logEntry);
        }
        return '';
    }

    public function pluginClose()
    {
        $redis = Redis::connection('redisLogs');
        if ($redis) {
            $redis->incr('logs.plugin.close');
        }
    }

    public function pluginInstall()
    {
        $redis = Redis::connection('redisLogs');
        if ($redis) {
            $redis->incr('logs.plugin.install');
        }
    }
}
