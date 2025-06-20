// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19];
// let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
// console.log("This is num: ", num);
// console.log(num.length);
// delete num[0];
// console.log("This is num after the deleting the 1 at index 0 array: ", num);
// console.log(num.length);

// let newArray = num.concat(num_more)
// console.log("This is new Array after the concatination: ",newArray, num_even_more)
// console.log("This is num array: ",num, "\nThis is num_more array: ", num_more)

// Sort method
// let compare = (a, b) => {
//   return a - b;     // this is will return the output in ascending order or (b-a) will descending
// };
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229];
// num.sort(compare);
// num.reverse()       // this is reverse the array
// console.log(num);

// Splice and Slice
let num = [551, 22, 3, 14, 5, 6, 7, 8, 229];
// let deletedValue = num.splice(2, 3, 1021, 1022, 1023);
// console.log("num after splice: ",num)
// console.log("Deleted values from array: ",deletedValue)
// console.log(typeof deletedValue)

let numSlice = num.slice(3, 5)     // slice does'nt modify original array, it gives new array
console.log(numSlice)
console.log(num)


// 🔧 Modification Methods
// Method	                Description	                            Example
// -------------------------------------------------------------------------------
// sort()	    Sorts array (alphabetically by default)         arr.sort()
// reverse()	Reverses array	                                arr.reverse()
// slice()	    Returns a portion (doesn’t change original)	    arr.slice(1, 3)
// splice()	    Removes/replaces/adds elements	                arr.splice(2, 1, "new")
// fill()	    Replaces all values with one value	            arr.fill(0)
// copyWithin()	Copies part of array to another position	    arr.copyWithin(0, 2)
