var ctrlInfo = false;       // Flag used for checking if the user was shown the keyboard control information

$(document).ready(function () {
    $('[data-index="1"').attr("id", "results-entry");
    $('#foki a').first().attr("id", "settings-entry");
    $('div.search-input input').focus();
});

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
    $('input[type="checkbox"]').removeAttr('checked');
}

function focusInfoBox() {
    $('#keyboard-nav-info').show();
    $('#keyboard-nav-info a').first().focus();
}

function focusResults() {
    $('#results-entry .result-title a').focus();
}

function focusSettings() {
    $('#foki a').first().focus();
}

function focusNavigation() {
    $('#sidebarToggle').prop('checked', true);
    $('.sidebar-list a').first().focus();
}