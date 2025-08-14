const array = [10, 34, 87, 56, 76, 9, 8, 10000, 4654, 453, 7868, 3, 7, 13];
const key = "even";

function filterNumber(params) {
  return params.filter((valuekey) =>
    key == "even" ? valuekey % 2 == 0 : valuekey % 2 != 0
  );
}
console.log(filterNumber(array));
