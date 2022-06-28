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
  }
}

const update = () => {
  updateLayout();
  updateScoreBoard(scoreBoard);
}

const getGameBoard = () => {
  return gameBoard;
}
