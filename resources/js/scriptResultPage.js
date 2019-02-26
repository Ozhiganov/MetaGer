$(document).ready(function () {
  botProtection();

  enableFormResetter();
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