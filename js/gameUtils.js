const isFullscreen = () => {
  return document.fullscreenElement;
}

const toggleFullscreen = (e) => {
  if (isFullscreen()) {
    document.exitFullscreen();
    fullscreenTogglerButton.style.backgroundImage = "url(../image/fullscreen.svg)"

  } else {
    document.documentElement.requestFullscreen();
    fullscreenTogglerButton.style.backgroundImage = "url(../image/fullscreen-exit.svg)"
  }
}



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


/* Score Board */
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