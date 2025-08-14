const array = [10, 34, 87, 56, 76, 9, 8, 10000, 4654, 453, 7868];

function findMin(arr) {
  return arr.reduce((prev, next) => {
    return prev < next ? prev : next;
  }, arr[0]);
}
console.log(findMin(array));
