/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
    window.location.href = 'javascript:(function() {
    var style = document.createElement('style');
    style.innerHTML = `
        .draggable-window {
            position: absolute;
            top: 50px;
            left: 50px;
            width: 200px;
            height: 150px;
            background: white;
            border: 1px solid black;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
            z-index: 1000;
            cursor: move;
        }
        .draggable-window .close-button {
            position: absolute;
            top: 5px;
            right: 5px;
            width: 20px;
            height: 20px;
            background: red;
            color: white;
            text-align: center;
            line-height: 20px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);

    var div = document.createElement('div');
    div.className = 'draggable-window';
    div.innerHTML = '<div class="close-button">X</div><p>Drag me around!</p>';
    document.body.appendChild(div);

    var isDragging = false;
    var offsetX, offsetY;

    div.onmousedown = function(e) {
        isDragging = true;
        offsetX = e.clientX - div.getBoundingClientRect().left;
        offsetY = e.clientY - div.getBoundingClientRect().top;
        document.onmousemove = function(e) {
            if (isDragging) {
                div.style.left = (e.clientX - offsetX) + 'px';
                div.style.top = (e.clientY - offsetY) + 'px';
            }
        };
        document.onmouseup = function() {
            isDragging = false;
        };
    };

    div.querySelector('.close-button').onclick = function() {
        document.body.removeChild(div);
    };
})();
';
  }
});
