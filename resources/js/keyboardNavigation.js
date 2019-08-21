var ctrlInfo = false;       // Flag used for checking if the user was shown the keyboard control information
var currentResultIndex = 1; // stores index of result which was focused last
var currentFocusedElement = {      // Object used for storing currently focused element and element type (e.g. anchor tag or result div)
    element: $("div.search-input input"), 
    type: "input",
    mode: "results"
};

$(document).ready(function () {
    $('[data-index="1"').attr("id", "results-entry");
    focusElement($("div.search-input input"), "input");
});


$(document).on('keydown', function(e) {
    e = e || window.event;
    // Check for TAB keypress
    if (e.keyCode == '9') {
        if(e.shiftKey) {
            // Add logic for reverse tabbing
        } else {
            tabKeyPressed();
            e.preventDefault();
        }
        // Check for ENTER keypress
    } else if (e.keyCode == '13') {
        enterKeyPressed();
        e.preventDefault();
    // Check for ESC keypress
    } else if(e.keyCode == '27') {
        escKeyPressed();
    }
});

function focusElement(e, type) {
    currentFocusedElement.element = e;
    currentFocusedElement.type = (type !== undefined ?  type : currentFocusedElement.type);
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
    if(currentFocusedElement.type === "infobox") {
        focusElement($(currentFocusedElement.element.attr('href')), "result");
        /* switch(currentFocusedElement.element.attr('id')) {
            case 'results-nav':
                console.log(currentFocusedElement.element.attr('id'));
                break;
            case 'settings-nav':
                console.log(currentFocusedElement.element.attr('id'));
                break;
            case 'site-nav':
                console.log(currentFocusedElement.element.attr('id'));
                break;
            default:
                console.log(currentFocusedElement.element.attr('id'));
        } */
    } else if(currentFocusedElement.type === "result") {
        focusElement($(":focus").find("a").first(), "link")
    } else if(currentFocusedElement.type === "link" || "infobox") {
        window.location = currentFocusedElement.element.attr('href');
    } else if(currentFocusedElement.type === "input") {
        $("#searchForm").submit();
    }
}

function escKeyPressed() {
    if(currentFocusedElement.type === "link") {
        focusElement(currentFocusedElement.element.parents(".result"), "result");
    }
}

function showInfoBox() {
    $("#keyboard-nav-info").show();
    focusElement($("#keyboard-nav-info a").first(), "infobox");
}

function focusNextElement() {
    if(currentFocusedElement.type === "infobox") {
        rotateInfoBoxLinks();
    } else if(currentFocusedElement.type === "result") {
        focusNextResult();
    } else if (currentFocusedElement.type === "link") { 
        focusNextLink();
    } else {
       focusElement($("div.result").not('.ad').first(), "result");
    }
}

function focusNextResult() {
   if(currentFocusedElement.element.next().length > 0) {
        focusElement(currentFocusedElement.element.next(), "result");
    } else {
       focusElement($("div.search-input input"), "input");
    }
}

function focusNextLink() {
    console.log(currentFocusedElement.element.closest('a'));
}

function rotateInfoBoxLinks() {
    switch(currentFocusedElement.element.attr('id')) {
        case 'results-nav':
            focusElement($('#settings-nav'), 'infobox');
            break;
        case 'settings-nav':
                focusElement($('#site-nav'), 'infobox');
            break;
        case 'site-nav':
                focusElement($('#results-nav'), 'infobox');
            break;
        default:
            focusElement($('#results-nav'), 'infobox');
    }
}