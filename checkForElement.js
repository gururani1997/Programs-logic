const array = [7868, 453, 4654, 10000, 8, 9, 0, 76, 56, 87, 34, 10];
const element = 100;
function checkElement(params, elem) {
  return params.includes(elem) ? "exist" : "not exist";
}
console.log(checkElement(array, element));
