/**
 * All results are stored in the global object 'results'
 */
results = new Results();

$(document).ready(function () {
  // Add all saved results
  results.loadAllResults();
  // Sort all results
  results.sortResults();
  // Update the visualization
  results.updateResultPageInterface();
});

/**
 * Load all saved results and sort them
 * @param {String} sort The type of sorting function to call for these results
 */
function Results () {
  if (!localStorage) return;
  this.prefix = 'result_';
  this.sort = 'chronological';
  this.results = [];
}

/**
 * Adds a result to the list of results
 * @param {Result} result The result to add
 */
Results.prototype.addResult = function (result) {
  if (this.results.every(function (val) {
      return val.hash !== result.hash;
    })) {
    this.results.push(result);
  }
};

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
    case 'alphabetical': // by hostname
      this.results.sort(function (a, b) {
        if (b.hosterName > a.hosterName) return -1;
        if (b.hosterName < a.hosterName) return 1;
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
      // Add the result to the list of results
      this.results.push(tmpResult);
    }
  }
};

/**
 * Delete all results from localstorage
 */
Results.prototype.deleteAllResults = function () {
  this.results = [];
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
          <h1>' + t('result-saver.title') + '</h1>\
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
        <input class="form-control" type="text" placeholder="&#xf0b0 ' + t('result-saver.filter') + '">\
      </div>\
      <div class="saver-option saver-option-sort">\
        <select class="form-control" style="font-family: FontAwesome, sans-serif;">\
          <option value="chronological" style="font-family: FontAwesome, sans-serif;">&#xf017 ' + t('result-saver.sort.chronological') + '</option>\
          <option value="rank" style="font-family: FontAwesome, sans-serif;">&#xf162 ' + t('result-saver.sort.ranking') + '</option>\
          <option value="alphabetical" style="font-family: FontAwesome, sans-serif;">&#xf15d ' + t('result-saver.sort.alphabetical') + '</option>\
        </select>\
      </div>\
      <div class="saver-option saver-option-delete">\
        <button class="btn btn-danger btn-md" id="saver-options-delete-btn">\
          <i class="fa fa-trash-o" aria-hidden="true"></i>\
          ' + t('result-saver.deleteAll') + '\
        </button>\
      </div>\
    </div>\
  ');

  // Set the initial value for the sorting select, based on this.sort
  $(options).find('select').val(this.sort);

  // Add the saver-options element to the given container
  $(container).append(options);

  /* ~~~ Filter ~~~ */
  // When the user is done typing into the filter input field,
  // Filter all results, only showing ones that contain the filer
  $(options).find('input').keyup(function () {
    // Get the entered filter
    var search = $(this).val();
    // Hide all results that do not contain the entered filter
    $('#savedFoki .saved-result-content').each(function (index, value) {
      // check for filter in all of the elements html-content
      var html = $(this).html();
      if (html.toLowerCase().indexOf(search.toLowerCase()) === -1) {
        // hide entire result block
        $(value).parent().addClass('hidden');
      }else {
        // show entire result block
        $(value).parent().removeClass('hidden');
      }
    });
  });

  /* ~~~ Sort ~~~ */
  // When the sorting select value is changed, 
  // Sort all results with the selected sorting function and update their appearance
  $(options).find('select').change(function () {
    var sort = $(this).val();
    results.sort = sort;
    results.sortResults(sort).updateResultPageInterface();
  });

  /* ~~~ Delete ~~~ */
  // When the delete button is clicked,
  // Delete all results and update their appearance
  $(options).find('#saver-options-delete-btn').click(function (event) {
    results.deleteAllResults();
    results.updateResultPageInterface();
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
 * @param {String} description The description of this result
 * @param {String} anonym The link to open this result anonymously
 * @param {int} rank The rank of this result
 * @param {int} hash The hash value for this result
 */
function Result (title, link, hosterName, hosterLink, anzeigeLink, description, anonym, index, hash) {
  // Set prefix for localstorage
  this.prefix = 'result_';

  if (hash === null || hash === undefined) {
    // Calculate the hash value of this result
    hash = MD5(title + link + hosterName + hosterLink + anzeigeLink + description + anonym);
  }

  this.hash = hash;

  // Try to load the result, if there was none create it
  if (!this.load()) {
    // Save all important data
    this.title = title;
    this.link = link;
    this.hosterName = hosterName;
    this.hosterLink = hosterLink;
    this.anzeigeLink = anzeigeLink;
    this.description = description;
    this.anonym = anonym;
    this.index = index;
    this.rank = index;
    this.added = new Date().getTime();

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
  var encoded = localStorage.getItem(this.prefix + this.hash);
  if (encoded === null) return false;

  // Decode the base64 result into a normal string, then json
  var decoded = b64DecodeUnicode(encoded);
  var result = JSON.parse(decoded);

  // Load all important data
  this.title = result.title;
  this.link = result.link;
  this.anzeigeLink = result.anzeigeLink;
  this.hosterName = result.hosterName;
  this.hosterLink = result.hosterLink;
  this.anonym = result.anonym;
  this.description = result.description;
  this.added = result.added;
  this.index = -result.index;
  this.rank = result.rank;

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
    hosterName: this.hosterName,
    hosterLink: this.hosterLink,
    anonym: this.anonym,
    description: this.description,
    added: this.added,
    index: this.index,
    rank: this.rank
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
  var hash = this.hash;
  results.results.splice(results.results.findIndex(function (result) {
    return result.hash === hash;
  }), 1);
  results.updateResultPageInterface();
};

/**
 * Converts this result object into an html element
 * @returns {HTML-Element} The converted HTML-Element
 */
Result.prototype.toHtml = function () {
  // Create the saved-result element
  var result = $('\
    <div class="saved-result result" data-count="' + this.index + '">\
      <div class="saved-result-remover remover" title="' + t('result-saver.delete') + '">\
        <i class="fa fa-trash"></i>\
      </div>\
      <div class="saved-result-content">\
        <div class="result-header">\
          <div class="result-headline">\
            <h2 class="result-title">\
              <a href="' + this.link + '" target="_blank" data-count="1" rel="noopener">\
                ' + this.title + '\
              </a>\
            </h2>\
            <a class="result-hoster" href="' + this.hosterLink + '" target="_blank" data-count="1" rel="noopener">\
              ' + this.hosterName + '\
            </a>\
          </div>\
          <a class="result-link" href="' + this.link + '" target="_blank" rel="noopener">\
            ' + this.anzeigeLink + '\
          </a>\
        <div class="result-body">\
          <div class="description">' + this.description + '</div>\
        </div>\
        <div class="result-footer">\
          <a class="result-open" href="' + this.link + '" target="_self" rel="noopener">\
            ' + t('result-saver.save.this') + '\
          </a>\
          <a class="result-open" href="' + this.link + '" target="_blank" rel="noopener">\
            ' + t('result-saver.save.newtab') + '\
          </a>\
          <a class="result-open-proxy" onmouseover="$(this).popover(\'show\');" onmouseout="$(this).popover(\'hide\');" data-toggle="popover" data-placement="auto right" data-container="body" data-content="Der Link wird anonymisiert geöffnet. Ihre Daten werden nicht zum Zielserver übertragen. Möglicherweise funktionieren manche Webseiten nicht wie gewohnt." href="' + this.anonym + '" target="_blank" rel="noopener" data-original-title="" title="">\
            ' + t('result-saver.save.anonymous') + '\
          </a>\
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
  var title = $('.result[data-count=' + index + '] .result-title a').html().trim();
  var link = $('.result[data-count=' + index + '] .result-title a').attr('href').trim();
  var hosterName = $('.result[data-count=' + index + '] .result-hoster').html().trim();
  var hosterLink = $('.result[data-count=' + index + '] .result-hoster').attr('href').trim();
  var anzeigeLink = $('.result[data-count=' + index + '] .result-link').html().trim();
  var description = $('.result[data-count=' + index + '] .result-description').html().trim();
  var anonym = $('.result[data-count=' + index + '] .result-open-proxy').attr('href').trim();

  // Create the result object
  var result = new Result(title, link, hosterName, hosterLink, anzeigeLink, description, anonym, index, null);

  // Add new result to results
  results.addResult(result);

  // Sort results
  results.sortResults();

  // Update the saved results
  results.updateResultPageInterface();

  // Animate the result transfer to the saved results
  var transferTarget = $('.saved-result[data-count=' + index + ']');
  if (original.length > 0 && transferTarget.length > 0) {
    $(original).transfer({to: transferTarget, duration: 1000});
  }
}
