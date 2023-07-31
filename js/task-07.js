const inputRange = document.querySelector("#font-size-control");
const minFontSize = inputRange.getAttribute("min");
const maxFontSize = inputRange.getAttribute("max");
const textToResize = document.querySelector("#text");

inputRange.addEventListener("input", () => {
  const newSize = inputRange.value;
  textToResize.style.fontSize = `${newSize}px`;
});
