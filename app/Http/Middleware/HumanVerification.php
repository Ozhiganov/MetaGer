<?php

namespace App\Http\Middleware;

use Captcha;
use Carbon;
use Closure;
use DB;
use Illuminate\Http\Response;

class HumanVerification
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        //try {
        $id = hash("sha512", $request->ip());
        $uid = hash("sha512", $request->ip() . $_SERVER["AGENT"]);
        unset($_SERVER["AGENT"]);

        /**
         * If the user sends a Password or a key
         * We will not verificate the user.
         * If someone that uses a bot finds this out we
         * might have to change it at some point.
         */
        if ($request->filled('password') || $request->filled('key') || $request->filled('appversion') || !env('BOT_PROTECTION', false)) {
            return $next($request);
        }

        // The specific user
        $user = DB::table('humanverification')->where('uid', $uid)->first();

        $createdAt = Carbon::now();
        $unusedResultPages = 1;
        $locked = false;
        # If this user doesn't have an entry we will create one

        if ($user === null) {
            DB::table('humanverification')->insert(
                [
                    'uid' => $uid,
                    'id' => $id,
                    'unusedResultPages' => 0,
                    'whitelist' => false,
                    'whitelistCounter' => 0,
                    'locked' => false,
                    "lockedKey" => "",
                    'updated_at' => Carbon::now(),
                ]
            );
            # Insert the URL the user tries to reach
            $url = url()->full();
            DB::table('usedurls')->insert(['uid' => $uid, 'id' => $id, 'eingabe' => $request->input('eingabe', '')]);
            $user = DB::table('humanverification')->where('uid', $uid)->first();
        }

        # If the user is locked we will force a Captcha validation
        if ($user->locked === 1) {
            $captcha = Captcha::create("default", true);
            DB::table('humanverification')->where('uid', $uid)->update(['lockedKey' => $captcha["key"]]);
            return
            new Response(
                view('humanverification.captcha')
                    ->with('title', "Bestätigung erforderlich")
                    ->with('id', $uid)
                    ->with('url', url()->full())
                    ->with('image', $captcha["img"])
            );
        }

        # Find out how many requests this IP has made
        $sum = DB::table('humanverification')->where('id', $id)->where('whitelist', false)->sum('unusedResultPages');

        // Defines if this is the only user using that IP Adress
        $alone = DB::table('humanverification')->where('id', $id)->count() === 1;

        $unusedResultPages = intval($user->unusedResultPages);
        $unusedResultPages++;

        if ($sum < 50 || $alone || $user->whitelist === 1) {
            # This IP doesn't need verification yet
            # The user currently isn't locked

            # We have different security gates:
            #   50, 75, 85, >=90 => Captcha validated Result Pages
            # If the user shows activity on our result page the counter will be deleted
            # Maybe I'll add a ban if the user reaches 100
            $locked = false;
            if ($unusedResultPages === 50 || $unusedResultPages === 75 || $unusedResultPages === 85 || $unusedResultPages >= 90) {
                $locked = true;
            }

            DB::table('humanverification')->where('uid', $uid)->update(['unusedResultPages' => $unusedResultPages, 'locked' => $locked]);
            # Insert the URL the user tries to reach
            DB::table('usedurls')->insert(['uid' => $uid, 'id' => $id, 'eingabe' => $request->input('eingabe', '')]);
        } else {
            $tmpId = md5($uid . date("d"));

            # If the parameter uid is correctly set we will allow access to the result page
            if ($request->input('uid', '') !== $tmpId) {
                DB::table('humanverification')->where('uid', $uid)->increment('whitelistCounter');
                if ($user->whitelistCounter >= 4) {
                    DB::table('humanverification')->where('uid', $uid)->update(['locked' => true]);
                }

                # This IP will need verification
                return
                new Response(
                    view('humanverification.whitelistVerification')
                        ->with('title', $request->input('eingabe', '') . " - MetaGer")
                        ->with('method', $request->method())
                        ->with('uid', md5($uid . date("d")))
                );
            } else {
                DB::table('humanverification')->where('uid', $uid)->update(['unusedResultPages' => $unusedResultPages]);
                # Insert the URL the user tries to reach
                DB::table('usedurls')->insert(['uid' => $uid, 'id' => $id, 'eingabe' => $request->input('eingabe', '')]);
            }
        }

        /* } catch (\Illuminate\Database\QueryException $e) {
        // Failure in contacting metager3.de
        }*/
        $request->request->add(['verification_id' => $uid, 'verification_count' => $unusedResultPages]);
        return $next($request);
    }
}
