// for in loop

const myObject ={
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(key);
    
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]); 
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United states of America")
// map.set('Fr', "France")

// for (const key in map) {
//     // console.log(key); // this is not iteratable
//     console.log(map[key]);
    
    
// }