/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
  let iframe = document.createElement('iframe');
iframe.src = 'https://www.bing.com';
iframe.style.position = 'fixed';
iframe.style.bottom = '0';
iframe.style.right = '0';
iframe.style.width = '300px';
iframe.style.height = '200px';
iframe.style.border = 'none';
document.body.appendChild(iframe);
  }
});
