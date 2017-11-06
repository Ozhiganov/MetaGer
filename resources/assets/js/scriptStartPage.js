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
  loadInitialCustomFocuses();
  loadSavedResults();
  checkFocusEditable();
});

/**
 * Loads the user theme and stored settings from local storage
 */
function loadLocalStorage () {
  if (localStorage) {
    var theme = localStorage.getItem('theme');
    if (theme != null) {
      if ((theme.match(/,/g) || []).length != 3) {
        localStorage.removeItem('theme');
      } else {
        theme = theme.split(',');
        $('#theme').attr('href', '/css/theme.css.php?r=' + theme[0] + '&g=' + theme[1] + '&b=' + theme[2] + '&a=' + theme[3]);
      }
    }
    setSettings();
  }
}

/**
 * Sets all action listeners for this page
 */
function setActionListeners () {
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
  $('.focusCheckbox').click(toggleDeleteButton);
  $('#addFocusBtn').click(() => showFocusCreateDialog(''));
  $('#editFocusBtn').click(editCurrentFocus);
  $('.save-focus-btn').click(saveFocus);
  $('.delete-focus-btn').click(deleteFocus);
  $('#focus-select').change(checkFocusEditable);
  // Save Focus on clicking enter while in the focus name input
  $('#focus-name').keyup(function (event) {
    if (event.keyCode == 13) {
      $('.save-focus-btn').click();
    }
  });
  $('#create-focus-modal').on('shown.bs.modal', function () {
    $('#focus-name').focus();
  });
}

/**
 * Loads stored settings from local storage
 */
function setSettings () {
  var acceptedParams = ['autocomplete', 'key', 'lang', 'newtab', 'sprueche'];
  for (var key in localStorage) {
    var value = localStorage.getItem(key);
    var accepted = false;
    for (var i in acceptedParams) {
      if (key === 'param_' + acceptedParams[i]) {
        accepted = true;
      }
    }
    if (accepted) {
      key = key.substring(6);
      // Check for existing hidden fields for this key
      var existing = $('.search-hidden input[name="' + key + '"]');
      if (existing.length === 0) {
        // if none exist, create a new one
        $('.search-hidden').append('<input type="hidden" name="' + key + '" value="' + value + '">');
      }
    }
  }
  // Change the request method to the given parameter
  var requestMethod = localStorage.getItem('request');
  if (requestMethod !== null && (requestMethod === 'GET' || requestMethod === 'POST')) {
    $('#searchForm').attr('method', requestMethod);
  }
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
function isUseOnce () {
  var url = document.location.search;
  var pos = url.indexOf('usage=');
  if (pos >= 0 && url.substring(pos + 6, pos + 11) == 'once') {
    return true;
  } else {
    return false;
  }
}
/**
 * Loads all the custom focuses stored in local storage
 */
function loadInitialCustomFocuses () {
  for (var key in localStorage) {
    if (key.startsWith('focus_')) {
      var focus = loadFocusById(key);
      addFocus(focus.name);
    }
  }
}
/**
 * Shows the focus create dialog
 * If an id is given it will try to load a focus for the given id
 */
function showFocusCreateDialog (id) {
  if (id === undefined) {
    id = '';
  }
  document.getElementById('original-id').value = id;
  $('#create-focus-modal').modal('show');
  var storedFocus = loadFocusById(id);
  var focus = {};
  // Try to load a focus for the given id
  $('#focus-name').val('');
  uncheckAll();
  if (storedFocus !== null) {
    try {
      focus = JSON.parse(localStorage.getItem(id));
      $('#focus-name').val(focus.name);
      for (var key in focus) {
        if (key.startsWith('engine_')) {
          $('.focusCheckbox[name=' + key + ']').prop('checked', true);
        }
      }
    } catch (ex) {
      console.error(ex);
    }
  }
  toggleDeleteButton();
}

/**
 * Shows the focus create dialog for a given id
 */
function showFocusEditDialog (id) {
  showFocusCreateDialog(id);
}

function getCurrentFocus () {
  return document.getElementById('focus-select').value;
}

/**
 * Shows an edit dialog for the current selected focus
 */
function editCurrentFocus () {
  console.log('hi');
  var currentFocus = getCurrentFocus();
  console.log(currentFocus);
  showFocusEditDialog(currentFocus);
}

/**
* Shows/Hides the delete button if (no) checkboxes are selected
*/
function toggleDeleteButton () {
  if (atLeastOneChecked()) {
    $('.delete-focus-btn').show();
  } else {
    $('.delete-focus-btn').hide();
  }
}

/**
 * Save the current Focus
 * Listens for save button
 */
function saveFocus () {
  /* Vorprüfungen */
  // Falls keine Suchmaschine ausgewählt wurde
  if (atLeastOneChecked()) {
    switch (document.documentElement.lang) {
      case 'en':
        alert('Please select at least 1 search engine.');
        break;
      case 'es':
        alert('Por favor, seleccione al menos un motor de búsqueda.');
        break;
      default:
        alert('Bitte mindestens 1 Suchmaschine auswählen.');
        break;
    }
    return;
  }
  // Falls der Name zu kurz ist oder ungültige Zeichen enthält
  var name = document.getElementById('focus-name').value;
  if (!isValidName(name)) {
    switch (document.documentElement.lang) {
      case 'en':
        alert('no Characters other then a-z, A-Z, 0-9, ä, ö, ü, ß, -, _ allowed, at least 1 character');
        break;
      case 'es':
        alert(''); // TODO
        break;
      default:
        alert(''); // TODO
        break;
    }
    return;
  }
  // Liest die original-id des aktuellen fokus-dialogs (gesetzt wenn man einen Fokus bearbeitet)
  var oldId = document.getElementById('original-id').value;
  var id = getIdFromName(name);
  var overwrite = true;
  // Wenn bereits ein Fokus mit dem Namen existiert, aber keine original-id gesetzt war
  if (alreadyInUse(name) && oldId !== id) {
    // Fragt den Nutzer ob er den Fokus überschreiben möchte
    if (!confirm('Name bereits genutzt\nüberschreiben?')) {
      // Falls nicht wird das Speichern abgebrochen
      return;
    }
  }
  /* Fokus speichern */
  var focus = {};
  // Ausgewählte Suchmaschinen lesen und zu Fokus hinzufügen
  $('input[type=checkbox]:checked').each(function (el) {
    focus[$(this).attr('name')] = $(this).val();
  });
  // Name setzen
  focus['name'] = name;
  // Alte Version des Fokus löschen (aus localStorage und von der Webseite)
  if (oldId !== '') {
    localStorage.removeItem(oldId);
    removeFocusById(oldId);
  }
  // Neue Version des Fokus hinzufügen (zu localStorage und der Webseite)
  localStorage.setItem(id, JSON.stringify(focus));
  addFocus(name);
  setFocus(id);
  // Fokus-Formular verbergen
  $('#create-focus-modal').modal('hide');
}

/**
 * Delete current Focus
 * Listens for delete button
 */
function deleteFocus () {
  var oldId = document.getElementById('original-id').value;
  if ($('#' + oldId).prop('checked')) {
    setFocusToDefault();
  }
  localStorage.removeItem(oldId);
  removeFocusById(oldId);
  $('#create-focus-modal').modal('hide');
  $('#focus-select').change();
}

/**
 * Is the name valid (in terms of characters)?
 */
function isValidName (name) {
  // no Characters other then a-z, A-Z, 0-9, ä, ö, ü, ß, -, _ allowed
  // at least 1 character
  return /^[a-zA-Z0-9äöüß\-_ ]*$/.test(name);
}

/**
 * Is at least one focus selected?
 */
function atLeastOneChecked () {
  return $('input[type=checkbox]:checked').length > 0;
}

/**
 * Is there already a focus with this name?
 */
function alreadyInUse (name) {
  return localStorage.hasOwnProperty(getIdFromName(name));
}

/**
 * Adds an option to the focus selector
 */
function addFocus (name) {
  var id = getIdFromName(name);
  $('#focus-select').append('<option value="' + id + '" style="font-family: FontAwesome, sans-serif;">&#xf2c0; ' + name + '</option>');
}

/**
 * Remove the focuses html-elements
 */
function removeFocus (name) {
  removeFocusById(getIdFromName(name));
}

/**
 * Remove the focuses html-elements
 */
function removeFocusById (id) {
  if (id == '') {
    return;
  }
  var focus = $('#focus-select option[value="' + id + '"]').remove();
}

/**
 * Turns a name into an id
 * Converts special characters and spaces
 */
function getIdFromName (name) {
  name = name.toLowerCase();
  name = name.split(' ').join('_');
  name = name.split('ä').join('ae');
  name = name.split('ö').join('oe');
  name = name.split('ü').join('ue');
  return 'focus_' + name;
}

/**
 * Loads the focus object for the given id from local storage
 */
function loadFocusById (id) {
  return JSON.parse(localStorage.getItem(id));
}

/**
 * Unchecks all focuses from the focus creator dialog
 */
function uncheckAll () {
  $('.focusCheckbox').prop('checked', false);
}

/**
 * Resets all settings
 */
function resetOptions () {
  localStorage.removeItem('pers');
  var keys = [];
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    keys.push(key);
  }
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key.startsWith('param_' || key.startsWith('focus'))) {
      localStorage.removeItem(key);
    }
  }
}

/**
 * Sets the selected focus to default
 */
function setFocusToDefault () {
  setFocus(DEFAULT_FOCUS);
}

/**
 * Sets the selected focus
 * @param {String} focusID The id of the focus, without #
 */
function setFocus (focusID) {
  document.getElementById('focus-select').value = focusID;
}

function checkFocusEditable () {
  if (getCurrentFocus().startsWith('focus_')) {
    enableEditFocusBtn();
  } else {
    disableEditFocusBtn();
  }
}

function enableEditFocusBtn () {
  $('#editFocusBtn').removeClass('disabled').click(editCurrentFocus);
}

function disableEditFocusBtn () {
  $('#editFocusBtn').addClass('disabled').off('click');
}

function loadSavedResults () {
  var results = new Results();
  if (results.length > 0) {
    var html = $('\
    <div class="focus">\
      <input id="savedResults" class="focus-radio hide" name="focus" value="container" form="searchForm" type="radio" required="">\
      <label id="saved-results-label" class="focus-label" for="savedResults">\
        <span class="glyphicon glyphicon-floppy-disk"></span>\
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
