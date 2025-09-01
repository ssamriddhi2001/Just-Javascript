const user = {
    username: "Sam",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // "this" keyword refers to the current context in scope
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Ashu"
// user.welcomeMessage()

// console.log(this)

// function chai() {
//     let username = "Sam"
//     console.log(this.username);
    
// }

// chai()


// const chai = function () {
//    let username = "Sam"
//     console.log(this.username); 
// }

// chai()


// const chai = () => {
//    let username = "Sam"
//     console.log(this); 
// }

// chai()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// } explicit return

// const addtwo = (num1, num2) => num1 + num2  // implicit return

// const addtwo = (num1, num2) => (num1 + num2)

const addtwo = (num1, num2) => ({username:  "sam"}) // to return object you need to wrap it in paranthesis and curly braces


console.log(addtwo(3,4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach( ())
