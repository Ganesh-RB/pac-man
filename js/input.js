var inputDirection = LEFT;

const updateInputDirection = (event) => {
  if (event.key === "ArrowUp") {
    inputDirection = UP;
  }
  else if (event.key === "ArrowDown") {
    inputDirection = DOWN;
  }
  else if (event.key === "ArrowLeft") {
    inputDirection = LEFT;
  }
  else if (event.key === "ArrowRight") {
    inputDirection = RIGHT;
  }
}

window.addEventListener("keydown", updateInputDirection);

const getInputDirection = () => {
  return inputDirection;
}