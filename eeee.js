// execute_script.js
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === '`') { // ` is the key code for ~
        window.open('https://example.com', '_blank'); // Replace with your URL
    }
});
