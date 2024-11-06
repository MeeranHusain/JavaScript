// nn ss bb u - Primitive DataTypes in JS

// n - null
// n - number
// b - boolean
// b - bigint
// s - string
// s - symbol
// u - undefined

let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3");
let e = "Harry";
let f = Symbol("I am a nice symbol");
let g = undefined;
console.log(a, b, c, d, e, f, g);
console.log(typeof c);

// Non Primitive Data Type - Objects in JS
const item = {
  Harry: true,
  Shubh: false,
  Lovish: 67,
  Rohan: undefined,
};

console.log(item["Lovish"]);
