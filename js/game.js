var gameBoard = document.getElementById("gameBoard");
const SPEED = 4; // 4 unit per sec

const main = () => {
  update();
  draw();
}

const gameLoop = setInterval(main, 1000 / SPEED);

const update = () => {
  updatePacman();
}

const draw = () => {
  gameBoard.innerHTML = "";
  drawPacman(gameBoard);
}

const fullscreenTogglerButton = document.getElementById("fullscreenToggler");
fullscreenTogglerButton.addEventListener("click", toggleFullscreen);  

const scoreBoard = document.getElementById("scoreBoard");
