var tablist = [];
var mainIndex = -1;
var index = -1;
$(document).ready(function () {
    $("[data-tabtargets]").each(function (index, el) {
        $(el).focusin(function () {
            console.log("bind");
            $(el).on('keydown.enter', function (e) {
                if (e.which == 13) {
                    e.preventDefault();
                    tablist = $($(el).attr("data-tabtargets"));
                    index = -1;
                    console.log("test");
                    // Simulate Tab Keypress
                    var tmp = jQuery.Event("keydown");
                    tmp.which = 9;
                    $(el).trigger(tmp);
                }
            })
        });
        $(el).focusout(function () {
            $(el).blur();
            console.log("unbind");
            $(el).unbind("keydown.enter");
        });
    });

    /* Capture tab keypress and add actions */
    $("html").on('keydown', function (e) {
        if (e.which == 9 && tablist.length > (index + 1)) {
            e.preventDefault();
            $(tablist[index]).blur();
            index++;
            $(tablist[index]).focus();
            $(tablist[index]).blur();
        } else if (e.which == 9) {
            e.preventDefault();
            var el = $("#tab-navigator > a")[mainIndex];
            var itemCount = $("#tab-navigator > a").length;
            if (typeof el != "undefined") {
                $(el).blur();
                $(el).css("display", "none");
            }
            mainIndex++;
            if (mainIndex >= itemCount) {
                mainIndex = 0;
            }
            el = $("#tab-navigator > a")[mainIndex];
            $(el).css("display", "block");
            $(el).focus();

        }
    });

});

