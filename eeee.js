/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
      var newURL = "javascript:(function(){    var newURL = prompt("Enter the URL to go to:");    if(newURL) {        window.location.href = newURL;    }})();"; // Predefined URL
      window.location.href = newURL;
  }
});
