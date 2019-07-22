$(document).ready(function () {
  $('.js-only').removeClass('js-only');
  $('.no-js').addClass('hide');
});

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;


    if (e.keyCode == '9') {
        e.preventDefault();
        $("#keyboard-ctrl-info").show();
        $("#keyboard-ctrl-info").focus();
    } else {
    }

}