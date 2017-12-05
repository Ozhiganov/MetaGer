/*
 * This object gathers all stored Result Objects and can Update the Interface to show them.
*/
function Results (sort) {
  if (!localStorage) return;
  this.prefix = 'result_';
  this.sort = sort;
  this.results = [];
  this.updateResults();
  this.length = this.results.length;
  this.sortResults();
}

Results.prototype.sortResults = function () {
  if (this.sort === undefined) this.sort = 'chronological';
  var sortType = this.sort;
  switch (sortType) {
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
};

Results.prototype.updateResults = function () {
  // Iterate over all Keys in the LocalStorage
  for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).indexOf(this.prefix) === 0) {
      var key = localStorage.key(i);
      key = key.substr(this.prefix.length);
      var tmpResult = new Result(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, key);
      tmpResult.setIndex(i);
      this.results.push(tmpResult);
    }
  }
};

Results.prototype.deleteResults = function () {
  var keys = [];
  for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).indexOf(this.prefix) === 0) {
      var key = localStorage.key(i);
      keys.push(key);
    }
  }
  $.each(keys, function (index, value) {
    localStorage.removeItem(value);
  });
};

Results.prototype.updateResultPageInterface = function () {
  var sortType = this.sort;
  if (this.results.length === 0) {
    $('#savedFokiTabSelector, #savedFoki').remove();
    return;
  }
  /*if ($('#savedFokiTabSelector').length === 0) {
    var savedFoki = $('\
      <div id="savedFokiTabSelector">\
        <a aria-controls="savedFoki" href="#savedFoki" role="tab" data-toggle="tab">\
          <span class="glyphicon glyphicon-floppy-disk"></span> gespeicherte Ergebnisse\
          <span class="badge">' + this.results.length + '</span>\
        </a>\
      </div>\
      ')
    $('#foki').append(savedFoki)
  } else {
    $('#savedFokiTabSelector span.badge').html(this.results.length)
  }*/
  if ($('#savedFoki').length === 0) {
    // Now append the Tab Panel
    var tabPanel = $('\
        <div id="savedFoki">\
        </div>\
        ');
    $('#additions-container').append(tabPanel);
  } else {
    $('#savedFoki').html('');
    var tabPanel = $('#savedFoki');
  }
  this.addToContainer(tabPanel, sortType);
};

Results.prototype.addToContainer = function (container) {
  var sortType = this.sort;
  $.each(this.results, function (index, result) {
    $(container).append(result.toHtml());
  });

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
            <button class="btn btn-danger btn-md" id="saver-options-btn">\
            <i class="fa fa-trash-o" aria-hidden="true"></i>\
            <span class="hidden-xs">Ergebnisse</span> löschen</button>\
          </div>\
      </div>\
    ');

  $(options).find('select').val(sortType);

  $(container).prepend(options);

  $(options).find('select').change(function () {
    new Results($(this).val()).updateResultPageInterface();
  });

  $(options).find('button').click({caller: this}, function (event) {
    event.data.caller.deleteResults();
    new Results().updateResultPageInterface();
  });

  $(options).find('input').keyup(function () {
    var search = $(this).val();
    $('#savedFoki > div.result').each(function (index, value) {
      var html = $(this).html();
      if (html.toLowerCase().indexOf(search.toLowerCase()) === -1) {
        $(value).addClass('hidden');
      }else {
        $(value).removeClass('hidden');
      }
    });
  });
};

function Result (title, link, anzeigeLink, gefVon, hoster, anonym, description, rank, hash) {
  this.prefix = 'result_'; // Präfix for the localStorage so we can find all Items

  if (hash !== null && hash !== undefined) {
    this.hash = hash;
    this.load();
  } else {
    console.log('Result: ', title, link, anzeigeLink, gefVon, hoster, anonym, description);
    this.hash = MD5(title + link + anzeigeLink + gefVon + hoster + anonym + description);

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
    this.save();
  }
}

Result.prototype.load = function () {
  if (localStorage) {
    var result = localStorage.getItem(this.prefix + this.hash);
    if (result === null) return false;
    result = b64DecodeUnicode(result);
    result = JSON.parse(result);
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
  }else {
    return false;
  }
};

Result.prototype.save = function () {
  /*
  * This function will save the data of this Result to the LocalStorage
  */
  if (localStorage) {
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

    result = JSON.stringify(result);
    result = b64EncodeUnicode(result);

    localStorage.setItem(this.prefix + this.hash, result);

    return true;
  }else {
    return false;
  }
};

function b64EncodeUnicode (str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

function b64DecodeUnicode (str) {
  return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

Result.prototype.setIndex = function (index) {
  this.index = index;
};

Result.prototype.remove = function () {
  localStorage.removeItem(this.prefix + this.hash);
  new Results().updateResultPageInterface();
};

Result.prototype.toHtml = function () {
  var result = $('\
    <div class="saved-result result">\
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
  // Read the necessary data from the result html
  var title = $('.result[data-count=' + index + '] .result-title a').html();
  var link = $('.result[data-count=' + index + '] .result-title a').attr('href');
  var anzeigeLink = $('.result[data-count=' + index + '] .result-link a').html();
  var gefVon = $('.result[data-count=' + index + '] .result-hoster a').html();
  var hoster = $('.result[data-count=' + index + '] .result-hoster a').attr('href');
  var anonym = $('.result[data-count=' + index + '] .result-proxy').attr('href');
  var description = $('.result[data-count=' + index + '] .result-description').html();

  // Create the result object
  new Result(title, link, anzeigeLink, gefVon, hoster, anonym, description, index, undefined);

  // Animate the result transfer to the saved results
  /*var transferTarget = $('#savedFokiTabSelector').length ? $('#savedFokiTabSelector') : $('#foki')
  $('.result[data-count=' + index + ']').transfer({to: transferTarget, duration: 1000});*/

  // Update the saved results
  new Results().updateResultPageInterface();
}
