var ctrlInfo = false;       // Flag used for checking if the user was shown the keyboard control information
var currentResultIndex = 1; // stores index of result which was focused last
var currentElementData = {      // Object used for storing currently focused element and element type (e.g. anchor tag or result div)
    element: $("div.result").first(), 
    selector: "div.result",
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

function setFocus(e, selector, type) {
    currentElementData.element = e;
    currentElementData.selector = selector;
    currentElementData.type = type;
    currentElementData.element.focus();
    console.log(currentElementData);
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
    if(currentElementData.type = "result") {
        // setFocus(currentElementData.element, "link")
    } 
}

function showInfoBox() {
    $("#keyboard-ctrl-info").show();
    setFocus($("#keyboard-ctrl-info"), "#keyboard-ctrl-info", "infobox");
}

function focusNextElement() {
    if(currentElementData.type === "result") {
        focusNextResult();
    } else {
       setFocus($("div.result").not('.ad').first(), "div.result" , "result");
    }
}


function focusNextResult() {
   if(currentElementData.element.next().length > 0) {
        setFocus(currentElementData.element.next(), '' , "result");
    } else {
       setFocus($("div.result").not('.ad').first(), "div.result" , "result");
    }
}
