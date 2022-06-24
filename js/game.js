var gameBoard = document.getElementById("gameBoard");
const SPEED = 1; // 5 unit per sec

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

const fullscreenTogglerButton = document.getElementById("fullscreenToggler");
fullscreenTogglerButton.addEventListener("click", toggleFullscreen);

const scoreBoard = document.getElementById("scoreBoard");
