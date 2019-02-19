<?php

namespace App\Console;

use DB;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [

    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('requests:gather')->everyFifteenMinutes();

        $schedule->call(function () {
            DB::table('monthlyrequests')->truncate();
        })->monthlyOn(1, '00:00');

        // Delete all of the old humanverification entries
        $schedule->call(function () {
            DB::delete('DELETE FROM humanverification WHERE updated_at < (now() - interval 72 hour) AND whitelist = 0 ORDER BY updated_at DESC');
            DB::delete('DELETE FROM humanverification WHERE updated_at < (now() - interval 2 week) AND whitelist = 1 ORDER BY updated_at DESC');
        })->everyThirtyMinutes();
    }

    /**
     * Register the Closure based commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        require base_path('routes/console.php');
        $this->load(__DIR__ . '/Commands');
    }
}
