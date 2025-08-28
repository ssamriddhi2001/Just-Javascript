
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    
} // block scope

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Sam"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}

// one()

if (true) {
    const username = "sam "
    if (username === "sam") {
        const website = "youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


// ++++++++++ interestung ++++++++++

function addone(num) {
    return num + 1; 
}

