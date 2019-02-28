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

    public static function captcha(Request $request, Hasher $hasher, $id, $url = null)
    {

        if ($url != null) {
            $url = base64_decode(str_replace("<<SLASH>>", "/", $url));
        } else {
            $url = $request->input('url');
        }

        if ($request->getMethod() == 'POST') {

            $user = Redis::hgetall(HumanVerification::PREFIX . "." . $id);
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
                Redis::hset(HumanVerification::PREFIX . "." . $id, 'lockedKey', $captcha["key"]);
                return view('humanverification.captcha')->with('title', 'Bestätigung notwendig')
                    ->with('id', $id)
                    ->with('url', $url)
                    ->with('image', $captcha["img"])
                    ->with('errorMessage', 'Fehler: Falsches Captcha eingegeben!');
            } else {
                # If we can unlock the Account of this user we will redirect him to the result page
                if ($user !== null && $user["locked"]) {
                    # The Captcha was correct. We can remove the key from the user
                    Redis::hmset(HumanVerification::PREFIX . "." . $id, ['locked' => "0", 'lockedKey' => ""]);
                    return redirect($url);
                } else {
                    return redirect('/');
                }
            }
        }
        $captcha = Captcha::create("default", true);
        Redis::hset(HumanVerification::PREFIX . "." . $id, 'lockedKey', $captcha["key"]);
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
        $id = hash("sha512", $request->ip());

        $userList = Redis::smembers(HumanVerification::PREFIX . "." . $id);
        $pipe = Redis::pipeline();
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

        $pipeline = Redis::pipeline();
        # Check if we have to whitelist the user or if we can simply delete the data
        if ($user["unusedResultPages"] < $sum && !$user["whitelist"]) {
            # Whitelist
            $pipeline->hset(HumanVerification::PREFIX . "." . $uid, 'whitelist', "1");
            $user["whitelist"] = true;
        }

        if ($user["whitelist"]) {
            $pipeline->hset(HumanVerification::PREFIX . "." . $uid, 'unusedResultPages', "0");
        } else {
            $pipeline->hdel(HumanVerification::PREFIX . "." . $uid);
            $pipeline->srem(HumanVerification::PREFIX . "." . $id, $uid);
        }
        $pipeline->execute();
    }

    private static function checkId($request, $id)
    {
        if (hash("sha512", $request->ip() . $_SERVER["AGENT"]) === $id) {
            return true;
        } else {
            return false;
        }
    }
}
