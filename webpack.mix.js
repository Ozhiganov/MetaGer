let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .less('resources/assets/less/default.less', 'public/css/themes/default.css')
  .less('resources/assets/less/metager/beitritt.less', 'public/css/beitritt.css')
  .less('resources/assets/less/utility.less', 'public/css/utility.css')
  // js
  .babel(['resources/assets/js/lib/jquery.js', 'resources/assets/js/lib/jquery-ui.min.js', 'resources/assets/js/lib/bootstrap.js', 'resources/assets/js/lib/lightslider.js',
    'resources/assets/js/lib/masonry.js', 'resources/assets/js/lib/imagesloaded.js', 'resources/assets/js/lib/openpgp.min.js', 'resources/assets/js/lib/iframeResizer.min.js',
    'resources/assets/js/lib/md5.js'
  ], 'public/js/lib.js')
  .babel(['resources/assets/js/scriptStartPage.js', 'resources/assets/js/result-saver.js'], 'public/js/scriptStartPage.js')
  .babel(['resources/assets/js/scriptResultPage.js', 'resources/assets/js/result-saver.js', 'resources/assets/js/translations.js'], 'public/js/scriptResultPage.js')
  .babel('resources/assets/js/searchbar.js', 'public/js/searchbar.js')
  .babel('resources/assets/js/focus-creator.js', 'public/js/focus-creator.js')
  // utility
  .babel(['resources/assets/js/utility.js', 'resources/assets/js/translations.js'], 'public/js/utility.js')
  .sourceMaps(false, 'inline-source-map')
  .version();