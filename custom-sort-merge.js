const preList = [0, 5, 3, 6, 1, 2];
const postList = [4, 3, 8, 7, 9, 10];
const List = new Array();

// merging in custom way
for (const item of preList) {
  List.push(item);
}
for (const item of postList) {
  List.push(item);
}

// Shorting By Bubble Short
for (let i = 0; i < List.length - 1; i++) {
  console.log("I am I", i);
  for (let j = 0; j < List.length - 1 - i; j++) {
    console.log("I am J", j);
    if (List[j] > List[j + 1]) {
      // Swap The Values
      let temp = List[j + 1];
      List[j + 1] = List[j];
      List[j] = temp;
    }
  }
}
console.log(List);
