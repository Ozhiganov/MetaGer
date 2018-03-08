$(function () {
  setLabelText();
  setKeyListeners();
  setDropdownListener();
});

/**
 * Sets all action listeners for this page
 */
function setKeyListeners () {
  $(document).keydown(function(event) {
    if ($("input#show-create-focus").is(':checked')) {
      if (event.keyCode == 27) {
        $("input#show-create-focus").prop('checked', false);
      } else if (event.keyCode == 13) {
        $('#customSearchForm').submit();
      }
    }
  });
}

function setDropdownListener() {
  $('input:checkbox#toggle-dropdowns').change(
    function() {
      if($(this).is(':checked')) {
        $("#toggle-dropdowns-label").html(t('close-dropdowns'));
        $(".focus-dropdown-toggle").prop('checked', true);
      } else {
        $("#toggle-dropdowns-label").html(t('open-dropdowns'));
        $(".focus-dropdown-toggle").prop('checked', false);
      }
    }
  )
}

function setLabelText() {
  if($('input:checkbox#toggle-dropdowns').is(':checked')) {
    $("#toggle-dropdowns-label").html(t('close-dropdowns'));
  } else {
    $("#toggle-dropdowns-label").html(t('open-dropdowns'));
  }
}

