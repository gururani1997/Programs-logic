async function sum() {
  console.log("Fetching::::");
  return "data";
}
function once(fn) {
  let called = false;
  let response;
  return function (...args) {
    if (!called) {
      try {
        response = fn.apply(this, args);
        called = true;
      } catch (error) {
        throw error;
      }
    }
    return response;
  };
}

let onceSum = once(sum);

onceSum().then(console.log);
onceSum().then(console.log);

module.exports = once;
