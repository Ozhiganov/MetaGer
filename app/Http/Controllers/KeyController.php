<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class KeyController extends Controller
{
    public function index(Request $request)
    {
        $redirUrl = $request->input('redirUrl', "");

        return view('key')
            ->with('title', "Mitgliederschlüssel eingeben");

    }
}
