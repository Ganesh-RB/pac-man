var direction = LEFT;
var position = { x: 10, y: 11 };

const positionOverflowHandler = () => {
  if (position.x > 60) {
    position.x = 0;
  }
  else if (position.x < 0) {
    position.x = 60;
  }

  if (position.y > 20) {
    position.y = 0;
  }
  else if (position.y < 0) {
    position.y = 20;
  }
}


const updatePacman = () => {
  var inputDirection = getInputDirection();
  position.x += inputDirection.x;
  position.y += inputDirection.y;

  positionOverflowHandler();
}

const drawPacman = (gameBoard) => {
  const pacman = document.createElement("img");
  pacman.src = "image/Pacman.svg";
  pacman.id = "pacman";
  direction = getInputDirection();
  pacman.style.transform = direction.transform;
  pacman.style.gridRowStart = position.y; 
  pacman.style.gridColumnStart = position.x;
  gameBoard.appendChild(pacman);
}