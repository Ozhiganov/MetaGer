$(document).ready(function() {
    // Wenn LocalStorage verfügbar ist, geben wir die Möglichkeit die Einstellungen dort zu speichern
    tickOptions();
    if (localStorage) {
        $("#save").removeClass("hidden");
        if (localStorage.getItem("pers")) {
            $("#reset").removeClass("hidden");
        }
        $("#save").click(function() {
            resetOptions();
            localStorage.setItem("pers", true);
            $("input[type=checkbox]:checked, input[type=hidden]").each(function(el) {
                localStorage.setItem($(this).attr("name"), $(this).val());
            });
            $("select").each(function(el) {
                localStorage.setItem($(this).attr("name"), $(this).val());
            });
            document.location.href = $("#save").attr("data-href");
        });
        $("#reset").click(function() {
            resetOptions();
            document.location.href = $("#save").attr("data-href");
        });
    }
    $(".checker").click(function() {
        var selector = "." + $(this).attr("data-type");
        if ($(selector + " input:checked").length) {
            $(selector + " input").prop("checked", false);
        } else {
            $(selector + " input").prop("checked", true);
        }
    });
    $(".allUnchecker").click(function() {
        $(".focusCheckbox").prop("checked", false);
    });
    $("#unten").click(function() {
        $("#settings-form").append("<input type=\"hidden\" name=\"usage\" value=\"once\">");
        if (isEnglish()) {
            alert("On the following startpage your settings are saved one-time. They will be lost after your first search. Though if you want to save them, you can create a bookmark for the generated startpage.");
        } else {
            alert("Auf der folgenden Startseite sind Ihre Einstellungen nun einmalig gespeichert. Nach Ihrer ersten Suche sind diese wieder verloren. Wenn Sie diese speichern möchten, können Sie sich allerdings ein Lesezeichnen für die generierte Startseite einrichten.");
        }
    });
    $("#plugin").click(function() {
        $("form").attr('action', $("#save").attr("data-href") + '#plugin-modal');
        if (isEnglish()) {
            alert("Your browser plugin with personal settings was generated. Please follow the instructions on the following page to install it. Notice that beforehand you might have to delete a former MetaGer plugin.");
        } else {
            alert("Ihr Browserplugin mit den persönlichen Sucheinstellungen wurde generiert. Folgen Sie bitte der Anleitung auf der folgenden Seite um es zu installieren. Beachten Sie: Zuvor sollten Sie ein eventuell bereits installiertes MetaGer-Plugin entfernen.");
        }
    });
});

function tickOptions() {
    if (localStorage && localStorage.getItem("pers")) {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            if (key.startsWith("param_")) {
                if ($("input[name=" + key + "]").length) {
                    $("input[name=" + key + "]").attr("checked", "");
                } else {
                    $("select[name=" + key + "] > option[value=" + value + "]").attr("selected", true);
                }
            }
        }
    } else {
        $("div.web input").attr("checked", true);
    }
}

function resetOptions() {
    localStorage.removeItem("pers");
    var keys = [];
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i)
        keys.push(key);
    }
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (key.startsWith("param_" || key.startsWith("focus"))) {
            localStorage.removeItem(key);
        }
    }
}

function isEnglish() {
    if (window.location.href.indexOf('/en/') == -1) {
        return false;
    } else {
        return true;
    }
}