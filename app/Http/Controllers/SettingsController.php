<?php

namespace App\Http\Controllers;

use \Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function index(Request $request)
    {
        $fokus = $request->input('fokus', '');
        if (empty($fokus)) {
            return redirect('/');
        } else {
            $fokus = trans('index.foki.' . $fokus);
        }

        return view('settings.index')
            ->with('title', trans('titles.settings', ['fokus' => $fokus]))
            ->with('fokus', $fokus);
    }
}
