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

        Route::group([
            'prefix' => 'meta/settings',
        ],
            function () {
                Route::get('/', 'SettingsController@index')->name('settings');
                Route::post('de', 'SettingsController@disableSearchEngine')->name('disableEngine');
                Route::post('ee', 'SettingsController@enableSearchEngine')->name('enableEngine');
                Route::post('ef', 'SettingsController@enableFilter')->name('enableFilter');
                Route::post('ds', 'SettingsController@deleteSettings')->name('deleteSettings');

                # Route to show and delete all settings
                Route::get('all-settings', 'SettingsController@allSettingsIndex')->name('showAllSettings');
                Route::post('all-settings/removeOne', 'SettingsController@removeOneSetting')->name('removeOneSetting');
                Route::post('all-settings/removeAll', 'SettingsController@removeAllSettings')->name('removeAllSettings');

            });
    }
);
