var ctrlInfo = false;

$('label').on('keydown', function(e) {
    if(e.keyCode == '13') {
        $(this).click();
    }
}); 

$(document).on('keydown', function(e) {
    e = e || window.event;
    if(!ctrlInfo && e.keyCode == '9') {
        focusInfoBox();
        e.preventDefault();
        ctrlInfo = true;
    } else if(e.keyCode == '27') {
        escKeyPressed();
    }
});

function escKeyPressed() {
    focusInfoBox();
}

function focusInfoBox() {
    $("#keyboard-nav-info").show();
    $("#keyboard-nav-info a").first().focus();
}

function jumpToResults() {

}

function jumpToSettings() {
    
}

function jumpToNavigation() {
    
}
/*
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




// Focuses passed element and sets currentFocusedElement object


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
        console.log(currentFocusedElement.element.html());
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
        } 
    } else if(currentFocusedElement.type === "result") {
        focusElement($(":focus").find("a").first(), "link")
    } else if(currentFocusedElement.type === "link" || "infobox") {
        window.location = currentFocusedElement.element.attr('href');
    } else if(currentFocusedElement.type === "input") {
        $("#searchForm").submit();
    }
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

*/