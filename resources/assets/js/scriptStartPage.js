const DEFAULT_FOCUS = 'web';

$(document).ready(function () {
  // checkPlugin()
  if (location.href.indexOf('#plugin-modal') > -1) {
    $('#plugin-modal').modal('show');
  }
  $('#addFocusBtn').removeClass('hide');
  $('button').popover();

  loadLocalStorage();
  setActionListeners();
  loadSavedResults();
});

/**
 * Loads the user theme and stored settings from local storage
 */
function loadLocalStorage() {
  setSettings();
}

/**
 * Sets all action listeners for this page
 */
function setActionListeners() {
  $('button').on('shown.bs.popover', function () {
    $('#color-chooser a').click(function () {
      var theme = $(this).attr('data-rgba');
      if (localStorage) {
        localStorage.setItem('theme', theme);
        location.href = '/';
      }
    });
  });
  $('#mobileFoki').change(function () {
    var focus = $('#mobileFoki > option:selected').val();
    if (focus == 'angepasst') {
      window.location = './settings/';
    } else {
      window.location = './?focus=' + focus;
    }
  });
  if ($('fieldset#foki.mobile').length) {
    $('fieldset#foki.mobile label#anpassen-label').click(function () {
      window.location = './settings/';
    });
  }
}

/**
 * Loads stored settings from local storage
 */
function setSettings() {
  if ($('fieldset#foki.mobile').length) {
    $('fieldset.mobile input#bilder').val('angepasst');
    $('fieldset.mobile input#bilder').prop('checked', true);
    $('fieldset.mobile input#bilder').attr('id', 'angepasst');
    $('fieldset.mobile label#bilder-label').attr('id', 'anpassen-label');
    $('fieldset.mobile label#anpassen-label').attr('for', 'angepasst');
    $('fieldset.mobile label#anpassen-label i.fa').attr('class', 'fa fa-cog');
    $('fieldset.mobile label#anpassen-label span.content').html('angepasst');
  }
}
// Polyfill for form attribute
(function ($) {
  /**
   * polyfill for html5 form attr
   */
  // detect if browser supports this
  var sampleElement = $('[form]').get(0);
  var isIE11 = !(window.ActiveXObject) && 'ActiveXObject' in window;
  if (sampleElement && window.HTMLFormElement && sampleElement.form instanceof HTMLFormElement && !isIE11) {
    // browser supports it, no need to fix
    return;
  }
  /**
   * Append a field to a form
   *
   */
  $.fn.appendField = function (data) {
    // for form only
    if (!this.is('form')) return;
    // wrap data
    if (!$.isArray(data) && data.name && data.value) {
      data = [data];
    }
    var $form = this;
    // attach new params
    $.each(data, function (i, item) {
      $('<input/>').attr('type', 'hidden').attr('name', item.name).val(item.value).appendTo($form);
    });
    return $form;
  };
  /**
   * Find all input fields with form attribute point to jQuery object
   * 
   */
  $('form[id]').submit(function (e) {
    var $form = $(this);
    // serialize data
    var data = $('[form=' + $form.attr('id') + ']').serializeArray();
    // append data to form
    $form.appendField(data);
  }).each(function () {
    var form = this,
      $form = $(form),
      $fields = $('[form=' + $form.attr('id') + ']');
    $fields.filter('button, input').filter('[type=reset],[type=submit]').click(function () {
      var type = this.type.toLowerCase();
      if (type === 'reset') {
        // reset form
        form.reset();
        // for elements outside form
        $fields.each(function () {
          this.value = this.defaultValue;
          this.checked = this.defaultChecked;
        }).filter('select').each(function () {
          $(this).find('option').each(function () {
            this.selected = this.defaultSelected;
          });
        });
      } else if (type.match(/^submit|image$/i)) {
        $(form).appendField({
          name: this.name,
          value: this.value
        }).submit();
      }
    });
  });
})(jQuery);
// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
// At least Safari 3+: "[object HTMLElementConstructor]"
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
// Internet Explorer 6-11
var isIE = /*@cc_on!@*/ false || !!document.documentMode;
// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;
// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;
// Prüft, ob der URL-Parameter "usage" auf "once" gesetzt ist.

function loadSavedResults() {
  var results = new Results();
  if (results.length > 0) {
    var html = $('\
    <div class="focus">\
      <input id="savedResults" class="focus-radio hide" name="focus" value="container" form="searchForm" type="radio" required="">\
      <label id="saved-results-label" class="focus-label" for="savedResults">\
        <i class="fas fa-save"></i>\
        <span class="content">gespeicherte Ergebnisse</span>\
        <span class="badge">' + results.length + '</span>\
      </label>\
    </div>\
    ');
    $('#addFocusBtnDiv').before(html);
    $('#foki input#savedResults').change(function () {
      if ($(this).prop('checked')) $('#searchForm').submit();
    });
  }
}