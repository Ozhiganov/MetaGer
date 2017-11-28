function loadQuicktips (search, locale, sprueche) {
  var blacklist = [];
  if (!sprueche) {
    blacklist.push('sprueche');
  }
  getQuicktips(search, locale, blacklist, createQuicktips);
}

const QUICKTIP_SERVER = 'https://quicktips.metager3.de';
// const QUICKTIP_SERVER = 'http://localhost:63825'

/**
 * Requests quicktips from the quicktip server and passes them to the loadedHandler
 * 
 * @param {String} search search term
 * @param {String} locale 2 letter locale identifier
 * @param {Array<String>} blacklist excluded loaders
 * @param {Function} loadedHandler handler for loaded quicktips
 */
function getQuicktips (search, locale, blacklist, loadedHandler) {
  var getString = QUICKTIP_SERVER + '/quicktips.xml?search=' + search + '&locale=' + locale;
  blacklist.forEach(function (value) {
    getString += '&loader_' + value + '=false';
  });
  $.get(getString, function (data, status) {
    if (status === 'success') {
      var quicktips = $(data).children('feed').children('entry').map(function () {
        return quicktip = {
          type: $(this).children('mg\\:type').text(),
          title: $(this).children('title').text(),
          summary: $(this).children('content').text(),
          url: $(this).children('link').text(),
          gefVon: $(this).children('mg\\:gefVon').text(),
          score: $(this).children('relevance\\:score').text(),
          details: $(this).children('mg\\:details').children('entry').map(function () {
            return {
              title: $(this).children('title').text(),
              text: $(this).children('text').text(),
              url: $(this).children('url').text()
            };
          }).toArray()
        };
      }).toArray();
      loadedHandler(quicktips);
    } else {
      console.error('Loading quicktips failed with status ' + status);
    }
  }, 'xml');
}

/**
 * <div id="quicktips">
 *   <div class="quicktip" type="TYPE">
 *     <details>
 *       <summary>
 *         <h1><a href="URL">TITLE</a></h1>
 *         <p>SUMMARY</p>
 *       </summary>
 *       <div class="quicktip-detail">
 *         <h2><a href="DETAILURL">DETAILTITLE</a></h1>
 *         <p>DETAILSUMMARY</p>
 *       </div>
 *       <div class="quicktip-detail">
 *         ...
 *       </div>
 *       ...
 *     </details>
 *     <span>GEFVON
 *   </div>
 * </div>
 * 
 * @param {Object} quicktips 
 */
function createQuicktips (quicktips, sprueche) {
  var quicktipsDiv = $('#quicktips');
  quicktips.sort(function (a, b) {
    return b.score - a.score;
  }).forEach(function (quicktip) {
    var mainElem;
    if (quicktip.details.length > 0) {
      mainElem = $('<details>');
      var summaryElem = $('<summary class="quicktip-summary">');
      var headlineElem = $('<h1>');
      if (quicktip.url.length > 0) {
        headlineElem.append('<a href=' + quicktip.url + '>' + quicktip.title + '</a>');
      } else {
        headlineElem.text(quicktip.title);
      }
      headlineElem.append('<i class="quicktip-extender fa fa-chevron-circle-down" aria-hidden="true"></i>');
      summaryElem
        .append(headlineElem)
        .append('<p>' + quicktip.summary + '</p>');
      mainElem.append(summaryElem);
      quicktip.details.forEach(function (detail) {
        var detailElem = $('<div class="quicktip-detail">');
        var detailHeadlineElem = $('<h2>');
        if (detail.url.length > 0) {
          detailHeadlineElem.append('<a href=' + detail.url + '>' + detail.title + '</a>');
        } else {
          detailHeadlineElem.text(detail.title);
        }
        detailElem
          .append(detailHeadlineElem)
          .append('<p>' + detail.text + '</p>');
        mainElem.append(detailElem);
      });
    } else {
      mainElem = $('<div class="quicktip-summary">');
      if (quicktip.title.length > 0) {
        var headlineElem = $('<h1>');
        if (quicktip.url.length > 0) {
          headlineElem.append('<a href=' + quicktip.url + '>' + quicktip.title + '</a>');
        } else {
          headlineElem.text(quicktip.title);
        }
        mainElem.append(headlineElem);
      }
      mainElem.append('<p>' + quicktip.summary + '</p>');
    }
    var quicktipDiv = $('<div class="quicktip" type="' + quicktip.type + '">');
    quicktipDiv
      .append(mainElem)
      .append('<span class="gefVon">' + quicktip.gefVon + '</span>');
    quicktipsDiv.append(quicktipDiv);
  });
}
