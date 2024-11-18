/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
let div = document.createElement('div');
div.innerText = 'hi';
div.style.position = 'fixed';
div.style.bottom = '0';
div.style.right = '0';
div.style.backgroundColor = 'white';
div.style.padding = '10px';
div.style.border = '1px solid black';
document.body.appendChild(div);

  }
});
