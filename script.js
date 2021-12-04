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
    square.addEventListener("mouseover", () => {
      square.classList.add("hover");
    }, false);
  });
}

function clearGrid() {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.classList.remove("hover");
  })
}

document.addEventListener('DOMContentLoaded', createDivs(16));

const clear = document.querySelector('.clear');
const slider = document.querySelector('.slider');
const sliderValue = document.getElementById("sliderValue");
sliderValue.innerHTML = slider.value;

clear.addEventListener("click", clearGrid);
slider.oninput = function() {
  sliderValue.innerHTML = this.value;
  clearGrid();
  createDivs(sliderValue);
}
