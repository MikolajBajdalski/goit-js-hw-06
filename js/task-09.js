function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColorBody() {
  body.style.backgroundColor = getRandomHexColor();
  hexColorSpan.textContent = getRandomHexColor();
}

const body = document.body;
const button = document.querySelector(".change-color");
const hexColorSpan = document.querySelector(".color");

button.addEventListener("click", changeBackgroundColorBody);
