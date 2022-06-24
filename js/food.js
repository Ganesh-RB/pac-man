const getNewFoodElement = (rowNo, columnNo) => {
  const foodElement = document.createElement("div");
  foodElement.className = "food-element";
  foodElement.id = `food-element-${rowNo}-${columnNo}`;
  foodElement.style.gridRowStart = rowNo || 0;
  foodElement.style.gridColumnStart = columnNo || 0;
  return foodElement;
}

const getFoodElement = (rowNo, columnNo) => {
  return document.getElementById(`food-element-${rowNo}-${columnNo}`);
}

const updateFood = (gameBoard) => {
  const pacmanPosition = getPacmanPosition();
  let row = pacmanPosition.y;
  let column = pacmanPosition.x;
  // console.log(pacmanPosition); 
  const foodElement = getFoodElement(row, column);

  if (foodElement) {
    console.log(foodElement);
    makeEmpty(row, column);
    gameBoard.removeChild(foodElement);
  }
}
