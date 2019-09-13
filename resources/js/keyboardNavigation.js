/**
 * Flag ctrlInfo is used for initial display of the navigation box
 */
var ctrlInfo = false;

$(document).ready(function () {
    // Add entry point for tabbing to the first result
    $('.result, .ad').first().attr("id", "results-entry");
    // Initially focus the searchbar
    $('div.search-input input').focus();
});

/**
 * Simulate a click on enter keypress when focused on labels
 */
$('label').on('keydown', function(e) {
    if(e.keyCode == '13') {
        $(this).click();
        $('a', this)
    }
}); 

/**
 * Handles tab keypress and escape keypress
 */
$(document).on('keydown', function(e) {
    e = e || window.event;
    // On first tab keypress there is special behaviour and the ctrlInfo flag is set
    if(!ctrlInfo && e.keyCode == '9') {
        focusNavBox();
        e.preventDefault();
        ctrlInfo = true;
    } else if(e.keyCode == '27') {
        escKeyPressed();
    }
});

/**
 * Shows the navigation box and focuses the first <a> tag 
 */
function focusNavBox() {
    $('#keyboard-nav-info').show();
    $('#keyboard-nav-info a').first().focus();
}

/**
 * Focuses the navigation box and unchecks all checkboxes
 */
function escKeyPressed() {
    focusNavBox();
    $('input[type="checkbox"]').removeAttr('checked');
}

/**
 * Focuses the first <a> tag of the first result 
 */
function focusResults() {
    $('#results-entry .result-title a').focus();
}

/**
 * Focuses the first <a> tag of the focus options
 */
function focusFoki() {
    $('#foki a').first().focus();
}

/**
 * Focuses the search settings
 */
function focusSettings() {
    $('#settings a').focus();
}

/**
 * Focuses the first <tag> of the sidebar
 */
function focusNavigation() {
    $('#sidebarToggle').prop('checked', true);
    $('.sidebar-list a').first().focus();
}