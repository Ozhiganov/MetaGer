$(document).ready(function () {
  activateJSOnlyContent();
  var focus = $('#foki > li.active > a').attr('aria-controls');
  var custom = $('#foki > li.active').hasClass('custom-focus-tab-selector');
  getDocumentReadyForUse(focus, custom);
  botProtection();
  if (document.location.href.indexOf('focus=container') !== -1) {
    $($('#foki > li#savedFokiTabSelector').get(0)).find('>a').tab('show');
  }

  if (localStorage.hasOwnProperty('param_sprueche')) {
    var sprueche = localStorage.getItem('param_sprueche') === 'on'; // check for sprueche local storage parameter
  } else {
    var sprueche = getURLParameter('sprueche', 'on') === 'on'; // load the sprueche url parameter
  }

  var search = getMetaTag('q') || '';
  var locale = getMetaTag('l') || 'de';
  //loadQuicktips(search, locale, sprueche); // load the quicktips
});

/*
function readLocaleFromUrl (defaultLocale) {
  return location.pathname.substr(1, location.pathname.indexOf('/meta', 0) - 1) || 'de'
}
*/

function getURLParameter (name, defaultValue) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || defaultValue;
}

function getMetaTag (name) {
  if (typeof $('meta[name="' + name + '"')[0] !== 'undefined') {
    return $('meta[name="' + name + '"')[0].content || null;
  } else {
    return null;
  }
}

function activateJSOnlyContent () {
  $('#searchplugin').removeClass('hide');
  $('.js-only').removeClass('js-only');
}

function tabs () {
  $('#foki > li.tab-selector > a').each(function () {
    if ($(this).attr('target') != '_blank') {
      $(this).attr('href', '#' + $(this).attr('aria-controls'));
      $(this).attr('role', 'tab');
      $(this).attr('data-toggle', 'tab');
    }
  });
  $('#foki > li.tab-selector > a').off();
  $('#foki > li.tab-selector > a').on('show.bs.tab', function (e) {
    var fokus = $(this).attr('aria-controls');
    var link = $('#' + fokus + 'TabSelector a').attr('data-href');
    if ($('#' + fokus + 'TabSelector').attr('data-loaded') != '1') {
      $.get(link, function (data) {
        $('#' + fokus + 'TabSelector').attr('data-loaded', '1');
        $('#' + fokus).html(data);
        $('input[name=focus]').val($('#foki li.active a').attr('aria-controls'));
        getDocumentReadyForUse(fokus);
      });
    } else {
      getDocumentReadyForUse(fokus);
    }
  });
}

function getDocumentReadyForUse (fokus, custom) {
  if (typeof custom == 'undefined') custom = false;
  activateJSOnlyContent();
  clickLog();
  popovers();
  if (fokus === 'bilder') imageLoader();
  if (custom) initialLoadContent(fokus);
  // pagination()
  tabs();
  theme();
  fokiChanger();
  pluginInfo();
  $('iframe:not(.resized)').iFrameResize();
  $('iframe').addClass('resized');
  addListeners();
}

function addListeners () {
  $('#reset').attr('type', 'button').click(resetSearchbar);
}

function resetSearchbar () {
  $('#eingabeTop').val('');
}

function pluginInfo () {
  if (localStorage) {
    if (localStorage.getItem('pluginInfo') == 'off') $('#searchplugin').css('display', 'none');
    $('#searchplugin').on('close.bs.alert', function () {
      $.get('/pluginClose');
      localStorage.setItem('pluginInfo', 'off');
    });
    $('#searchplugin a.btn').click(function () {
      $.get('/pluginInstall');
    });
  }
}

function theme () {
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
  }
}

function clickLog () {
  $('.result a.title, .result div.link-link a').off();
  $('.result a.title, .result div.link-link a').click(function () {
    $.get('/clickstats', {
      i: $('meta[name=p]').attr('content'),
      s: $(this).attr('data-hoster'),
      q: $('meta[name=q]').attr('content'),
      p: $(this).attr('data-count'),
      url: $(this).attr('href')
    });
  });
}

function botProtection () {
  if ($('meta[name=pqr]').length > 0) {
    var link = atob($('meta[name=pqr]').attr('content'));
    var hash = $('meta[name=pq]').attr('content');
    document.location.href = link + '&bot=' + hash;
  }
}

function popovers () {
  $('[data-toggle=popover]').each(function (e) {
    $(this).popover({
      // html          :   true,
      // title         :   "<i class="fa fa-cog" aria-hidden="true"></i> Optionen",
      content: $(this).parent().find('.content').html()
    });
  });
}

function pagination () {
  $('.pagination li:not(.active) > a').attr('href', '#');
  $('.pagination li.disabled > a').removeAttr('href');
  $('.pagination li:not(.active) > a').off();
  $('.pagination li:not(.active) > a').click(paginationHandler);
}

function paginationHandler () {
  var link = $(this).attr('data-href');
  if (link.length == 0) {
    return;
  }
  var tabPane = $('.tab-pane.active');
  $(tabPane).html('<div class="loader"><img src="/img/ajax-loader.gif" alt="" /></div>');
  $.get(link, function (data) {
    $(tabPane).html(data);
    $('.pagination li:not(.active) > a').attr('href', '#');
    $('.pagination li.disabled > a').removeAttr('href');
    $('.pagination li:not(.active) > a').off();
    $('.pagination li:not(.active) > a').click(paginationHandler);
    getDocumentReadyForUse();
  });
}

function imageLoader () {
  if (typeof $('#container').masonry == 'undefined') {
    return;
  }
  var $grid = $('#container').masonry({
    columnWidth: 150,
    itemSelector: '.item',
    gutter: 10,
    isFitWidth: true
  });
  $grid.imagesLoaded().progress(function (instance, image) {
    $grid.masonry('layout');
  });
}

function eliminateHost (host) {
  $('.result:not(.ad)').each(function (e) {
    var host2 = $(this).find('.link-link > a').attr('data-host');
    if (host2.indexOf(host) === 0) {
      $(this).css('display', 'none');
    }
  });
}

function fokiChanger () {
  $('#fokiChanger ul > li').click(function () {
    document.location.href = $(this).attr('data-href');
  });
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


/**
 * Loads the content for a given fokus
 */
function initialLoadContent (fokus) {
  var link = $('#' + fokus + 'TabSelector a').attr('data-href');
  $.get(link, function (data) {
    $('#' + fokus).html(data);
    getDocumentReadyForUse(fokus);
  });
}
