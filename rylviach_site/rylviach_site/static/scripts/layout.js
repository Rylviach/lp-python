//
// Populate feeds
//



//
// Make the navigation dropdown for mobile
//
$(document).ready(function() {
    // Build dropdown
    $("<select />").appendTo(".navigation nav div div");

    // Add dummy option
    $("<option />", {
        "selected": "selected",
        "value": "",
        "text": "Go to..."
    }).appendTo("nav select");

    // Populate dropdown from nav
    $(".navigation nav li a").each(function() {
        var el = $(this);
        $("<option />", {
            "value": el.attr("href"),
            "text": el.text()
        }).appendTo("nav select");
    });

    // Make dropdown functional
    $("nav select").change(function () {
        window.location = $(this).find("option:selected").val();
    });
});
