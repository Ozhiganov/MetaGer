$(function() {
  setLabelText();
  setKeyListeners();
  setDropdownListeners();
});

/**
 * Sets all action listeners for this page
 */
function setKeyListeners() {
  $(document).keydown(function(event) {
    if ($("input#show-create-focus").is(":checked")) {
      if (event.keyCode == 27) {
        $("input#show-create-focus").prop("checked", false);
      } else if (event.keyCode == 13) {
        $("#customSearchForm").submit();
      }
    }
  });
}

function setDropdownListeners() {
  // Listener for 'Open/Collapse all' label
  $("input:checkbox#toggle-dropdowns").change(function() {
    if ($(this).is(":checked")) {
      // Open all dropdowns
      $(".focus-dropdown-toggle").prop("checked", true);
    } else {
      // Close all dropdowns
      $(".focus-dropdown-toggle").prop("checked", false);
    }
    setLabelText();
  });
  // Change 'Open/Collapse' all when single dropdown is changed
  $(".focus-dropdown-toggle").change(function() {
    var expanded = false;
    $(".focus-dropdown-toggle").each(function() {
      if ($(this).is(":checked")) {
        expanded = true;
      }
    });
    if (expanded === true) {
      $("input:checkbox#toggle-dropdowns").prop("checked", true);
    } else {
      $("input:checkbox#toggle-dropdowns").prop("checked", false);
    }
    setLabelText();
  });
}

//
// Adjusts the 'Open/Colapse all' label
function setLabelText() {
  if ($("input:checkbox#toggle-dropdowns").is(":checked")) {
    $("#toggle-dropdowns-label").html(
      t("close-dropdowns") +
        ' <i class="fa fa-minus-square" aria-hidden="true"></i>'
    );
  } else {
    $("#toggle-dropdowns-label").html(
      t("open-dropdowns") +
        ' <i class="fa fa-plus-square" aria-hidden="true"></i>'
    );
  }
}
