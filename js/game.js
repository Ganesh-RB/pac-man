const gameBoard = document.getElementById("gameBoard");
const scoreBoard = document.getElementById("scoreBoard");
const fullscreenTogglerButton = document.getElementById("fullscreenToggler");
const SPEED = 4; // 4 unit per sec

gameInit(gameBoard);

const main = () => {
  update();
  draw();
}

const gameLoop = setInterval(main, 1000 / SPEED);

const update = () => {
  updatePacman();
  updateLayout(gameBoard);
}

const draw = () => {
  drawPacman(gameBoard);
}

fullscreenTogglerButton.addEventListener("click", toggleFullscreen);

