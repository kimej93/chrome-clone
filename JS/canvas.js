const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const LineWidth = document.getElementById("line-width");
const colorChange = document.getElementById("color-change");
const colorOption = Array.from(
  document.getElementsByClassName("colors-option")
);
const modeBtn = document.getElementById("mode-btn");
const modeBtnIcon = document.querySelector("#mode-btn i");
const destoryBtn = document.getElementById("destory-btn");
const eraserBtn = document.getElementById("eraser-btn");

const CANVAS_WIDTH = 300;
const CANVAS_HEIGHT = 500;

const DRIP = "fa-fill-drip";
const PAINT = "fa-paintbrush";

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = LineWidth.value;

let isPainting = false;
let isFill = false;

function mouseMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isPainting = true;
}

function finishedPainting() {
  isPainting = false;
}

function onLineWidthChange(event) {
  console.log(event.target.value);
  ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function onColorOptionChange(event) {
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  colorChange.value = colorValue;
}

function onModeClick() {
  if (isFill) {
    isFill = false;
    modeBtnIcon.classList.remove(DRIP);
    modeBtnIcon.classList.add(PAINT);
  } else {
    isFill = true;
    modeBtnIcon.classList.remove(PAINT);
    modeBtnIcon.classList.add(DRIP);
  }
}

function onCanvasClick() {
  if (isFill) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

function onDestoryClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEraserClick() {
  ctx.strokeStyle = "white";
  isFill = false;
  modeBtnIcon.classList.remove(DRIP);
  modeBtnIcon.classList.add(PAINT);
}

canvas.addEventListener("mousemove", mouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", finishedPainting);
canvas.addEventListener("mouseleave", finishedPainting);
canvas.addEventListener("click", onCanvasClick);

LineWidth.addEventListener("change", onLineWidthChange);

colorChange.addEventListener("change", onColorChange);

colorOption.forEach((color) =>
  color.addEventListener("click", onColorOptionChange)
);

modeBtnIcon.addEventListener("click", onModeClick);
destoryBtn.addEventListener("click", onDestoryClick);
eraserBtn.addEventListener("click", onEraserClick);
