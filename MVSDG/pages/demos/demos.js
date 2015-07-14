// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/demos/demos.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        }
    });

    WinJS.Namespace.define("Demos", {
        changeRating: changeRating,
        toggleWifi: toggleWifi
    });

    function changeRating(ev) {
        var obj = ev.target.winControl;
        if (obj) {
            output("ratingsMessage", "Rating changed. User rating: " + obj.userRating + "<br/>");
            if (obj.userRating !== 0) {
                // put your code here to save user rating and re-calculate average rating.
            } else {
                // put your code here to delete user rating.
            }
        }
    }

    function toggleWifi(ev) {
        var obj = ev.target.winControl;
        output("toggleMessage", "Wifi toggled. Current status: " + (obj.checked ? "on" : "off"));
    }

    function output(e, m) {
        document.getElementById(e).innerHTML = m;
    }

    // To protect against untrusted code execution, all functions are required to be 
    // marked as supported for processing before they can be used inside a data-win-options attribute in HTML markup.
    WinJS.Utilities.markSupportedForProcessing(changeRating);
    WinJS.Utilities.markSupportedForProcessing(toggleWifi);

})();
