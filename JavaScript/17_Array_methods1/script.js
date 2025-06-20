// Array Methods
let num = [1, 2, 3, 34, 4]
let b = num.toString() // b is now a string 
console.log(b, typeof b)
let c = num.join("-")
console.log(c, typeof c)
// let r = num.pop() // pop returns the popped element
// console.log(num, r)
// let r = num.push(56) // push returns the new array length
// console.log(num, r)
// let r = num.shift()
// console.log(r, num) // Removes an element from the start of the array

// let r = num.unshift(78)
// console.log(r, num)
// console.log(r)

// 🧠 Basic Array Methods
// Method	 |  What it Does                       | 	Example
// ---------------------------------------------------------------------
// push()	    Adds item to end of array	            arr.push("apple")
// pop()	    Removes item from end	                arr.pop()
// unshift()	Adds item to start                  	arr.unshift("banana")
// shift()      Removes item from start	                arr.shift()
// length	    Returns number of items in array	    arr.length

let fruits = ["apple", "banana"];
console.log("orginal array ", fruits);

fruits.push("mango");
console.log("After push:", fruits);         // [ 'apple', 'banana', 'mango' ]

fruits.pop();
console.log("After pop:", fruits);          // [ 'apple', 'banana' ]

fruits.unshift("grape");
console.log("After unshift:", fruits);      //  [ 'grape', 'apple', 'banana' ]

fruits.shift();
console.log("After shift:", fruits);        //  [ 'apple', 'banana' ]




// 🔍 Searching Methods
// | Method          | Description                       | Example                  |
// ---------------------------------------------------------------------------------------
// | `includes()`    | Checks if value exists                | `arr.includes(10)`|
// | `indexOf()`     | Returns index of value (first match)  | `arr.indexOf(20)`|
// | `lastIndexOf()` | Returns last index of value           | `arr.lastIndexOf(20)`|
// | `find()`      | Finds **first** element that matches a test | `arr.find(x => x > 50)`|
// | `findIndex()` | Index of the first matching item       | `arr.findIndex(x => x > 50)`|


// 🔁 Looping / Transforming
// Method	                Description	                    Example
// -----------------------------------------------------------------------------
// forEach()   Loops through each item (no return)	        arr.forEach(x => ...)
// map()	   Creates new array with changed values	    arr.map(x => x * 2)
// filter()	   Creates new array with only matching values	arr.filter(x => x > 50)
// reduce()	   Reduces array to one value	                arr.reduce((a,b)=>a+b)
// every()	   Checks if all items pass a test	            arr.every(x => x > 10)
// some()      Checks if any item passes a test	            arr.some(x => x > 10)


// 🔧 Modification Methods
// Method	                Description	                            Example
// -------------------------------------------------------------------------------
// sort()	    Sorts array (alphabetically by default)         arr.sort()
// reverse()	Reverses array	                                arr.reverse()
// slice()	    Returns a portion (doesn’t change original)	    arr.slice(1, 3)
// splice()	    Removes/replaces/adds elements	                arr.splice(2, 1, "new")
// fill()	    Replaces all values with one value	            arr.fill(0)
// copyWithin()	Copies part of array to another position	    arr.copyWithin(0, 2)



// 🔗 Combining / Converting
// Method	            Description	                    Example
// -------------------------------------------------------------------------------
// concat()	        Combines arrays	                arr1.concat(arr2)
// join()	        Converts array to string	    arr.join(", ")
// toString()	    Converts array to string	    arr.toString()
// flat()	        Flattens nested arrays	        [1, [2, [3]]].flat(2)