// Immediately Invoked function expressions (IIFE)


(function chai(){
    console.log('DB CONNECTED');
    
}) ();

// "(<function definition>)" (execution call)

// to remove global scope  pollution is the code we use iife

// ( function aurcode(){
//     console.log(`DB CONNECTED 2`);
    
// }) ()

// ( () => {
//     console.log(`DB CONNECTED 2`);
    
// }) ();

( (name) => {
    console.log(`DB CONNECTED 2 ${name}`);
    
}) ('Sam');

