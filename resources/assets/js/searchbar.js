$(function () {
  loadLocalStorage();
  setSearchbarActionListeners();
});

/**
 * Loads the user theme and stored settings from local storage
 */
function loadLocalStorage () {
  if (localStorage) {
    setSettings();
  }
}

function setSearchbarActionListeners () {
  $('#toggleOptBtn').click(toggleOptionsDialog);
}

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
}

function toggleOptionsDialog () {
  var btnMode = $('#toggleOptBtn').attr('data-mode');
  if (btnMode == 'o') {
    openOptionsDialog();
  } else {
    closeOptionsDialog();
  }
}

//# sourceMappingURL=searchbar.js.map