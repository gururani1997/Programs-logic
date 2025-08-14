const input = 5;
const arr = [2, 3, 1, 2, 3];
const duplicate = [];
const freq = {};

for (let i = 0; i < input; i++) {
  freq[arr[i]] = (freq[arr[i]] || 0) + 1;
}
for (const key in freq) {
  if (freq[key] > 1) {
    duplicate.push(Number(key));
  }
}
if (duplicate.length > 0) {
  console.log("Duplicate Number", ...duplicate);
  console.log("Frequency order", freq);
} else {
  console.log("Duplicate Number", -1);
}
