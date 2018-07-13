$(function () {
  loadLocalStorage();
  setActionListenersSearchbar();
  updateLangLabelCode();
});

function setActionListenersSearchbar() {
  $('#input-key').change(saveKey);
  $('#input-lang').change(saveLang);
}

function saveKey() {
  var key = $('#input-key').val();
  localStorage.setItem('key', key);
}

function loadKey() {
  var key = localStorage.getItem('key');
  if (key != null) {
    $('#input-key').val(key);
  }
}

function saveLang() {
  var lang = $('#input-lang').val();
  localStorage.setItem('lang', lang);
  updateLangLabelCode(lang);
}

function loadLang() {
  var lang = localStorage.getItem('lang');
  if (lang != null) {
    $('#input-lang').val(lang);
  }
}

/**
 * Loads the user theme and stored settings from local storage
 */
function loadLocalStorage() {
  if (localStorage) {
    setSettings();
    loadKey();
    loadLang();
  }
}

function setSettings() {
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
}

function updateLangLabelCode(langcode = null) {
  if (!langcode) {
    var langcode = localStorage.getItem('lang');
  }
  $('#lang-label-code').html(langcode);
}