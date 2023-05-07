let num = [3, 5, 1, 2, 4]

// Classic For Loop
for(let i=0; i<num.length; i++){
  console.log(num[i])
}
/* 
3
5
1
2
4 */

console.log("")

// ForEach Loop
num.forEach((element) => {
  console.log(element * element)
})
/* 
9
25
1
4
16 */

console.log("")

// Array.from - used to create an array from any other object
let name = "Harry"
let arr = Array.from(name)
console.log(arr)
// [ 'H', 'a', 'r', 'r', 'y' ]

console.log("")

// for...of 
for (let item of num){
  console.log(item)
}
/* 
3
5
1
2
4 */

console.log("")

// for...in
for (let i in num){
  console.log(num[i])
}
/* 
3
5
1
2
4 */

// this loop used to give keys in objects
// similar to objects, arrays also have keys which are 0, 1, 2, 3, 4