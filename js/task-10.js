const inputElement = document.querySelector("#controls input");
const createButton = document.querySelector("#controls [data-create]");
const destroyButton = document.querySelector("#controls [data-destroy]");
const boxesArea = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function returnNumber() {
  return parseInt(inputElement.value);
}

function createBoxes(amount) {
  console.log("poszło");
  let widthAndHeight = 30;

  for (let i = 0; i <= amount; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${widthAndHeight}px`;
    newDiv.style.height = `${widthAndHeight}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    boxesArea.appendChild(newDiv);
    widthAndHeight += 10;
  }
}

function destroyBoxes() {
  while (boxesArea.firstChild) {
    boxesArea.removeChild(boxesArea.firstChild);
  }
}

createButton.addEventListener("click", function () {
  const numberOfBoxes = returnNumber();
  createBoxes(numberOfBoxes);
});

destroyButton.addEventListener("click", destroyBoxes);
