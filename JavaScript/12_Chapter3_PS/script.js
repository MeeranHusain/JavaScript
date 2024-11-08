const prompt = require("prompt-sync")({ signit: true });
let marks = {
  harry: 90,
  shubham: 9,
  lovish: 56,
  Monika: 4,
};
// -------------- Problem No 1
for (let i = 0; i < Object.keys(marks).length; i++) {
  // console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

// -------------- Problem No 2
for (let key in marks) {
  // console.log("The marks of " + key + " are " + marks[key])
}

// -------------- Problem No 3 
// (This is my own logic builid for number guessing game)

let cn = Math.random() * 100;
cn = Math.floor(cn);
console.log(cn);
let i;
while (i != cn) {
  i = prompt("Enter a number: ");
  if (i == cn) {
    console.log("You have entered a correct number");
  } else {
    console.log("Try again");
  }
  // console.log("Try again")
}
// console.log("You have entered a correct number");

// -------------- Problem No 4
const mean = (a, b, c, d)=>{
  return (a + b + c + d) / 4
}

console.log(mean(4, 5, 6, 7))