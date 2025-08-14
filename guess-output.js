const a = {};
const b = {};

a.data = { user_id: 12345 };
const k = { ...a, ...b };
const c = a;
a.data.user_id = 123457878;
const x = b;
console.log("c = ", c);
console.log("x = ", x);
c.data.user_id = "Rtdvhrsfg fg";
console.log("k = ", k);
