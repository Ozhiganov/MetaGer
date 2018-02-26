$(function () {
  loadLocalStorage();
});

/**
 * Loads the user theme and stored settings from local storage
 */
function loadLocalStorage () {
  if (localStorage) {
    setSettings();
  }
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
/**
 * Übersetzt den Key in die aktuelle Sprache.
 * Die Sprache kann optional auch explizit angegeben werden.
 * Verwendung: t('KEY')
 */

// Speichert die Übersetzungen
var translations = {
  'de': {
    'select-engine': 'Bitte mindestens 1 Suchmaschine auswählen.',
    'select-valid-name': 'Bitte gültigen Namen eingeben:\n* Keine Sonderzeichen\n* Mindestens 1 Buchstabe\n',
    'confirm-overwrite-name': 'Name bereits genutzt.\nÜberschreiben?',
    'saved-settings': 'Auf der folgenden Startseite sind Ihre Einstellungen nun einmalig gespeichert. Nach Ihrer ersten Suche sind diese wieder verloren. Wenn Sie diese speichern möchten, können Sie sich allerdings ein Lesezeichen für die generierte Startseite einrichten.',
    'generated-plugin': 'Ihr Browserplugin mit den persönlichen Sucheinstellungen wurde generiert. Folgen Sie bitte der Anleitung auf der folgenden Seite um es zu installieren. Beachten Sie: Zuvor sollten Sie ein eventuell bereits installiertes MetaGer-Plugin entfernen.',
    'result-saver.title': 'Gespeicherte Ergebnisse',
    'result-saver.filter': 'Filtern',
    'result-saver.sort.chronological': 'Chronologisch',
    'result-saver.sort.ranking': 'MetaGer-Ranking',
    'result-saver.sort.alphabetical': 'Alphabetisch (Hostname)',
    'result-saver.delete': 'Ergebnis aus dem Speicher löschen',
    'result-saver.deleteAll': '<span class="hidden-xs">Ergebnisse</span> löschen</button>',
    'result-saver.save.this': 'ÖFFNEN',
    'result-saver.save.newtab': 'IN NEUEM TAB',
    'result-saver.save.anonymous': 'ANONYM ÖFFNEN'
  },

  'en': {
    'select-engine': 'Please select at least 1 search engine.',
    'select-valid-name': 'No characters other than a-z, A-Z, 0-9, ä, ö, ü, ß, -, _ allowed, at least 1 character',
    'confirm-overwrite-name': 'Name already in use.\nOverwrite?',
    'saved-settings': 'On the following startpage your settings are saved one-time. They will be lost after your first search. Though if you want to save them, you can create a bookmark for the generated startpage.',
    'generated-plugin': 'Your browser plugin with personal settings was generated. Please follow the instructions on the following page to install it. Notice that beforehand you might have to delete a former MetaGer plugin.',
    'result-saver.title': 'Saved Results',
    'result-saver.filter': 'Filter',
    'result-saver.sort.chronological': 'Chronological',
    'result-saver.sort.ranking': 'MetaGer-Ranking',
    'result-saver.sort.alphabetical': 'Alphabetical (Hostname)',
    'result-saver.delete': 'Delete saved Result',
    'result-saver.deleteAll': 'delete <span class="hidden-xs">results</span>',
    'result-saver.save.this': 'OPEN',
    'result-saver.save.newtab': 'IN NEW TAB',
    'result-saver.save.anonymous': 'OPEN ANONYMOUSLY'
  },

  'es': {
    'select-engine': 'Por favor, seleccione al menos un motor de búsqueda.',
    'select-valid-name': 'Por favor, introduzca un nombre válido constituido por letras y números.',
    'confirm-overwrite-name': 'Nombre ya ha sido elegido.\n¿Substituirlo?',
  // 'saved-settings': '',
  // 'generated-plugin': ''
  // 'result-saver.sort.chronological': 'Chronologisch',
  // 'result-saver.sort.ranking': 'MetaGer-Ranking',
  // 'result-saver.sort.alphabetical': 'Alphabetisch (Hostname)',
  // 'result-saver.delete': 'Ergebnis aus dem Speicher löschen',
  }
};

/**
 * Übersetzt den gegebenen Schlüssel in der gegebenen Sprache
 * Gibt standardmäßig deutsche Sprachstrings zurück, da davon ausgegangen werden kann, dass diese immer vorhanden sind
 * @param {string} key Zu übersetzender Schlüssel
 * @param {string} lang Zu verwendende Sprache
 */
function t (key, lang) {
  if (arguments.length == 1) {
    var lang = $('html').attr('lang');
    return translations[lang][key];
  } else if (arguments.length == 2 && translations[lang] && translations[lang][key]) {
    return translations[lang][key];
  } else {
    return translations.de[key];
  }
}
