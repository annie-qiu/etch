const DEFAULT_COLOR = '#000000';
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = 'black';

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;


var rainbowColors = ['#e71d43', '#ff0000', '#ff3700', '#ff6e00', '#ffa500', '#ffc300',
  '#ffe100', '#ffff00', '#aad500', '#55aa00', '#008000', '#005555', '#002baa', '#0000ff',
   '#3200ac', '#4b0082', '#812ba6', '#b857ca', '#d03a87'];

function changeColor(e) {
  if (currentMode == 'rainbow') {
    currentColor = getRainbow();
  }
  if (currentMode == 'eraser') {
    currentColor = '#FFFFFF';
  }
  if (currentMode == 'black') {
    currentColor = '#000000';
  }
  e.target.style.backgroundColor = currentColor;
}

function createDivs(n) {
  var c = document.querySelector('.container');
  for (var i = 0; i < n; i++) {
    var row = document.createElement("div");
    row.className = "row";
    for (var j = 0; j < n; j++) {
        var square = document.createElement("div");
        square.className = "square";
        row.append(square);
    }
    c.appendChild(row);
  }
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener("mouseover", changeColor)
  });
}

function reloadGrid() {
  clearGrid();
  createDivs(currentSize)
}

function clearGrid() {
  grid.innerHTML = "";
}

function getRainbow() {
  return rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
}

function rainbow() {
  currentMode = 'rainbow';
}

function black() {
  currentMode = 'black';
}

function eraser() {
  currentMode = 'eraser';
}

document.addEventListener('DOMContentLoaded', createDivs(currentSize));

const clearBtn = document.querySelector('.clear');
const rgbBtn = document.querySelector('.rainbow');
const eraserBtn = document.querySelector('.eraser');
const blackBtn = document.querySelector('.black');
const newBtn = document.querySelector('.new');
const slider = document.querySelector('.slider');
const sliderValue = document.getElementById("sliderValue");
const grid = document.querySelector('.container');

slider.oninput = function() {
  sliderValue.innerHTML = `${this.value} x ${this.value}`;
  currentSize = this.value;
  reloadGrid();
}

clearBtn.addEventListener("click", reloadGrid);
blackBtn.addEventListener("click", black);
rgbBtn.addEventListener("click", rainbow);
eraserBtn.addEventListener("click", eraser);
