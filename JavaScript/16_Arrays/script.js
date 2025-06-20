let fruits = ["apple", "banana", "mango"];

fruits.push("orange");        // ["apple", "banana", "mango", "orange"]
fruits.pop();                 // ["apple", "banana", "mango"]
fruits.unshift("grapes");     // ["grapes", "apple", "banana", "mango"]
fruits.shift();               // ["apple", "banana", "mango"]
console.log(fruits.length);   // 3
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.includes("apple")); // true
console.log(fruits.join(" - ")); // "apple - banana - mango"





let marks_class_12 = [91, 82, 63, 84, false, "Not Present"]
console.log(marks_class_12)
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6])      // Will be undefined because index 6 does not exist
console.log(`The length of marks_class_12: ${marks_class_12.length}`)

marks_class_12[6] = 89       // Adding a new value to the array
marks_class_12[0] = 96       // Changing the value of an array 
console.log(marks_class_12)
console.log(typeof marks_class_12)


let marks = [35, 53, 42, 99, 67]
marks.sort()
for (let mark of marks){
    marks.map(x => x * 2)
    console.log(mark)
}

// let marks = [35, 53, 42, 99, 67]
// for (let i = 0 ; i < marks.length; i++){
//     console.log(marks[i])
// }