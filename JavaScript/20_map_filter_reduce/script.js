// let arr = [45, 23, 21]
// // Array map method 
// let a = arr.map((val, ind, arra)=>{
//     console.log(val, ind, arra)
//     return val + ind
// })

// console.log(a)

// array Filter method 
// let arr2 = [45, 23, 21, 0, 3, 5]
// let fil = arr2.filter((valu)=>{
//     return valu<10
// })
// console.log(fil, arr2)


// Array Reduce method
let arr3 = [1, 2, 3, 5, 2, 1]
const reduce_func = (h1, h2) => {
  return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)