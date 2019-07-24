$(document).ready(function () {
  $('.js-only').removeClass('js-only');
  $('.no-js').addClass('hide');
});

// Flag used for checking if the user was shown the keyboard control information
ctrlInfo = false;
currentResultIndex = 1;

document.onkeydown = checkKey;
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '9') {
        e.preventDefault();
        guideThroughMenu($(document.activeElement));
    }

}

function guideThroughMenu(focused) {
    if(!ctrlInfo) {
        ctrlInfo = true;
        showInfoBox();
    } else {
        focusNextResult();
    }
}

function showInfoBox() {
    $("#keyboard-ctrl-info").show();
    $("#keyboard-ctrl-info").focus();
}

function focusNextResult() {
    $("div[data-index='"+ currentResultIndex + "'").focus();
    n = $(".result").length;
    currentResultIndex = 1 + currentResultIndex % n;
    console.log(currentResultIndex + " - " + n);
}