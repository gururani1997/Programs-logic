const array = [10, 11, 10, 11, 10, 3, 5, 6, 4, 5, 6, 4, 56, 4];
const approach2 = [];

// Approach 1 Start
const approach1 = [...new Set(array)];
console.log("Removed Duplicate by approach 1", approach1);
//Approach 1 End

// Approach 2 Start
for (let i = 0; i < array.length; i++) {
  if (!approach2.includes(array[i])) {
    approach2.push(array[i]);
  }
}
console.log("Removed Duplicate by approach 2", approach2);
// Approach 2 End

// Approach 3 start
const approach3 = array.filter(
  (value, index) => array.indexOf(value) === index
);
console.log("Removed Duplicate by approach 2", approach2);
// Approach 3 end
