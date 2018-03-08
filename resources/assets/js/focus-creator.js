$(function () {
  setLabelText();
  setKeyListeners();
  setDropdownListeners();
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

function setDropdownListeners() {
  $('input:checkbox#toggle-dropdowns').change(function() {
      if($(this).is(':checked')) {
        $("#toggle-dropdowns-label").html(t('close-dropdowns') + ' <i class="fa fa-minus-square" aria-hidden="true"></i>');
        $(".focus-dropdown-toggle").prop('checked', true);
      } else {
        $("#toggle-dropdowns-label").html(t('open-dropdowns') + ' <i class="fa fa-plus-square" aria-hidden="true"></i>');
        $(".focus-dropdown-toggle").prop('checked', false);
      }
  });
  $(".focus-dropdown-toggle").change(function() {

  });
}

function setLabelText() {
  if($('input:checkbox#toggle-dropdowns').is(':checked')) {
    $("#toggle-dropdowns-label").html(t('close-dropdowns') + ' <i class="fa fa-minus-square" aria-hidden="true"></i>');
  } else {
    $("#toggle-dropdowns-label").html(t('open-dropdowns') + ' <i class="fa fa-plus-square" aria-hidden="true"></i>');
  }
}

