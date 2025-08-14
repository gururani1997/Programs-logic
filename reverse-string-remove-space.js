let input = "   Hello     world  from   AI ";
//Output: "AI from world Hello"
input = input.trim();
let output = [];
input = input.split(" ");

for (let ip of input) {
  if (ip !== "") {
    output.push(ip);
  }
}
console.log(output.reverse().join(" "));
