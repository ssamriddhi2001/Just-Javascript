const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["supperman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros)


const all_heros = [...marvel_heros, ...dc_heros]
console.log(all_heros);

const another_array = [1, 2 , 3, 4, 5, [7, 3], [4,8, [6,9, 10]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log( Array.isArray("Samm"))
console.log( Array.from("Samm"))
console.log( Array.from({name: "sammmmm"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

