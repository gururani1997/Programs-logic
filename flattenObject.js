function flattenDeep(obj, parentKey = "", result = {}) {
  for (const key in obj) {
    const NewKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      flattenDeep(obj[key], NewKey, result);
    } else {
      result[NewKey] = obj[key];
    }
  }
  return result;
}
let data = flattenDeep({ x: 5, y: 4, z: 1, a: { b: { c: { d: { e: 1 } } } } });
console.log(data);
