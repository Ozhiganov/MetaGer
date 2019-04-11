let mix = require("laravel-mix");

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
  /*
  @import "./font-awesome/fontawesome.less";
  @import "./font-awesome/solid.less";
  @import "./bootstrap/bootstrap.less";
  */
  // css
  .styles(["resources/css/noheader.css"], "public/css/noheader.css")
  .less("resources/less/metager/metager.less", "public/css/themes/metager.css", {
    strictMath: true
  })
  .less("resources/less/font-awesome/fontawesome.less", "public/css/fontawesome.css", {
    strictMath: true
  })
  .less("resources/less/font-awesome/solid.less", "public/css/fontawesome-solid.css", {
    strictMath: true
  })
  .less("resources/less/bootstrap/bootstrap.less", "public/css/bootstrap.css", {
    strictMath: true
  })
  .less(
    "resources/less/metager/pages/key.less",
    "public/css/key.css", {
      strictMath: true
    }
  )
  .less("resources/less/utility.less", "public/css/utility.css", {
    strictMath: true
  })
  // js
  .babel(
    [
      "resources/js/lib/jquery.js",
      "resources/js/lib/jquery-ui.min.js",
      "resources/js/lib/bootstrap.js",
      "resources/js/lib/md5.js"
    ],
    "public/js/lib.js"
  )
  .babel(
    [
      "resources/js/scriptStartPage.js",
      "resources/js/result-saver.js"
    ],
    "public/js/scriptStartPage.js"
  )
  .babel(
    [
      "resources/js/scriptSettings.js"
    ],
    "public/js/scriptSettings.js"
  )
  .babel(
    [
      "resources/js/scriptResultPage.js",
      "resources/js/result-saver.js",
      "resources/js/translations.js"
    ],
    "public/js/scriptResultPage.js"
  )
  .babel("resources/js/editLanguage.js", "public/js/editLanguage.js")
  .babel("resources/js/bitpay.js", "public/js/bitpay.js")
  // utility
  .babel(
    ["resources/js/utility.js", "resources/js/translations.js"],
    "public/js/utility.js"
  )
  .babel("resources/js/widgets.js", "public/js/widgets.js")
  .babel("resources/js/scriptJoinPage.js", "public/js/scriptJoinPage.js")
  // source maps
  .sourceMaps(false, "inline-source-map")
  // versioning
  .version();