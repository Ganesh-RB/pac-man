/*************** Game setup ***************/
const gridColumns = 28;
const gridRows = 28;

const gameInit = (gameBoard) => {
  gameBoard.style.gridTemplateColumns = `repeat(${gridColumns},1fr)`;
  gameBoard.style.gridTemplateRows = `repeat(${gridRows},1fr)`;
  gameBoard.style.aspectRatio = `${gridColumns / gridRows}`;

  const screenWidth = window.screen.availWidth;
  const screenHeight = window.screen.availHeight;
  const aspectRatio = gridColumns / gridRows;
  if (screenWidth > screenHeight * aspectRatio) {
    gameBoard.style.height = `${screenHeight * 0.8}px`;
  } else {
    gameBoard.style.width = `${screenWidth * 0.8}px`;
  }

  layoutInit(gameBoard);
}

const getGridRows = () => {
  return gridRows;
}

const getGridColumns = () => {
  return gridColumns;
}


/************ Full screen Toggler ***********/
const isFullscreen = () => {
  return document.fullscreenElement;
}

const toggleFullscreen = (e) => {
  if (isFullscreen()) {
    document.exitFullscreen();
    fullscreenTogglerButton.style.backgroundImage = "url(image/fullscreen.svg)"

  } else {
    document.documentElement.requestFullscreen();
    fullscreenTogglerButton.style.backgroundImage = "url(image/fullscreen-exit.svg)"
  }
}


/************* Direction Utilities *****************/
const LEFT = {
  x: -1, y: 0, transform: "scale(-1,1) rotate(0deg)"
};

const RIGHT = {
  x: 1, y: 0, transform: "scale(1,1) rotate(0deg)"
};

const UP = {
  x: 0, y: -1, transform: "scale(1,1) rotate(-90deg)"
};

const DOWN = {
  x: 0, y: 1, transform: "scale(-1,1) rotate(90deg)"
};


/****************** Score Board ******************/
var score = 0;

const updateScore = () => {
  score++;
}

const resetScore = () => {
  score = 0;
}

const getScore = () => {
  return score;
}