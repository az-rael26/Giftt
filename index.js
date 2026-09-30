$(document).ready(function() {
    var envelope = $("#envelope");
    var toggleButton = $("#open");

    toggleButton.click(function() {
        if (envelope.hasClass("close")) {
            envelope.addClass("open").removeClass("close");
            toggleButton.text("Close");
        } else {
            envelope.addClass("close").removeClass("open");
            toggleButton.text("Open");
        }
    });
});
