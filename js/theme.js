const brown = {
  bgColor: "#800000b3",
  brColor: "#805100bf"
}

const blue = {
  bgColor: "#2426a8b3",
  brColor: "#2b558dbf"
}

const green = {
  bgColor: "#0c7703b3",
  brColor: "#429404bf"
}

const pink = {
  bgColor: "#65035cb3",
  brColor: "#62006dbf"
}

const themes = [brown, blue, pink, green];

var currentTheme = brown;

const getNextTheme = () => {
  const index = themes.findIndex((theme) => { return theme === currentTheme });

  currentTheme = themes[(index + 1) % themes.length];
  return currentTheme;
}

const changeLayoutTheme = () => {
  const wallElements = document.querySelectorAll(".wall-element");

  nextTheme = getNextTheme();
  wallElements.forEach(wall => {
    wall.style.backgroundColor = nextTheme.bgColor;
    wall.style.borderColor = nextTheme.brColor;
  })
}

const themeInit = () => {
  const wallElements = document.querySelectorAll(".wall-element");
  wallElements.forEach(wall => {
    wall.style.backgroundColor = currentTheme.bgColor;
    wall.style.borderColor = currentTheme.brColor;
  })
}