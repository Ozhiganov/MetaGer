var ctrlInfo = false;       // Flag used for checking if the user was shown the keyboard control information
var currentResultIndex = 1; // stores index of result which was focused last
var currentElementData = {      // Object used for storing currently focused element and element type (e.g. anchor tag or result div)
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

function setFocus(e, type) {
    currentElementData.element = e;
    currentElementData.type = type;
    console.log(currentElementData);
    currentElementData.element.focus();
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
    if(currentElementData.type === "result") {
        console.log($(":focus").find("a").first());
        setFocus($(":focus").find("a").first(), "link")
    } else if(currentElementData.type === "link") {
        window.location = currentElementData.element.attr('href');
    }
}

function showInfoBox() {
    $("#keyboard-ctrl-info").show();
    setFocus($("#keyboard-ctrl-info"), "infobox");
}

function focusNextElement() {
    if(currentElementData.type === "result") {
        focusNextResult();
    } else {
       setFocus($("div.result").not('.ad').first(), "result");
    }
}

function focusNextResult() {
   if(currentElementData.element.next().length > 0) {
        setFocus(currentElementData.element.next(), "result");
    } else {
       setFocus($("div.result").not('.ad').first(), "result");
    }
}
