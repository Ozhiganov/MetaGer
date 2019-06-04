<?php

namespace App\Http\Middleware;

use Captcha;
use Closure;
use Cookie;
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
        $redis = Redis::connection('redisCache');
        try {
            $ip = $request->ip();
            $id = "";
            $uid = "";
            if ($this->isTor($ip)) {
                $id = hash("sha512", "999.999.999.999");
                $uid = hash("sha512", "999.999.999.999" . $ip . $_SERVER["AGENT"] . "uid");
            } else {
                $id = hash("sha512", $ip);
                $uid = hash("sha512", $ip . $_SERVER["AGENT"] . "uid");
            }
            unset($_SERVER["AGENT"]);

            /**
             * If the user sends a Password or a key
             * We will not verificate the user.
             * If someone that uses a bot finds this out we
             * might have to change it at some point.
             */
            if ($request->filled('password') || $request->filled('key') || Cookie::get('key') !== null || $request->filled('appversion') || !env('BOT_PROTECTION', false)) {
                $update = false;
                return $next($request);
            }

            # Get all Users of this IP
            $userList = $redis->smembers($prefix . "." . $id);
            $pipe = $redis->pipeline();

            foreach ($userList as $userid) {
                $pipe->hgetall($prefix . "." . $userid);
            }

            $usersData = $pipe->execute();

            $user = [];
            $users = [];
            # Lock out everyone in a Bot network
            # Find out how many requests this IP has made
            $sum = 0;
            foreach ($usersData as $index => $userTmp) {
                if (empty($userTmp)) {
                    // This is a key that has been expired and should be deleted
                    $redis->srem($prefix . "." . $id, $userList[$index]);
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
                if (!$userNew["whitelist"]) {
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
                $pipeline = $redis->pipeline();

                $pipeline->hmset($prefix . "." . $user['uid'], $user);
                $pipeline->sadd($prefix . "." . $user["id"], $user["uid"]);

                // Expire in two weeks
                $expireLong = 60 * 60 * 24 * 14;
                // Expire in 72h
                $expireShort = 60 * 60 * 72;

                if ($user["whitelist"]) {
                    $pipeline->expire($prefix . "." . $user['uid'], $expireLong);
                } else {
                    $pipeline->expire($prefix . "." . $user['uid'], $expireShort);
                }

                $pipeline->expire($prefix . "." . $user["id"], $expireLong);

                $pipeline->execute();
            }
        }

        $request->request->add(['verification_id' => $user["uid"], 'verification_count' => $user["unusedResultPages"]]);
        return $next($request);

    }

    private function isTor($ip)
    {
        $serverAddress = empty($_SERVER['SERVER_ADDR']) ? "144.76.88.77" : $_SERVER['SERVER_ADDR'];
        $queryUrl = "https://tor.metager.org?password=" . urlencode(env("TOR_PASSWORD")) . "&ra=" . urlencode($ip) . "&sa=" . urlencode($serverAddress) . "&sp=443";

        $ch = curl_init($queryUrl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 1);
        curl_exec($ch);
        $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($httpcode === 200) {
            return true;
        } else {
            return false;
        }
    }
}
