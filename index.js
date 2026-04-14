const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.backgroundColor = "rgb(25, 0, 25)";

let rectSize = 80;
let gap = 5;

function drawBox(x, y) {
  ctx.fillStyle = "rgba(255, 255, 255, .40)";
  ctx.beginPath();
  ctx.roundRect(x, y, rectSize, rectSize, 15);
  ctx.fill();
}

for (let rows = 0; rows < Math.floor(innerHeight / (rectSize + gap)); rows++) {
  for (let cols = 0; cols < Math.floor(innerWidth / (rectSize + gap)); cols++) {
    drawBox(gap + cols * (rectSize + gap), gap + rows * (rectSize + gap));
  }
}
