const inputText = document.querySelector("#validation-input");
const inputLength = parseInt(inputText.getAttribute("data-length"), 10);

inputText.addEventListener("blur", () => {
  if (inputText.value.length === inputLength) {
    addValidClass();
  } else {
    addInvalidClass();
  }
});

const addValidClass = () => {
  inputText.classList.remove("invalid");
  inputText.classList.add("valid");
};

const addInvalidClass = () => {
  inputText.classList.remove("valid");
  inputText.classList.add("invalid");
};
