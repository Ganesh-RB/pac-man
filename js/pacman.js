var direction = LEFT;
var position = { x: 10, y: 11 };

const getPacmanPosition = () => {
  return position;
}

const positionOverflowHandler = (position) => {
  if (position.x > getGridColumns()) {
    position.x = 0;
  }
  else if (position.x < 0) {
    position.x = getGridColumns();
  }

  if (position.y > getGridRows()) {
    position.y = 0;
  }
  else if (position.y < 0) {
    position.y = getGridRows();
  }
}


const updatePacman = () => {
  var inputDirection = getInputDirection();
  let newPosition = position;
  newPosition.x += inputDirection.x;
  newPosition.y += inputDirection.y;

  positionOverflowHandler(newPosition);
  if (checkWallCollision(newPosition) === false) { 
    position = newPosition;
    
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

const drawPacman = (gameBoard) => {
  const oldPacman = document.getElementById("pacman");
  const newPacman = getNewPacman();
  if (oldPacman) {
    gameBoard.replaceChild(newPacman, oldPacman);
  } else {
    gameBoard.appendChild(newPacman);
  }
}