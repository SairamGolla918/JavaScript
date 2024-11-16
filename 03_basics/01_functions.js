
function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("I");
    console.log("E");
    console.log("E");
}

// sayMyName()

function add(n1,n2) {

    return (n1+n2)    
}

const res = add(1,2)

// console.log(res);


function loginUserMessage(username = "Saiee"){

    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Saiee"));

// console.log(loginUserMessage("Yadav"));


function calculateCartPrice(n1,n2,...num1)  // ---- (...)Rest operator  
{
    return n1 + n2 + num1    
}

// console.log(calculateCartPrice(2,3,3,4));


const user = {
    username : "Saiee",
    prices : 199
}

function handleObj(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObj(user)

// handleObj(user)
// handleObj({
//     userName: "Saiee",
//     price:399
// })

const myArr = [1,2,3,4,5]
function SecValue(Array1) {
    return Array1[1]
}

console.log(SecValue(myArr));









