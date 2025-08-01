function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("M");
    
}

// sayMyName()

// function addTwoNumbers(number1, number2){ // here number1 and number2 are parameters
//     console.log(number1 + number2)
// }
function addTwoNumbers(number1, number2){ 
    // let result = number1 +number2
    // return result
    return number1 + number2
}

// addTwoNumbers(3,4) // 7
// addTwoNumbers(3
// , "4") // 34
// addTwoNumbers(3, "a") // 3a
// addTwoNumbers(3, null) // 3

// here in the above functions 3 and null are arguments

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "Ashu"){
    if(!username){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Sam"))
console.log(loginUserMessage()); // undefined

