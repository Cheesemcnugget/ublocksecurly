document.addEventListener("keydown", function (e) {
    if (e.key === "~" && e.ctrlKey) {
        console.log("Shortcut key pressed");

        // Create a new popup window
        var t = window.open("", "_blank", "width=500,height=300");
        if (!t) {
            console.error("Popup blocked or failed to open.");
            return;
        }

        // Create an iframe element
        var iframe = t.document.createElement("iframe");
        iframe.src = "https://inglan2.github.io/uRun/popup.html";
        iframe.style.cssText = "width:100%; height:100%; border:none;";
        t.document.body.appendChild(iframe);
        t.document.title = "uRun";

        // Listen for messages from the iframe
        t.addEventListener("message", function (e) {
            console.log("Message received:", e.data);
            if (typeof e.data === "string" && e.data.startsWith("execute:")) {
                try {
                    eval(e.data.replace("execute:", ""));
                    console.log("Code executed successfully");
                } catch (err) {
                    console.error("Error executing code:", err);
                } finally {
                    t.close();
                }
            }
        });
    }
});
