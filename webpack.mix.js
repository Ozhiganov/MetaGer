let mix = require("laravel-mix");

mix
  // css
  .less("resources/assets/less/metager.less", "public/css/metager.css", {
    strictMath: true
  })
  .less(
    "resources/assets/less/metager/beitritt.less",
    "public/css/beitritt.css", {
      strictMath: true
    }
  )
  .less("resources/assets/less/utility.less", "public/css/utility.css", {
    strictMath: true
  })
  .less("resources/assets/less/bootstrap/bootstrap.less", "public/css/bootstrap.css", {
    strictMath: true
  })
  .less("resources/assets/less/font-awesome/fontawesome.less", "public/css/fontawesome.css", {
    strictMath: true
  })
  .less("resources/assets/less/font-awesome/solid.less", "public/css/fontawesome-solid.css", {
    strictMath: true
  })
  /* Site specific less files */
  .less("resources/assets/less/metager/result-page.less", "public/css/result-page.css", {
    strictMath: true
  })
  .less("resources/assets/less/metager/start-page.less", "public/css/start-page.css", {
    strictMath: true
  })
  .less("resources/assets/less/metager/settings.less", "public/css/settings.css", {
    strictMath: true
  })
  .less("resources/assets/less/metager/variables.less", "public/css/variables.css", {
    strictMath: true
  })
  .less("resources/assets/less/metager/sidebar.less", "public/css/sidebar.css", {
    strictMath: true
  })
  .less("resources/assets/less/metager/modals.less", "public/css/modals.css", {
    strictMath: true
  })
  .less("resources/assets/less/metager/footer.less", "public/css/footer.css", {
    strictMath: true
  })
  .less("resources/assets/less/metager/searchbar.less", "public/css/searchbar.css", {
    strictMath: true
  })
  .less("resources/assets/less/metager/aufruf-winter.less", "public/css/aufruf-winter.css", {
    strictMath: true
  })
  .less("resources/assets/less/metager/widget.less", "public/css/widget.css", {
    strictMath: true
  })
  // js
  .babel(
    [
      "resources/assets/js/lib/jquery.js",
      "resources/assets/js/lib/jquery-ui.min.js",
      "resources/assets/js/lib/bootstrap.js",
      "resources/assets/js/lib/iframeResizer.min.js",
      "resources/assets/js/lib/md5.js"
    ],
    "public/js/lib.js"
  )
  .babel(
    [
      "resources/assets/js/scriptStartPage.js",
      "resources/assets/js/result-saver.js"
    ],
    "public/js/scriptStartPage.js"
  )
  .babel(
    [
      "resources/assets/js/scriptResultPage.js",
      "resources/assets/js/result-saver.js",
      "resources/assets/js/translations.js"
    ],
    "public/js/scriptResultPage.js"
  )
  .babel("resources/assets/js/searchbar.js", "public/js/searchbar.js")
  .babel("resources/assets/js/focus-creator.js", "public/js/focus-creator.js")
  .babel("resources/assets/js/focus-creator.js", "public/js/focus-creator.js")
  .babel("resources/assets/js/editLanguage.js", "public/js/editLanguage.js")
  // utility
  .babel(
    ["resources/assets/js/utility.js", "resources/assets/js/translations.js"],
    "public/js/utility.js"
  )
  .babel("resources/assets/js/widgets.js", "public/js/widgets.js")
  .babel("resources/assets/js/scriptJoinPage.js", "public/js/scriptJoinPage.js")
  // source maps
  .sourceMaps(false, "inline-source-map")
  // versioning
  .version();