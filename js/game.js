const bodyElement = document.querySelector("body");
const canvas = document.getElementById("canvas");
const SPEED = 4; // 4 unit per sec
var gameBoard, scoreBoard, fullscreenTogglerButton, gameLoop, screenHeight, screenWidth;

screenSizeInit();
drawStartScreen(bodyElement);

const startGame = setTimeout(() => {
  playGame();
}, 60000);


const main = () => {
  if (isPause() === false) {
    update();
    draw();
  }
}

const update = () => {
  updatePacman();
  updateLayout();
}

const draw = () => {
  drawScoreBoard(scoreBoard);
  drawPacman(gameBoard);
}

const getGameBoard = () => {
  return gameBoard;
}
