// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/events/events.html", {
        init: function (element, options) {
            var events = [
                {
                    name: "Building a Universal Windows 10 App",
                    date: "7/14/2015",
                    time: "6:00 PM",
                    location: "MVCC Room IT 128",
                    description: "A quick, hands-on introduction to Microsoft's Windows 10 Universal App architecture with Visual Studio 2015.",
                    sponsor: "Covey Computer Software"
                },
                {
                    name: "REACTing to the New Web",
                    date: "8/18/2015",
                    time: "6:00 PM",
                    location: "MVCC Room IT 128",
                    description: "An overview of using React.js to build web user interfaces. Detailed description to follow.",
                    sponsor: "Northern Safety"
                },
            ];

            WinJS.Namespace.define("MVSDG.Events", {
                eventsList: new WinJS.Binding.List(events)
            });

        },
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            var bar = element.querySelector("#eventsAppBar").winControl;

            //imperatively add a click handler for the add button
            var cmdAdd = bar.getCommandById("cmdAdd");
            cmdAdd.onclick = function (e) {
                MVSDG.Events.eventsList.push(WinJS.Binding.as({
                    name: "Mastering the WinJS List Control",
                    date: "7/14/2015",
                    time: "7:00 PM",
                    location: "MVCC Room IT 128",
                    description: "Advanced List Control scripting.",
                    sponsor: "ABC Company"
                }));
            };

            //imperatively add a click handler for the add button
            var cmdAdd = bar.getCommandById("cmdEdit");
            cmdAdd.onclick = function (e) {
                Windows.UI.Popups.MessageDialog("Edit command triggered").showAsync();
            };

            //expose a function to the declaration page
            //WinJS.Namespace.define("Events", {
            //    remove: WinJS.Utilities.markSupportedForProcessing(function (e) {
            //        Windows.UI.Popups.MessageDialog("remove").showAsync();
            //    })
            //});
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        }
    });

})();
