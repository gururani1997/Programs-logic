function groupBy(arr, key) {
  // Your implementation
  let resp = {};
  for (let ip of arr) {
    let grpKey = ip[key];
    console.log(grpKey);
    if (!resp[grpKey]) {
      resp[grpKey] = [];
    }
    resp[grpKey].push(ip);
  }
  return resp;
}
console.log(
  groupBy(
    [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 25 },
    ],
    "age"
  )
);
module.exports = groupBy;
