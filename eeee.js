window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) { // 192 is the key code for backtick `
      var newURL = prompt("Enter the URL to go to:");
      if (newURL) {
          window.location.href = newURL;
      }
  }
});
