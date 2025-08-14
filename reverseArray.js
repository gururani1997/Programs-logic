const array = [10, 34, 87, 56, 76, 9, 8, 10000, 4654, 453, 7868];
const newArray = [];
for (let i = 1; i <= array.length; i++) {
  newArray.push(array[array.length - i]);
}
// const newArray = [...array].reverse(); one liner with shallow copy .

console.log(newArray);
