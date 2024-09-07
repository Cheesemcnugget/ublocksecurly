/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
    // Create a link element
    const link = document.createElement("a");
    link.textContent = "Click me";
    link.href = "#";
    link.style.position = "fixed";
    link.style.top = "10px";
    link.style.left = "10px";
    link.style.backgroundColor = "lightblue";
    link.style.padding = "10px";
    link.style.zIndex = "1000";
    link.style.textDecoration = "none";
    link.style.color = "black";
    
    // Add the link to the body
    document.body.appendChild(link);
    
    // Add a click event to remove the link after it is clicked
    link.addEventListener("click", () => {
      link.remove();
    });
  }
});
