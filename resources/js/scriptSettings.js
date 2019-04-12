$(document).ready(function () {
    $("#filter-form").find("button[type=submit]").css("display", "none");
    $("#filter-form").find("select").on("change", function () {
        $("#filter-form").submit();
    });
    console.log("Test");
});