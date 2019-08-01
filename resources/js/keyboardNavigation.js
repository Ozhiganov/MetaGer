var ctrlInfo = false;       // Flag used for checking if the user was shown the keyboard control information
/* var currentElement = [
    ["Results", false]
];
*/ 
var currentResultIndex = 1; // stores result which was focused last


$(document).on('keydown', function(e) {
    e = e || window.event;
    // Check for TAB keypress
    if (e.keyCode == '9') {
        e.preventDefault();
        tabKeyPressed();
    } else if (e.keyCode == '13') {
        enterKeyPressed();
    }
});

function tabKeyPressed() {
    if(!ctrlInfo) {
        ctrlInfo = true;
        showInfoBox();
    } else {
        focusNextElement($(":focus"));
    }
}

function enterKeyPressed() {
    if($(":focus").hasClass("result")) {
        //$(":focus").children("a").focus();
        console.log($(":focus").children("a"));
    }
}

function showInfoBox() {
    infoBox = $("#keyboard-ctrl-info");
    infoBox.show();
    infoBox.focus();
}

function focusNextElement(currentFocus) {
    if(currentFocus.hasClass("result")) {
        focusNextResult(currentFocus);
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
   if(currentFocus.next().length > 0) {
        currentFocus.next().focus();
    } else {
        $("div[.result]").first().focus();
    }
}