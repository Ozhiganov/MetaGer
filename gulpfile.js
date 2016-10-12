const elixir = require('laravel-elixir');
require('laravel-elixir-vue-2');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
elixir(function(mix) {
    mix.less('default.less', 'public/css/themes/default.css');
    mix.scripts(['jquery.js', 'bootstrap.js', 'widgets.js', 'editLanguage.js', 'kontakt.js', 'lightslider.js', 'masonry.js', 'imagesloaded.js', 'openpgp.min.js', 'scriptResultPage.js', 'scriptStartPage.js', 'settings.js' /*, '/vue/app.js', '/vue/bootstrap.js'*/ ]);
});