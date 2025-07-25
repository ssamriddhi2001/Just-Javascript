// Primitive (call by value)

// 7 types : String, Number, Boolean, null, undefined, Symbol(to make value unique), BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn =  false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber =  37929327382n



// reference (non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let obj = {
    name: "sam",
    age: 23,
}

const myFunction = function(){
    console.log("helloooww worldwa");
    
}
console.log(typeof bigNumber);
