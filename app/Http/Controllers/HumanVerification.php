<?php

namespace App\Http\Controllers;

use Captcha;
use Carbon;
use Illuminate\Hashing\BcryptHasher as Hasher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Input;

class HumanVerification extends Controller
{
    const PREFIX = "humanverification";
    const EXPIRELONG = 60 * 60 * 24 * 14;
    const EXPIRESHORT = 60 * 60 * 72;

    public static function captcha(Request $request, Hasher $hasher, $id, $url = null)
    {
        $redis = Redis::connection('redisCache');

        if ($url != null) {
            $url = base64_decode(str_replace("<<SLASH>>", "/", $url));
        } else {
            $url = $request->input('url');
        }

        if ($request->getMethod() == 'POST') {
            $user = $redis->hgetall(HumanVerification::PREFIX . "." . $id);
            $user = ['uid' => $user["uid"],
                'id' => $user["id"],
                'unusedResultPages' => intval($user["unusedResultPages"]),
                'whitelist' => filter_var($user["whitelist"], FILTER_VALIDATE_BOOLEAN),
                'locked' => filter_var($user["locked"], FILTER_VALIDATE_BOOLEAN),
                "lockedKey" => $user["lockedKey"],
            ];

            $lockedKey = $user["lockedKey"];
            $key = $request->input('captcha');
            $key = strtolower($key);

            if (!$hasher->check($key, $lockedKey)) {
                $captcha = Captcha::create("default", true);
                $pipeline = $redis->pipeline();
                $pipeline->hset(HumanVerification::PREFIX . "." . $id, 'lockedKey', $captcha["key"]);
                $pipeline->expire(HumanVerification::PREFIX . "." . $id, $user["whitelist"] ? HumanVerification::EXPIRELONG : HumanVerification::EXPIRESHORT);
                $pipeline->execute();
                return view('humanverification.captcha')->with('title', 'Bestätigung notwendig')
                    ->with('id', $id)
                    ->with('url', $url)
                    ->with('image', $captcha["img"])
                    ->with('errorMessage', 'Fehler: Falsche Eingabe!');
            } else {
                # If we can unlock the Account of this user we will redirect him to the result page
                if ($user !== null && $user["locked"]) {
                    # The Captcha was correct. We can remove the key from the user
                    # If the sum of all users with that ip is too high we need to whitelist the user or they will receive a captcha again on the next request
                    $sum = 0;
                    $users = [];
                    $pipeline = $redis->pipeline();
                    $pipeline->hmset(HumanVerification::PREFIX . "." . $id, ['locked' => "0", 'lockedKey' => "", 'whitelist' => '1']);
                    $pipeline->expire(HumanVerification::PREFIX . "." . $id, $user["whitelist"] ? HumanVerification::EXPIRELONG : HumanVerification::EXPIRESHORT);
                    $pipeline->execute();
                    return redirect($url);
                } else {
                    return redirect('/');
                }
            }
        }
        $captcha = Captcha::create("default", true);
        $pipeline = $redis->pipeline();
        $pipeline->hset(HumanVerification::PREFIX . "." . $id, 'lockedKey', $captcha["key"]);
        $pipeline->expire(HumanVerification::PREFIX . "." . $id, $user["whitelist"] ? HumanVerification::EXPIRELONG : HumanVerification::EXPIRESHORT);
        $pipeline->execute();
        return view('humanverification.captcha')->with('title', 'Bestätigung notwendig')
            ->with('id', $id)
            ->with('url', $url)
            ->with('image', $captcha["img"]);

    }

    public static function remove(Request $request)
    {
        if (!$request->has('mm')) {
            abort(404, "Keine Katze gefunden.");
        }

        if (HumanVerification::checkId($request, $request->input('mm'))) {
            HumanVerification::removeUser($request, $request->input('mm'));
        }
        return response(hex2bin('89504e470d0a1a0a0000000d494844520000000100000001010300000025db56ca00000003504c5445000000a77a3dda0000000174524e530040e6d8660000000a4944415408d76360000000020001e221bc330000000049454e44ae426082'), 200)
            ->header('Content-Type', 'image/png');
    }

    public static function removeGet(Request $request, $mm, $password, $url)
    {
        $url = base64_decode(str_replace("<<SLASH>>", "/", $url));

        # If the user is correct and the password is we will delete any entry in the database
        $requiredPass = md5($mm . Carbon::NOW()->day . $url . env("PROXY_PASSWORD"));
        if (HumanVerification::checkId($request, $mm) && $requiredPass === $password) {
            HumanVerification::removeUser($request, $mm);
        }
        return redirect($url);
    }

    private static function removeUser($request, $uid)
    {
        $redis = Redis::connection('redisCache');
        $ip = $request->ip();
        $id = "";
        if (HumanVerification::couldBeSpammer($ip)) {
            $id = hash("sha512", "999.999.999.999");
        } else {
            $id = hash("sha512", $ip);
        }

        $userList = $redis->smembers(HumanVerification::PREFIX . "." . $id);
        $pipe = $redis->pipeline();
        foreach ($userList as $userid) {
            $pipe->hgetall(HumanVerification::PREFIX . "." . $userid);
        }
        $usersData = $pipe->execute();

        $user = [];
        $users = [];
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

        if (empty($user)) {
            return;
        }

        $pipeline = $redis->pipeline();
        # Check if we have to whitelist the user or if we can simply delete the data
        if ($user["unusedResultPages"] < $sum && !$user["whitelist"]) {
            # Whitelist
            $pipeline->hset(HumanVerification::PREFIX . "." . $uid, 'whitelist', "1");
            $user["whitelist"] = true;
        }

        if ($user["whitelist"]) {
            $pipeline->hset(HumanVerification::PREFIX . "." . $uid, 'unusedResultPages', "0");
        } else {
            $pipeline->del(HumanVerification::PREFIX . "." . $uid);
            $pipeline->srem(HumanVerification::PREFIX . "." . $id, $uid);
        }
        $pipeline->expire(HumanVerification::PREFIX . "." . $uid, $user["whitelist"] ? HumanVerification::EXPIRELONG : HumanVerification::EXPIRESHORT);
        $pipeline->expire(HumanVerification::PREFIX . "." . $id, HumanVerification::EXPIRELONG);
        $pipeline->execute();
    }

    private static function checkId($request, $id)
    {
        $uid = "";
        $ip = $request->ip();
        if (HumanVerification::couldBeSpammer($ip)) {
            $uid = hash("sha512", "999.999.999.999" . $ip . $_SERVER["AGENT"] . "uid");
        } else {
            $uid = hash("sha512", $ip . $_SERVER["AGENT"] . "uid");
        }

        if ($uid === $id) {
            return true;
        } else {
            return false;
        }
    }

    public static function couldBeSpammer($ip)
    {
        if (!env("REMOVE_SPAM_IN_TOR")) {
            return false;
        }
        $serverAddress = empty($_SERVER['SERVER_ADDR']) ? "144.76.88.77" : $_SERVER['SERVER_ADDR'];
        $queryUrl = "https://tor.metager.org?password=" . urlencode(env("TOR_PASSWORD")) . "&ra=" . urlencode($ip) . "&sa=" . urlencode($serverAddress) . "&sp=443";

        $ch = curl_init($queryUrl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 1);
        curl_exec($ch);
        $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        $possibleSpammer = false;
        if ($httpcode === 200) {
            return true;
        }

        # Check for recent Spams
        $eingabe = \Request::input('eingabe');
        if (\preg_match("/^susimail\s+-site:[^\s]+\s-site:/si", $eingabe)) {
            return true;
        }

        return $possibleSpammer;

    }
}
