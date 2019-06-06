<?php
# In this File we collect all routes which require a session or other cookies to be active
Route::group(
    [
        'prefix' => LaravelLocalization::setLocale(), /*,
    'middleware' => [ 'localeSessionRedirect', 'localizationRedirect' ]*/
    ],
    function () {
        Route::match(['get', 'post'], 'meta/verification/{id}/{url?}', 'HumanVerification@captcha')->name('verification');
    }
);
