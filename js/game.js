var gameBoard = document.getElementById("gameBoard");
const SPEED = 1; // 1 unit per sec

const main = () => {
  update();
  draw();
}

const gameLoop = setInterval(main, 1000/SPEED);

const update = () => {
  updatePacman();
}

const draw = () => {
  gameBoard.innerHTML = "";
  drawPacman(gameBoard);
}
