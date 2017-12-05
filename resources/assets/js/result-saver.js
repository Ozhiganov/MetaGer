/**
 * Global Results type element
 */
RESULTS_GLOBAL = null;

/**
 * Returns the global results object,
 * creates it if necessary
 * @returns {Results} The global results object
 */
function results() {
  if (!RESULTS_GLOBAL) {
    RESULTS_GLOBAL = new Results();
  }
  return RESULTS_GLOBAL;
}

/**
 * Load all saved results and sort them
 * @param {String} sort The type of sorting function to call for these results
 */
function Results () { //TODO remove sort
  if (!localStorage) return;
  this.prefix = 'result_';
  this.sort = 'chronological';
  this.results = [];
  this.loadAllResults();
  this.length = this.results.length;
  this.sortResults();

  results = this;
}

/**
 * Sorts all results according to the sort-type given with this.sort
 */
Results.prototype.sortResults = function () {
  if (this.sort === undefined) this.sort = 'chronological';
  switch (this.sort) {
    case 'chronological':
      this.results.sort(function (a, b) {
        if (a.added > b.added) return -1;
        if (a.added < b.added) return 1;
        return 0;
      });
      break;
    case 'rank':
      this.results.sort(function (a, b) {
        if (a.rank > b.rank) return -1;
        if (a.rank < b.rank) return 1;
        return 0;
      });
      break;
    case 'alphabetical':
      this.results.sort(function (a, b) {
        if (b.hostname > a.hostname) return -1;
        if (b.hostname < a.hostname) return 1;
        return 0;
      });
      break;
  }
  return this;
};

/**
 * Load all Results from localstorage
 */
Results.prototype.loadAllResults = function () {
  // Iterate over all keys in the localstorage
  for (var i = 0; i < localStorage.length; i++) {
    // If the key starts with the prefix used for saved results
    var key = localStorage.key(i);
    if (key.indexOf(this.prefix) === 0) {
      // Remove the prefix
      key = key.substr(this.prefix.length);
      // Create the result for this key by loading it from localstorage
      var tmpResult = new Result(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, key);
      // Give the result an unique index
      tmpResult.setIndex(i);
      // Add the result to the list of results
      this.results.push(tmpResult);
    }
  }
};

/**
 * Delete all results from localstorage
 */
Results.prototype.deleteAllResults = function () {
  var keys = [];
  // Save all keys starting with the prefix used for saved results into the keys array
  for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).indexOf(this.prefix) === 0) {
      var key = localStorage.key(i);
      keys.push(key);
    }
  }
  // Remove all keys saved in the keys array from localstorage
  $.each(keys, function (index, value) {
    localStorage.removeItem(value);
  });
};

/**
 * Update the result page to match the available results
 */
Results.prototype.updateResultPageInterface = function () {
  if (this.results.length === 0) {
    // If there are no saved-results left, remove the savedFoki element
    $('#savedFoki').remove();
    return;
  }
  if ($('#savedFoki').length === 0) {
    // If there is no savedFoki element yet, create it
    var tabPanel = $('\
        <div id="savedFoki">\
        </div>\
        ');
    $('#additions-container').append(tabPanel);
  } else {
    // If there already is a savedFoki element, get it
    $('#savedFoki').html('');
    var tabPanel = $('#savedFoki');
  }
  // Add the full savedFoki element to the tabPanel
  this.addToContainer(tabPanel);
};

/**
 * Create the savedFoki element and all of its content,
 * including the saver-options element and all saved results available
 * @param {HTML-Element} container The element to add the saved-results to
 */
Results.prototype.addToContainer = function (container) {
  // Create the saver-options element, which is a bar containing 
  // options for filtering, sorting and deleting all results
  var options = $('\
    <div id="saver-options">\
      <div class="saver-option saver-option-filter">\
        <input class="form-control" type="text" placeholder="&#xf0b0 Filtern">\
      </div>\
      <div class="saver-option saver-option-sort">\
        <select class="form-control" style="font-family: FontAwesome, sans-serif;">\
          <option value="chronological" style="font-family: FontAwesome, sans-serif;">&#xf017 Chronologisch</option>\
          <option value="rank" style="font-family: FontAwesome, sans-serif;">&#xf162 MetaGer-Ranking</option>\
          <option value="alphabetical" style="font-family: FontAwesome, sans-serif;">&#xf15d Alphabetisch (Hostname)</option>\
        </select>\
      </div>\
      <div class="saver-option saver-option-delete">\
        <button class="btn btn-danger btn-md" id="saver-options-delete-btn">\
        <i class="fa fa-trash-o" aria-hidden="true"></i>\
        <span class="hidden-xs">Ergebnisse</span> löschen</button>\
      </div>\
    </div>\
  ');

  // Set the initial value for the sorting select, based on this.sort
  $(options).find('select').val(this.sort);

  // Add the saver-options element to the given container
  $(container).append(options);

  // When the sorting select value is changed, 
  // Sort all results with the selected sorting function and update their appearance
  $(options).find('select').change(function () {
    results().sortResults($(this).val()).updateResultPageInterface();
  });

  // When the delete button is clicked,
  // Delete all results and update their appearance
  $(options).find('#saver-options-delete-btn').click(function (event) {
    results().deleteAllResults();
    results().updateResultPageInterface();
  });

  // When the user is done typing into the filter input field,
  // Filter all results, only showing ones that contain the filer
  $(options).find('input').keyup(function () {
    // Get the entered filter
    var search = $(this).val();
    // Hide all results that do not contain the entered filter
    $('#savedFoki saved-result-content').each(function (index, value) {
      var html = $(this).html();
      if (html.toLowerCase().indexOf(search.toLowerCase()) === -1) {
        $(value).addClass('hidden');
      }else {
        $(value).removeClass('hidden');
      }
    });
  });

  // Append all results available
  $.each(this.results, function (index, result) {
    $(container).append(result.toHtml());
  });
};

/**
 * Creates a result object
 * @param {String} title The title of this result
 * @param {String} link The link to this result
 * @param {String} anzeigeLink The displayed link
 * @param {String} gefVon The ??
 * @param {String} hoster The website this result is hosted on
 * @param {String} anonym The link to open this result anonymously
 * @param {String} description The description of this result
 * @param {int} rank The rank of this result
 * @param {int} hash The hash value for this result
 */
function Result (title, link, anzeigeLink, gefVon, hoster, anonym, description, rank, hash) {
  // Set prefix for localstorage
  this.prefix = 'result_';

  if (hash !== null && hash !== undefined) {
    // If a hash is given, the result for this hash is loaded from localstorage
    this.hash = hash;
    this.load();
  } else {
    // If no hash is given, calculate it
    this.hash = MD5(title + link + anzeigeLink + gefVon + hoster + anonym + description);

    // Save all important data
    this.title = title;
    this.link = link;
    this.anzeigeLink = anzeigeLink;
    this.gefVon = gefVon;
    this.hoster = hoster;
    this.anonym = anonym;
    this.description = description;
    this.rank = rank;
    this.added = new Date().getTime();
    var parser = document.createElement('a');
    parser.href = this.anzeigeLink;
    this.hostname = parser.hostname;

    // Save this result to localstorage
    this.save();
  }
}

/**
 * Load this result from local storage
 * The key used equals 'prefix + hash' of this result
 */
Result.prototype.load = function () {
  if (!localStorage) return false;

  // Try to load from local storage
  var result = localStorage.getItem(this.prefix + this.hash);
  if (result === null) return false;

  // Decode the base64 result into a normal string, then json
  result = b64DecodeUnicode(result);
  result = JSON.parse(result);

  // Load all important data
  this.title = result.title;
  this.link = result.link;
  this.anzeigeLink = result.anzeigeLink;
  this.gefVon = result.gefVon;
  this.hoster = result.hoster;
  this.anonym = result.anonym;
  this.description = result.description;
  this.added = result.added;
  this.rank = result.rank;
  this.hostname = result.hostname;

  return true;
};

/**
 * Save the data of this result into localstorage
 * The key used equals 'prefix + hash' of this result
 */
Result.prototype.save = function () {
  if (!localStorage) return false;
  // Save all important data
  var result = {
    title: this.title,
    link: this.link,
    anzeigeLink: this.anzeigeLink,
    gefVon: this.gefVon,
    hoster: this.hoster,
    anonym: this.anonym,
    description: this.description,
    added: this.added,
    rank: this.rank,
    hostname: this.hostname
  };

  // Encode the result object into a string, then into base64
  result = JSON.stringify(result);
  result = b64EncodeUnicode(result);

  // Save the result string into local storage
  // The key used equals 'prefix + hash' of this result
  localStorage.setItem(this.prefix + this.hash, result);

  return true;
};

/**
 * Convert a string into base64 format
 * @param {String} str The string to convert
 */
function b64EncodeUnicode (str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Convert a base64 string into normal format
 * @param {String} str The string to convert
 */
function b64DecodeUnicode (str) {
  return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

Result.prototype.setIndex = function (index) {
  this.index = index;
};

/**
 * Remove this result from localstorage and refresh the view
 */
Result.prototype.remove = function () {
  localStorage.removeItem(this.prefix + this.hash);
  new Results().updateResultPageInterface();
};

/**
 * Converts this result object into an html element
 * @returns {HTML-Element} The converted HTML-Element
 */
Result.prototype.toHtml = function () {
  // Create the saved-result element
  var result = $('\
    <div class="saved-result result" data-count="' + this.index + '">\
      <div class="saved-result-remover remover" title="Ergebnis aus dem Speicher löschen">\
        <i class="fa fa-trash"></i>\
      </div>\
      <div class="saved-result-content">\
        <h2 class="result-title">\
          <a class="title" href="' + this.link + '" target="_blank" data-hoster="' + this.hoster + '" data-count="1" rel="noopener">\
            ' + this.title + '\
          </a>\
        </h2>\
        <div class="result-header">\
          <div class="result-link">\
            <a href="' + this.link + '" target="_blank" data-hoster="' + this.hoster + '" data-count="' + this.index + '" rel="noopener">\
              ' + this.anzeigeLink + '\
            </a>\
          </div>\
          <span class="result-hoster">' + this.gefVon + '</span>\
          <span class="result-proxy">\
            <a class="result-proxy" onmouseover="$(this).popover(\'show\');" onmouseout="$(this).popover(\'hide\');" data-toggle="popover" data-placement="auto right" data-container="body" data-content="Der Link wird anonymisiert geöffnet. Ihre Daten werden nicht zum Zielserver übertragen. Möglicherweise funktionieren manche Webseiten nicht wie gewohnt." href="' + this.proxy + '" target="_blank" rel="noopener" data-original-title="" title="">\
              <img src="/img/proxyicon.png" alt="">\
              anonym öffnen\
            </a>\
          </span>\
        </div>\
        <div class="result-body">\
          <div class="description">' + this.description + '</div>\
        </div>\
      </div>\
    </div>');

  // Add a click listener to the remover, that removes the result on click
  $(result).find('.remover').click({caller: this}, function (event) {
    event.data.caller.remove();
  });

  return result;
};

/**
 * Saves the result at the given index
 * @param {int} index The index of the result to save
 */
function resultSaver (index) {
  // Remember the original result element
  var original = $('.result[data-count=' + index + ']');

  // Read the necessary data from the result html
  var title = $('.result[data-count=' + index + '] .result-title a').html();
  var link = $('.result[data-count=' + index + '] .result-title a').attr('href');
  var anzeigeLink = $('.result[data-count=' + index + '] .result-link a').html();
  var gefVon = $('.result[data-count=' + index + '] .result-hoster a').html();
  var hoster = $('.result[data-count=' + index + '] .result-hoster a').attr('href');
  var anonym = $('.result[data-count=' + index + '] .result-proxy').attr('href');
  var description = $('.result[data-count=' + index + '] .result-description').html();

  // Create the result object
  var result = new Result(title, link, anzeigeLink, gefVon, hoster, anonym, description, index, undefined);

  // Update the saved results
  results().updateResultPageInterface();

  // Animate the result transfer to the saved results
  var transferTarget = $('.saved-result[data-count=' + index + ']');
  $(original).transfer({to: transferTarget, duration: 1000});
}
