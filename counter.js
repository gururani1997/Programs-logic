function makeCounter(initialValue = 0) {
  // Your implementation
  let newInitialVal = initialValue;

  return {
    increment: function increment() {
      newInitialVal += 1;
      return newInitialVal;
    },
    decrement: function decrement() {
      newInitialVal -= 1;
      return newInitialVal;
    },
    reset: function reset() {
      newInitialVal = initialValue;
      return newInitialVal;
    },
  };
}

const counter = makeCounter(5);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.decrement());

module.exports = makeCounter;
