var ctrlInfo = false;       // Flag used for checking if the user was shown the keyboard control information
var currentResultIndex = 1; // stores result which was focused last

document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
// Check for TAB keypress
    if (e.keyCode == '9') {
        e.preventDefault();
        tabKeyPressed($(document.activeElement));
    }
}

function tabKeyPressed() {
    if(!ctrlInfo) {
        ctrlInfo = true;
        showInfoBox();
    } else {
        focusNextElement($(":focus"));
    }
}

function showInfoBox() {
    $("#keyboard-ctrl-info").show();
    $("#keyboard-ctrl-info").focus();
}

function focusNextElement(currentFocus) {
    if(currentFocus.hasClass("result")) {
        focusNextResult(currentFocus);
    } else if(false) {

    } else {
        focusResult();
    }
}
function focusResult() {
    $("div[data-index='"+ currentResultIndex + "'").focus();
    n = $(".result").length;
    currentResultIndex = 1 + currentResultIndex % n;
    console.log(currentResultIndex + " - " + n);
}

function focusNextResult(currentFocus) {
   if(!currentFocus.next().focus()) {
        alert("test");
    }
    console.log(currentFocus);
}