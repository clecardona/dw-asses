export function addElement(qty, setter) {
  const newQuantity = [...qty, 0];
  setter(newQuantity);
}

export function removeElement(idx, qty, setter) {
  const newQuantity = [...qty];
  newQuantity.splice(idx, 1); // todo - track the index to target the correct field
  setter(newQuantity);
}
