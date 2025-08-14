function sum(...args) {
  // Your implementation
  if (args.length === 0) {
    return 0;
  }
  if (args.length === 1) {
    return args[0];
  }

  return args?.reduce((prev, next) => {
    return prev + next;
  }, 0);
}

//For the purpose of user debugging.
console.log(sum(100, 200, 300, 400));

module.exports = sum;
