let score = 33
let score2 ="33abc"

console.log(typeof score); // number
console.log (typeof(score2)); // string

let valueInNum = Number(score)
let valueInNum2 = Number(score2)

console.log(valueInNum) // 33
console.log(valueInNum2) // NaN (not a number)

let score3 = null
let score4 =undefined

console.log(typeof score3); // object
console.log (typeof(score4)); // undefined

let valueInNum3 = Number(score3)
let valueInNum4 = Number(score4)

console.log(valueInNum3) //  0
console.log(valueInNum4) //  NaN

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isloggedIn = 1

let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "sam" => true

let someNumber = 99

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);