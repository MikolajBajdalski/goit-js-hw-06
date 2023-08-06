const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const listOfIngredients = document.querySelector("#ingredients");
const elementsToList = [];

ingredients.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  listItem.classList.add("item");
  elementsToList.push(listItem);
});

listOfIngredients.append(...elementsToList);
