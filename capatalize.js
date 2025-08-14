function capitalizeWords(sentence) {
  // Your implementation
  sentence = sentence.trim().split(/\s+/);
  const response = [];
  console.log(sentence);
  for (let sen of sentence) {
    let output = sen.charAt(0).toUpperCase() + sen.slice(1).toLowerCase();
    response.push(output);
  }
  return response.join(" ");
}

//For the purpose of user debugging.
console.log(capitalizeWords("   heLlO   world   "));
module.exports = capitalizeWords;
