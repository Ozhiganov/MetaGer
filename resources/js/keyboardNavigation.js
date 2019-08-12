var ctrlInfo = false;       // Flag used for checking if the user was shown the keyboard control information
var currentResultIndex = 1; // stores index of result which was focused last
var currentFocusedElement = {      // Object used for storing currently focused element and element type (e.g. anchor tag or result div)
    element: $("div.result").first(), 
    type: "result"
};

$(document).on('keydown', function(e) {
    e = e || window.event;
    // Check for TAB keypress
    if (e.keyCode == '9') {
        e.preventDefault();
        tabKeyPressed();
    // Check for ENTER keypress
    } else if (e.keyCode == '13') {
        e.preventDefault();
        enterKeyPressed();
    }
});

function focusElement(e, type) {
    currentFocusedElement.element = e;
    currentFocusedElement.type = type;
    currentFocusedElement.element.focus();
}

function tabKeyPressed() {
    if(!ctrlInfo) {
        ctrlInfo = true;
        showInfoBox();
    } else {
        focusNextElement();
    }
}

function enterKeyPressed() {
    if(currentFocusedElement.type === "result") {
        console.log($(":focus").find("a").first());
        focusElement($(":focus").find("a").first(), "link")
    } else if(currentFocusedElement.type === "link") {
        window.location = currentFocusedElement.element.attr('href');
    }
}

function showInfoBox() {
    $("#keyboard-nav-info").show();
    focusElement($("#keyboard-nav-info"), "infobox");
}

function focusNextElement() {
    if(currentFocusedElement.type === "result") {
        focusNextResult();
    } else {
       focusElement($("div.result").not('.ad').first(), "result");
    }
}

function focusNextResult() {
   if(currentFocusedElement.element.next().length > 0) {
        focusElement(currentFocusedElement.element.next(), "result");
    } else {
       focusElement($("div.result").not('.ad').first(), "result");
    }
}
