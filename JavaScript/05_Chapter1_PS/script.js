// Chapter 1 --- Q1
let a = "Meeran";
let b = 7;
console.log(a + b);

// Chapter 1 --- Q2
console.log(typeof (a + b));

// Chapter 1 --- Q3
const a1 = {
  name: "Meeran",
  section: 1,
  isPrincipal: false,
};
// a1 = 45;
// a1 = {}

// Chapter 1 --- Q4
a1["Friend"] = "Shubham";
a1["name"] = "Lovish"; // we can change the value of the key in the object --- (name Meeran is overwritten by Lovish)
console.log(a1);

// Chapter 1 --- Q5
const dict = {
  appreciate: "recognize the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work."
}

console.log(dict['yakka'])
console.log(dict.yakka)