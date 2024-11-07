const prompt = require("prompt-sync")({ signit: true });
// -------------- Program to add first n natural numbers

let sum = 0;
let n = prompt("Enter the value of n ");
n = Number.parseInt(n);
for (let i = 0; i <= n; i++) {
  sum += i;
  // console.log(i + 1 + " + " + sum);
}
console.log("Sum of first " + n + " natural numbers is " + sum);



// ----------------- Factorial in loop:
// let fact = 1
// let num = prompt("Enter the number:")
// num = Number.parseInt(num);
// for (let i = 1; i <= num; i++) {
//   fact = fact * i
// }
// console.log("The factorial of " + num + " is " + fact)



// ----------------- For in loop
/*
let obj = {
  harry: 90,
  shubh: 45,
  shivika: 56,
  ritika: 57,
  shiv: 23
}
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a])
}
/*
// ----------------- For of loop
for (let b of "Harry"){
  console.log(b)
}
*/
