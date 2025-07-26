const name = "sam"
const repoCount  = 50

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('samCodeIs-good-he@he');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('C'));
// console.log(gameName.indexOf('o'));
// console.log(gameName.indexOf('c'));
// console.log(gameName.indexOf('i'));

const newStr = gameName.substring(0,10)
console.log(newStr);

const anotherStr = gameName.slice(-19, 20)
console.log(anotherStr)

const newStringOne = "  samm  "

console.log(newStringOne);
console.log(newStringOne.trim());
// console.log();

const url ="https://google.com/apple%20phone"

console.log(url.replace('%20', '-'));

console.log(url.includes('sam'));

console.log(gameName.split('-'));



