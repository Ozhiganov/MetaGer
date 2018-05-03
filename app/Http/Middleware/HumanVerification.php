<?php

namespace App\Http\Middleware;

use Closure;
use DB;
use Carbon;

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
        $id = md5($request->ip());

        /**
         * If the user sends a Password or a key
         * We will not verificate the user.
         * If someone that uses a bot finds this out we 
         * might have to change it at some point.
         */
        if($request->filled('password') || $request->filled('key') || !env('BOT_PROTECTION', false)){
            return $next($request);
        }

        $user = DB::table('humanverification')->where('id', $id)->first();
        $createdAt = now();
        $unusedResultPages = 1;
        $locked = false;
        # If this user doesn't have an entry we will create one
        if($user === null){
            DB::table('humanverification')->insert(
                ['id' => $id, 'unusedResultPages' => 1, 'locked' => false, 'updated_at' => now()]
            );
            $user = DB::table('humanverification')->where('id', $id)->first();
        }else if($user->locked !== 1){
            $unusedResultPages = intval($user->unusedResultPages);
            $unusedResultPages++;
            # We have different security gates:
            #   50, 75, 85, >=90 => Captcha validated Result Pages
            # If the user shows activity on our result page the counter will be deleted
            # Maybe I'll add a ban if the user reaches 100
            if($unusedResultPages === 50 || $unusedResultPages === 75 || $unusedResultPages === 85 || $unusedResultPages >= 90){
                $locked = true;
            }
            DB::table('humanverification')->where('id', $id)->update(['unusedResultPages' => $unusedResultPages, 'locked' => $locked,  'updated_at' => $createdAt]);
        }
        $request->request->add(['verification_id' => $id, 'verification_count' => $unusedResultPages]);


        # If the user is locked we will force a Captcha validation
        if($user->locked === 1){
            return redirect('meta/verification/' . $id . '/' . urlencode(base64_encode(url()->full())));
        }

        return $next($request);
    }
}
