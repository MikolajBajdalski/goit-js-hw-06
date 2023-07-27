const itemsOfCategories = document.querySelectorAll("#categories li.item");

console.log(`Number of categories: ${itemsOfCategories.length}`);
console.log("");

itemsOfCategories.forEach((item) => {
  const headerOfItem = item.querySelector("h2");
  const elementsCount = item.querySelectorAll("ul li");
  console.log(`Category: ${headerOfItem.textContent}`);
  console.log(`Elements: ${elementsCount.length}`);
  console.log("");
});
