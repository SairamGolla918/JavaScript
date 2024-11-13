

    //           Primitive 
// Data types  < 
    //           Reference 


// Primitive Data Types

// 7 types ( String , Number ,Boolean ,null ,undefined ,Symbol , BigInt)


const score = 100 // - Number 
const scoreValue = 100.3 // - Number

const isLoggedIn = true
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log( id === anotherId)

const bigNumber = 3547345567834565n


// Refernce (Non primitive)

// Array, Objects, Functions

const heros = ["Saiee", "Yadav"] // Array
let obj = 
{
    name:"Hai",
    age:22
}

const myFun = function(){
    console.log("Hello world")
}

// console.log(typeof bigNumber)


// ++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack(Primitive) we get copy of data type --- Heap(Non-Primitive) refernce


let myName = "SaieeYadav"

let Name = myName

Name = "saiee_rawm"

console.log(myName)
console.log(Name)

let userOne = {
    email: "saieeyadav@gmail.com",
    upi: "saieeyadav@ybl"
}

let userTwo = userOne

userTwo.email = "saieerawm@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
