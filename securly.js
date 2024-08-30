document.addEventListener("keydown", function (e) {
    if (e.key == "~" && e.ctrlKey && e.shiftKey) {
        // Create an overlay container
        var overlay = document.createElement("div");
        overlay.style.cssText = `
            position: fixed;
            top: 10%;
            left: 50%;
            transform: translateX(-50%);
            width: 400px;
            height: 300px;
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            border-radius: 10px;
            padding: 20px;
            z-index: 10000;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        `;

        // Create a close button
        var closeButton = document.createElement("button");
        closeButton.textContent = "Close";
        closeButton.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: red;
            border: none;
            color: white;
            padding: 5px 10px;
            cursor: pointer;
        `;
        closeButton.addEventListener("click", function () {
            document.body.removeChild(overlay);
        });

        // Create a text area for code input
        var codeInput = document.createElement("textarea");
        codeInput.style.cssText = `
            width: 100%;
            height: 70%;
            background-color: #333;
            color: #fff;
            border: none;
            padding: 10px;
            border-radius: 5px;
            font-family: monospace;
        `;
        codeInput.placeholder = "Enter JavaScript code here...";

        // Create an execute button
        var executeButton = document.createElement("button");
        executeButton.textContent = "Execute";
        executeButton.style.cssText = `
            margin-top: 10px;
            background: green;
            border: none;
            color: white;
            padding: 10px;
            width: 100%;
            cursor: pointer;
            border-radius: 5px;
        `;
        executeButton.addEventListener("click", function () {
            try {
                eval(codeInput.value);
            } catch (error) {
                alert("Error: " + error.message);
            }
        });

        // Append elements to the overlay
        overlay.appendChild(closeButton);
        overlay.appendChild(codeInput);
        overlay.appendChild(executeButton);

        // Append overlay to the body
        document.body.appendChild(overlay);
    }
});
