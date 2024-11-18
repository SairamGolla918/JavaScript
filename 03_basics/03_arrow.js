const user = {
    username : "Saiee",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to ME`)
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Valli"

// user.welcomeMessage()

// console.log(this);

function hai() {

    console.log(this);
    
}

// hai()

const chai = () => {
    let username = "hitesh"
    console.log(this)
}

// chai()


const hey = (n1,n2) => {
    return n1+n2;
}

// console.log(hey(1,2));

// const add = (n1,n2) => (n1+n2)

const add = (n1,n2) => ({username:"Saiee"})

console.log(add(1,8));

const myArr = [1,2,3,4,5]

// myArr.forEach(() => ()) 
