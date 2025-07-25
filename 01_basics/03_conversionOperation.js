let score = 33
let score2 ="33abc"

// console.log(typeof score); // number
// console.log (typeof(score2)); // string

let valueInNum = Number(score)
let valueInNum2 = Number(score2)

// console.log(valueInNum) // 33
// console.log(valueInNum2) // NaN (not a number)

let score3 = null
let score4 =undefined

// console.log(typeof score3); // object
// console.log (typeof(score4)); // undefined

let valueInNum3 = Number(score3)
let valueInNum4 = Number(score4)

// console.log(valueInNum3) //  0
// console.log(valueInNum4) //  NaN

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isloggedIn = 1

let booleanIsLoggedIn = Boolean(isloggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "sam" => true

let someNumber = 99

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ***************** Operations *****************


let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3); 
// console.log(2%3);

let str1 = "hiiii"
let str2 = " sam"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + " 2");

// console.log( (3+4) * 5 % 3 );

// console.log (+true);
// console.log (+"");

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
// gameCounter++;
// console.log(gameCounter);
++gameCounter;
console.log(gameCounter);

