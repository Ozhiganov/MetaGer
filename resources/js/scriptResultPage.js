$(document).ready(function () {
  botProtection();
  enableFormResetter();
  loadMoreResults();
});

function botProtection() {
  $('.result').find('a').click(function () {
    var link = $(this).attr('href');
    var newtab = false;
    if ($(this).attr('target') == '_blank') {
      newtab = true;
    }
    $.ajax({
      url: '/img/cat.jpg',
      type: 'post',
      data: {
        mm: $('meta[name=mm]').attr('content')
      },
      timeout: 2000
    })
      .always(function () {
        if (!newtab)
          document.location.href = link;
      });
    if (!newtab)
      return false;
    else
      return true;
  });
}

function enableFormResetter() {
  var deleteButton = $("#search-delete-btn");
  var timeout = null;
  $(deleteButton).click(function () {
    if (timeout != null) {
      clearTimeout(timeout);
      timeout = null;
    }
    $("input[name=eingabe]").val("");
    $("input[name=eingabe]").focus();
  });
  $("input[name=eingabe]").focusin(function () {
    $(deleteButton).css("display", "initial");
  });
  $("input[name=eingabe]").focusout(function () {
    timeout = window.setTimeout(function () {
      $(deleteButton).css("display", "none");
      timeout = null;
    }, 500);
  });
}

function loadMoreResults() {
  var searchKey = $("meta[name=searchkey]").attr("content");
  var updateUrl = document.location.href;
  updateUrl += "&loadMore=" + searchKey + "&script=yes";

  updateUrl = updateUrl.replace("/meta.ger3", "/loadMore");

  var expectedEngines = -1;
  var deliveredEngines = -1;

  var currentlyLoading = false;

  // Regularily check for not yet delivered Results
  var resultLoader = window.setInterval(function () {
    if (!currentlyLoading) {
      currentlyLoading = true;
      $.getJSON(updateUrl, function (data) {
        // Check if we can clear the interval (once every searchengine has answered)
        if (data.engineDelivered == data.engineCount || data.timeWaiting > 5) {
          clearInterval(resultLoader);
        }
        // If there are new results we can add them
        if (typeof data.newResults != "undefined") {
          for (var key in data.newResults) {
            var value = data.newResults[key];

            // If there are more results than the given index we will prepend otherwise we will append the result
            var results = $(".result:not(.ad)");
            if (typeof results[key] != "undefined") {
              console.log("inserting before " + key);
              $(results[key]).insertBefore(value);
            } else {
              $(results[key - 1]).insertAfter(value);
            }

            console.log(key + "=>" + value);
          }
        }
        currentlyLoading = false;
      });
    }
  }, 1000);

  console.log(updateUrl);

}