const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.backgroundColor = "rgb(25, 0, 25)";

function drawBox() {
  ctx.fillStyle = "rgba(255, 255, 255, .10)";
  ctx.beginPath();
  ctx.roundRect(8, 8, 100, 100, 15);
  ctx.fill();
}
drawBox();
