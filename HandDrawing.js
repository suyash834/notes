$('#canvas-draw').remove();
$('#clear-area').remove();
$('#close-area').remove();
/* Create canvas element to the current DOM. */   
var canvas = document.createElement('canvas');
canvas.id = 'canvas-draw';
/* Creates div element to the current DOM. */
var div = document.createElement('div');
div.id = 'clear-area';
/* Creates button element to the current DOM. */
var button = document.createElement('button');
button.id = 'close-area';

// adds the canvas to the body element
document.body.appendChild(canvas);

// The getContext() method returns an object(ctx) that provides methods and properties for drawing on the canvas
var ctx = canvas.getContext('2d');

var sketch = document.querySelector('body');

/* getComputedStyle is used to read the actual property after CSS and styles are applied */
var sketch_style = getComputedStyle(sketch);

/* parseInt() function parses a string and returns an integer. */
canvas.width = parseInt(sketch_style.getPropertyValue('width'));
canvas.height = parseInt(sketch_style.getPropertyValue('height'));

// Initialising the position of the mouse with x and y axis coordinates.
var mouse = {x: 0, y: 0};

/* Mouse Capturing Work */
canvas.addEventListener('mousemove', function(e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
}, false);

/* Drawing on Paint App */
ctx.lineWidth = 3;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = 'red';

/* The beginPath() method begins a path, or resets the current path.
 * The moveTo() method moves the path to the specified point in the canvas, without creating a line. */
canvas.addEventListener('mousedown', function(e) {
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);

    canvas.addEventListener('mousemove', onPaint, false);
}, false);

canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
    canvas.removeEventListener('mousedown', onPaint, false);
}, false);
/**
* The lineTo() method adds a new point and creates a line from that point to the last specified point in the canvas
* The stroke() method actually draws the path you have defined with all those moveTo() and lineTo() methods.
* @access private
* @memberof HandDrawing
*/
var onPaint = function() {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
};
//appending close button
document.body.appendChild(button);
//appending clear element
document.body.appendChild(div);
/* Event to clear the canvas */
document.getElementById('clear-area').addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}, false);
/* Event to remove the canvas and other appended elements */
document.getElementById('close-area').addEventListener('click', function() {
    document.body.removeChild(button);
    document.body.removeChild(div);
    document.body.removeChild(canvas);

}, false);


