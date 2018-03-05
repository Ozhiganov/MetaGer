$(function () {
  setFocusCreatorActionListeners();
});

/**
 * Sets all action listeners for this page
 */
function setFocusCreatorActionListeners () {
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

