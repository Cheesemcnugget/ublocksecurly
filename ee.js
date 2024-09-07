/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
    const link = document.createElement("a");
    link.textContent = "Click me";
    link.href = "#";
    document.body.appendChild(link);
    link.addEventListener("click", () => link.remove());
  }
});
