/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
    // Create a menu div
    const menu = document.createElement("div");
    menu.style.position = "fixed";
    menu.style.top = "20%";
    menu.style.left = "50%";
    menu.style.transform = "translate(-50%, -50%)";
    menu.style.padding = "10px";
    menu.style.backgroundColor = "#f0f0f0";
    menu.style.border = "1px solid #ccc";
    menu.style.zIndex = "9999";

    // Add URL links
    const links = [
      { text: "Google", url: "https://www.google.com" },
      { text: "YouTube", url: "https://www.youtube.com" },
      { text: "GitHub", url: "https://www.github.com" }
    ];

    links.forEach(link => {
      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.textContent = link.text;
      anchor.style.display = "block";
      anchor.style.marginBottom = "5px";
      anchor.style.color = "#007BFF";
      anchor.target = "_blank";
      menu.appendChild(anchor);
    });

    // Add close button
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.style.marginTop = "10px";
    closeButton.onclick = () => {
      document.body.removeChild(menu);
    };
    menu.appendChild(closeButton);

    // Append menu to body
    document.body.appendChild(menu);
  }
});
