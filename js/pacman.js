var direction = LEFT;

const updatePacman = () => {

}

const drawPacman = (gameBoard) => {
  const pacman = document.createElement("img");
  pacman.src = "image/Pacman.svg";
  pacman.id = "pacman";
  pacman.style.transform = direction.transform;
  gameBoard.appendChild(pacman);
}