let marks_class_12 = [91, 82, 63, 84, false, "Not Present"]
console.log(marks_class_12)
// marks_class_12[6] = 89 // Adding a new value to the array
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6]) // Will be undefined because index 6 does not exist
console.log("The length of marks_class_12 is", marks_class_12.length)
marks_class_12[6] = 89 // Adding a new value to the array
marks_class_12[0] = 96 // Changing the value of an array
console.log(marks_class_12)
console.log(typeof marks_class_12)

// Note: Strings are immutable 
// Note: Arrays are mutable

// 
let marks = [55, 66, 88, 98, 55, 78];
let i;
for (i = 0; i < marks.length; i++) {
  console.log(marks[i]);
}