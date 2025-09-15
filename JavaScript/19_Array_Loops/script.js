let num = [3, 54, 1, 2, 4]

// for (let i = 0; i < num.length; i++) {    //---   // this is the classical for-loop.
//     console.log(num[i], i)
// }

// For Each loop     ---     Calls a function, once for each array element.
num.forEach((element) => {
    console.log(element * element)
})

// Array.from   ---  This helps to convert html collection into the array in simple understanding. 
let name = "Meeran"
let arr = Array.from(name)
console.log(arr)

// for...of    ---    This is very efficient to print the elements of the array.
for (let item of num){
    console.log("This is for...of loop: ",item)
}
console.log('\n') 

// for...in    ---    This is use for the print or iterate the index of an array. 
for (let i in num){
    console.log("This is for...in loop: ",i)
}