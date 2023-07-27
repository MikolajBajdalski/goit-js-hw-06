const valueElement = document.querySelector("#value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

let counterValue = 0;

function updateCounterValue() {
  valueElement.textContent = counterValue;
}

function decrementCounter() {
  counterValue -= 1;
  updateCounterValue();
}
function incrementCounter() {
  counterValue += 1;
  updateCounterValue();
}

decrementButton.addEventListener("click", decrementCounter);
incrementButton.addEventListener("click", incrementCounter);

updateCounterValue();
