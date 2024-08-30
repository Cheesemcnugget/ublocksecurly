document.addEventListener("keydown", function (e) {
    if (e.key === "~" && e.ctrlKey) {
        console.log("Shortcut key pressed");

        // Create a new popup window with a simple message
        var popupWindow = window.open("", "_blank", "width=400,height=200");
        if (!popupWindow) {
            console.error("Popup blocked or failed to open.");
            return;
        }

        // Write content to the popup window
        popupWindow.document.write("<h1>Hello, World!</h1>");
        popupWindow.document.title = "Simple Popup";
    }
});
