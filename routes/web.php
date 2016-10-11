<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
 */

Route::group(
    [
        'prefix' => LaravelLocalization::setLocale(), /*,
    'middleware' => [ 'localeSessionRedirect', 'localizationRedirect' ]*/
    ],
    function () {
        /** ADD ALL LOCALIZED ROUTES INSIDE THIS GROUP **/

        Route::get('/', 'StartpageController@loadStartPage');

        Route::get('img/piwik.png', 'ImageController@generateImage');

        Route::get('impressum', function () {
            return view('impressum')
                ->with('title', trans('titles.impressum'))
                ->with('navbarFocus', 'kontakt');
        });
        Route::get('impressum.html', function () {
            return redirect(url('impressum'));
        });

        Route::get('about', function () {
            return view('about')
                ->with('title', trans('titles.about'))
                ->with('navbarFocus', 'kontakt');
        });
        Route::get('team', function () {
            return view('team.team')
                ->with('title', trans('titles.team'))
                ->with('navbarFocus', 'kontakt');
        });
        Route::get('team/pubkey-wsb', function () {
            return view('team.pubkey-wsb')
                ->with('title', trans('titles.team'))
                ->with('navbarFocus', 'kontakt');
        });

        Route::get('kontakt', function () {
            return view('kontakt.kontakt')
                ->with('title', trans('titles.kontakt'))
                ->with('navbarFocus', 'kontakt');
        });

        Route::post('kontakt', 'MailController@contactMail');

        Route::get('tor', function () {
            return view('tor')
                ->with('title', 'tor hidden service - MetaGer')
                ->with('navbarFocus', 'dienste');
        });
        Route::get('spende', function () {
            return view('spende.spende')
                ->with('title', trans('titles.spende'))
                ->with('css', 'donation.css')
                ->with('navbarFocus', 'foerdern');
        });
        Route::get('spende/danke/{data}', ['as' => 'danke', function ($data) {
            return view('spende.danke')
                ->with('title', trans('titles.spende'))
                ->with('css', ['donation.css', 'danke.css'])
                ->with('navbarFocus', 'foerdern')
                ->with('data', unserialize(base64_decode($data)));
        }]);
        Route::get('partnershops', function () {
            return view('spende.partnershops')
                ->with('title', trans('titles.partnershops'))
                ->with('navbarFocus', 'foerdern');
        });

        Route::get('beitritt', function () {
            return view('spende.beitritt')
                ->with('title', trans('titles.beitritt'))
                ->with('css', 'beitritt.css')
                ->with('navbarFocus', 'foerdern');
        });

        Route::get('bform1.htm', function () {
            return redirect('beitritt');
        });
        Route::get('spendenaufruf', function () {
            return view('spende.spendenaufruf')
                ->with('title', 'Spendenaufruf - MetaGer')
                ->with('navbarFocus', 'foerdern');
        });

        Route::post('spende', 'MailController@donation');

        Route::get('datenschutz', function () {
            return view('datenschutz')
                ->with('title', trans('titles.datenschutz'))
                ->with('navbarFocus', 'datenschutz');
        });

        Route::get('hilfe', function () {
            return view('hilfe')
                ->with('title', trans('titles.hilfe'))
                ->with('navbarFocus', 'hilfe');
        });

        Route::get('faq', function () {
            return view('faq')
                ->with('title', trans('titles.faq'))
                ->with('css', 'help.css')
                ->with('navbarFocus', 'hilfe');
        });

        Route::get('widget', function () {
            return view('widget.widget')
                ->with('title', trans('titles.widget'))
                ->with('css', 'widget.css')
                ->with('navbarFocus', 'dienste');
        });

        Route::get('sitesearch', 'SitesearchController@loadPage');

        Route::get('websearch', function () {
            return view('widget.websearch')
                ->with('title', trans('titles.websearch'))
                ->with('css', 'websearch.css')
                ->with('navbarFocus', 'dienste');
        });

        Route::get('admin', 'AdminInterface@index');
        Route::get('admin/count', 'AdminInterface@count');
        Route::get('admin/check', 'AdminInterface@check');
        Route::get('admin/engines', 'AdminInterface@engines');

        Route::get('settings', 'StartpageController@loadSettings');

        Route::match(['get', 'post'], 'meta/meta.ger3', 'MetaGerSearch@search');
        Route::get('meta/picture', 'Pictureproxy@get');
        Route::get('clickstats', 'LogController@clicklog');
        Route::get('pluginClose', 'LogController@pluginClose');
        Route::get('pluginInstall', 'LogController@pluginInstall');

        Route::get('qt', 'MetaGerSearch@quicktips');
        Route::get('tips', 'MetaGerSearch@tips');
        Route::get('/plugins/{params}/opensearch.xml', 'StartpageController@loadPlugin');
        Route::get('owi', function () {
            return redirect('https://metager.de/klassik/en/owi/');
        });
        Route::get('MG20', function () {
            return redirect('https://metager.de/klassik/MG20');
        });
        Route::get('databund', function () {
            return redirect('https://metager.de/klassik/databund');
        });
        Route::get('languages', 'LanguageController@createOverview');
        Route::get('languages/edit/{from}/{to}/{exclude?}', 'LanguageController@createEditPage');
        Route::post('languages/edit/{from}/{to}/{exclude?}', 'MailController@sendLanguageFile');
    });
