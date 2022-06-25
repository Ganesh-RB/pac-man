var direction = LEFT;
var position = { x: 14, y: 18 };

const getPacmanPosition = () => {
  const returnValue = { x: 0, y: 0 };
  returnValue.x = position.x;
  returnValue.y = position.y;

  return returnValue;
}

const positionOverflowHandler = (position) => {
  if (position.x > getGridColumns()) {
    position.x = 1;
  }
  else if (position.x < 1) {
    position.x = getGridColumns();
  }

  if (position.y > getGridRows()) {
    position.y = 1;
  }
  else if (position.y < 1) {
    position.y = getGridRows();
  }
}


const updatePacman = () => {
  const inputDirection = getInputDirection();

  var newPosition = { x: 0, y: 0 };
  newPosition.x += position.x + inputDirection.x;
  newPosition.y += position.y + inputDirection.y;

  positionOverflowHandler(newPosition);

  if (checkWallCollision(newPosition) === false) {
    position.x = newPosition.x;
    position.y = newPosition.y;
  }
}

const getNewPacman = () => {
  const pacman = document.createElement("img");
  pacman.src = "image/Pacman.svg";
  pacman.id = "pacman";
  direction = getInputDirection();
  pacman.style.transform = direction.transform;
  pacman.style.gridRowStart = position.y;
  pacman.style.gridColumnStart = position.x;
  return pacman;
}

const getNewAnimatedPacman = () => {
  const pacman = document.createElement("div");
  pacman.id = "pacman";
  pacman.className = "animated-pacman-body";
  pacman.innerHTML =
    `<div class="animated-pacman-eye"></div>
    <div class="animated-pacman-mouth" style="animation-duration: ${2 / SPEED}s;"></div>`;

  direction = getInputDirection();
  pacman.style.transform = direction.transform;
  pacman.style.gridRowStart = position.y;
  pacman.style.gridColumnStart = position.x;

  return pacman;
}


const drawPacman = (gameBoard) => {
  const oldPacman = document.getElementById("pacman");
  const newPacman = getNewAnimatedPacman();
  if (oldPacman) {
    gameBoard.replaceChild(newPacman, oldPacman);
  } else {
    gameBoard.appendChild(newPacman);
  }
}