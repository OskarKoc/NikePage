window.addEventListener("load", () => {
  drawNike();
});
window.addEventListener("resize", () => {
  drawNike();
});

function drawNike() {
  
  var canvas = document.getElementById("canvas");

  canvas.height = 1600;
  canvas.width = 1600;
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(182.67, 4.61);
  ctx.bezierCurveTo(182.67, 5.94, 53.5, 235.5, 239.0, 249.0);
  ctx.bezierCurveTo(307.5, 252.0, 302.0, 247.33, 1186.67, 11.33);
  ctx.bezierCurveTo(1225.33, 1.33, 328.67, 386.67, 263.33, 404.0);
  ctx.bezierCurveTo(198.0, 421.33, -5.35, 470.26, 14.67, 269.94);
  ctx.bezierCurveTo(26.92, 146.19, 184.1, 11.75, 182.67, 4.61);

  ctx.stroke();
  ctx.fill();
}
