const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.backgroundColor = "rgb(25, 0, 25)";

let rectSize = 50;
let gap = 3;

function drawBox(x, y) {
  ctx.fillStyle = "rgba(255, 255, 255, .40)";
  ctx.beginPath();
  ctx.roundRect(x, y, rectSize, rectSize, 10);
  ctx.fill();
}

const numberOfCols = Math.floor(innerWidth / (rectSize + gap));
const numberOfRows = Math.floor(innerHeight / (rectSize + gap));
const offsetX = (innerWidth - numberOfCols * (rectSize + gap)) / 2;
const offsetY = (innerHeight - numberOfRows * (rectSize + gap)) / 2;

for (let rows = 0; rows < numberOfRows; rows++) {
  for (let cols = 0; cols < numberOfCols; cols++) {
    drawBox(
      offsetX + cols * (rectSize + gap),
      offsetY + rows * (rectSize + gap),
    );
  }
}
