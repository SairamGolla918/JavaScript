
// Dates 

let myDate = new Date()

// console.log(myDate.toString());

// console.log(myDate.toISOString());

// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let createdDate = new Date(2023,0,23)

// let createdDate = new Date(2023,0,23,3,45)

// let createdDate = new Date("2024-11-14")

let createdDate = new Date("11-14-2024")

let myTimeStamp = Date.now()



// console.log(myTimeStamp);
// console.log(createdDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()

// console.log(newDate.getDate())

// console.log(newDate.getDay())

// console.log(newDate.getMonth() + 1)

// console.log(newDate.getFullYear())

// console.log(newDate.getHours())

// `${newDate.getDay()}`

console.log(newDate.toLocaleDateString('default',{
    weekday:"long"
}));


