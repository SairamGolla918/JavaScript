
var c = 300
let a = 800

const b = 10000

if(true){
    a = 10
    const b = 20
    c = 30
}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// console.log(index);


// console.log(a)
// console.log(b);
// console.log(c);

function one() {

    const username = "Saiee"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()
    
}

// one()


if(true)
{
    const name = "BBPath"
    if(name === "BBPath")
    {
        const domain = ".com"
        // console.log(name + domain)
    }
    // console.log(domain);
    
}

// console.log(name);


// +++++++++++++++++++ Interesting +++++++++++++++++++++++++++

console.log(addOne(1));



function addOne(num) {

    return num + 1;
}




const addTwo = function(num) {
    return num + 2;
}

console.log(addTwo(1));