export function displayNElements(array, quantity) {
  let itemsToDisplay = quantity;
  if (quantity === "all") {
    itemsToDisplay = array.length;
  }
  return [...array.slice(0, itemsToDisplay)];
}
