const array = [10, 34, 87, 56, 76, 9, 8, 10000, 4654, 453, 7868];
const rotatorIndex = 5;
if (rotatorIndex >= array.length) {
  throw new Error("Rotator is greater then array length");
}
// const preRotateArray = array.slice(0, rotatorIndex + 1);
// const postRotateArray = array.slice(rotatorIndex + 1, array.length);
const completeArray = [
  ...array.slice(rotatorIndex + 1, array.length),
  ...array.slice(0, rotatorIndex + 1),
];
console.log(completeArray);
