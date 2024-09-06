window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
      var newURL = "https://www.example.com"; // Predefined URL
      window.location.href = newURL;
  }
});
