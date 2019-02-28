<?php

namespace App\Http\Middleware;

use Captcha;
use Closure;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Redis;
use URL;

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
        // The specific user
        $user = null;
        $update = true;
        $prefix = "humanverification";
        try {
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
                $update = false;
                return $next($request);
            }

            # Get all Users of this IP
            $userList = Redis::smembers($prefix . "." . $id);
            $pipe = Redis::pipeline();

            foreach ($userList as $userid) {
                $pipe->hgetall($prefix . "." . $userid);
            }

            $usersData = $pipe->execute();

            $user = [];
            $users = [];
            # Lock out everyone in a Bot network
            # Find out how many requests this IP has made
            $sum = 0;
            foreach ($usersData as $userTmp) {
                if (empty($userTmp)) {
                    continue;
                }
                $userNew = ['uid' => $userTmp["uid"],
                    'id' => $userTmp["id"],
                    'unusedResultPages' => intval($userTmp["unusedResultPages"]),
                    'whitelist' => filter_var($userTmp["whitelist"], FILTER_VALIDATE_BOOLEAN),
                    'locked' => filter_var($userTmp["locked"], FILTER_VALIDATE_BOOLEAN),
                    "lockedKey" => $userTmp["lockedKey"],
                ];

                if ($uid === $userTmp["uid"]) {
                    $user = $userNew;
                } else {
                    $users[] = $userNew;
                }
                if ($userNew["whitelist"]) {
                    $sum += intval($userTmp["unusedResultPages"]);
                }

            }

            # If this user doesn't have an entry we will create one
            if (empty($user)) {
                $user =
                    [
                    'uid' => $uid,
                    'id' => $id,
                    'unusedResultPages' => 0,
                    'whitelist' => false,
                    'locked' => false,
                    "lockedKey" => "",
                ];
            }

            # A lot of automated requests are from websites that redirect users to our result page.
            # We will detect those requests and put a captcha
            $referer = URL::previous();
            # Just the URL-Parameter
            $refererLock = false;
            if (stripos($referer, "?") !== false) {
                $referer = substr($referer, stripos($referer, "?") + 1);
                $referer = urldecode($referer);
                if (preg_match("/http[s]{0,1}:\/\/metager\.de\/meta\/meta.ger3\?.*?eingabe=([\w\d]+\.){1,2}[\w\d]+/si", $referer) === 1) {
                    $refererLock = true;
                }

            }

            // Defines if this is the only user using that IP Adress
            $alone = true;
            foreach ($users as $userTmp) {
                if ($userTmp["uid"] != $uid && !$userTmp["whitelist"]) {
                    $alone = false;
                }

            }
            if ((!$alone && $sum >= 50 && !$user["whitelist"]) || $refererLock) {
                $user["locked"] = true;
            }

            # If the user is locked we will force a Captcha validation
            if ($user["locked"]) {
                $captcha = Captcha::create("default", true);
                $user["lockedKey"] = $captcha["key"];
                return
                new Response(
                    view('humanverification.captcha')
                        ->with('title', "Bestätigung erforderlich")
                        ->with('id', $uid)
                        ->with('url', url()->full())
                        ->with('image', $captcha["img"])
                );
            }

            $user["unusedResultPages"]++;

            if ($alone || $user["whitelist"]) {
                # This IP doesn't need verification yet
                # The user currently isn't locked

                # We have different security gates:
                #   50 and then every 25 => Captcha validated Result Pages
                # If the user shows activity on our result page the counter will be deleted
                if ($user["unusedResultPages"] === 50 || ($user["unusedResultPages"] > 50 && $user["unusedResultPages"] % 25 === 0)) {
                    $user["locked"] = true;
                }

            }
        } catch (\Predis\Connection\ConnectionException $e) {
            $update = false;
        } finally {
            if ($update) {

                // Update the user in the database
                $pipeline = Redis::pipeline();

                $pipeline->hmset($prefix . "." . $user['uid'], $user);
                $pipeline->sadd($prefix . "." . $user["id"], $user["uid"]);

                $expireDate = now();
                $expireDateLong = date_add($expireDate, date_interval_create_from_date_string('2 weeks'))->timestamp;
                $expireDateShort = date_add($expireDate, date_interval_create_from_date_string('2 weeks'))->timestamp;

                if ($user["whitelist"]) {
                    $pipeline->expireat($prefix . "." . $user['uid'], $expireDateLong);
                } else {
                    $pipeline->expireat($prefix . "." . $user['uid'], $expireDateShort);
                }

                $pipeline->expireat($prefix . "." . $user["id"], $expireDateLong);

                $pipeline->execute();
            }
        }

        $request->request->add(['verification_id' => $user["uid"], 'verification_count' => $user["unusedResultPages"]]);
        return $next($request);

    }
}
