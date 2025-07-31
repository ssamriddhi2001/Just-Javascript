// singleton

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Sam",
    "full name": "Sam ji",
    age: 23,
    [mySym]: "mykey1",
    location: "gurugram",
    email: "sam@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "samji@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "samjiiis@sam.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
