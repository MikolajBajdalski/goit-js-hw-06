function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColorBody() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  hexColorSpan.textContent = randomColor;
}

const body = document.body;
const button = document.querySelector(".change-color");
const hexColorSpan = document.querySelector(".color");

button.addEventListener("click", changeBackgroundColorBody);
