const arr1 = [1, 2, 3, 4];
const arr2 = [12, 10, 5, 6, 7, 8];

// approach 1 start
const approach1 = [...arr1, ...arr2].sort();
console.log(approach1);
// approach 1 end

// approach 2 start using bubble sort
const newArray = [];
for (let i = 0; i < arr1.length; i++) {
  newArray.push(arr1[i]);
}
for (let i = 0; i < arr2.length; i++) {
  newArray.push(arr2[i]);
}
console.log("Complete Array", newArray);
// approach 2 end

// approach 3 start
let i = 0;
let j = 0;
let mergeArray = [];

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    mergeArray.push(arr1[i]);
    i++;
  } else {
    mergeArray.push(arr2[j]);
    j++;
  }
}
while (i < arr1.length) {
  mergeArray.push(arr1[i]);
  i++;
}
while (j < arr2.length) {
  mergeArray.push(arr2[j]);
  j++;
}
console.log("Shorted array by while", mergeArray);
// Approach 3 end
