const santan_heros = ['hanuman','parshuram' ]

const devs = ['Ram','krishna']

// santan_heros.push(devs)

// console.log(santan_heros)

// console.log(santan_heros[2][0]);


// let all = santan_heros.concat(devs)
// console.log(all);


const all = [...devs,...santan_heros]

// console.log(all);

const arr = [1,2,3,4,[333,4,4,],5,[12,3,[1,2,3]]]

const newarr = arr.flat(Infinity)

// console.log(newarr);


// console.log(Array.isArray("His"));

// console.log(Array.from("Saiee"));


console.log(Array.from({name:"Saieeyadav"})); // need to know

let n1 = 100
let n2 = 200
let n3 = 500

console.log(Array.of(n1,n2,n3));



