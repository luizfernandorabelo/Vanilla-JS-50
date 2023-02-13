const MAX_SIZE = 30;
const MIN_SIZE = 1;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const sizeElement = document.getElementById('size');
const colorElement = document.getElementById('color');

let x = 0, y = 0;
let mouseIsPressed = false;
let currentSize = parseInt(sizeElement.innerText);
let currentColor = colorElement.innerText;

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, currentSize, 0, Math.PI * 2);
  ctx.fillStyle = currentColor;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = currentColor;
  ctx.lineWidth = currentSize * 2;
  ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
  mouseIsPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
  mouseIsPressed = false;
});

canvas.addEventListener('mousemove', (e) => {
  if (mouseIsPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2; y = y2;
  }
});

colorElement.addEventListener('change', (e) => {
  currentColor = e.target.value;
});

document.querySelector('#increase').addEventListener('click', () => {
  currentSize = currentSize < MAX_SIZE ? currentSize + 1 : currentSize;
  sizeElement.innerText = currentSize;
});

document.querySelector('#decrease').addEventListener('click', () => {
  currentSize = currentSize > MIN_SIZE ? currentSize - 1 : currentSize;
  sizeElement.innerText = currentSize;
});

document.querySelector('#clear').addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height); 
});
