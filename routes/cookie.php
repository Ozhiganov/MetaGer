<?php

Route::group(
    [
        'prefix' => LaravelLocalization::setLocale(), /*,
    'middleware' => [ 'localeSessionRedirect', 'localizationRedirect' ]*/
    ],
    function () {
        Route::get('meta/key', "KeyController@index");
        Route::post('meta/key', 'KeyController@setKey');
        Route::post('meta/key/remove', 'KeyController@removeKey');
    }
);
