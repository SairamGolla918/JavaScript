// Singleton

// Object.create

// object literalls

const mySym = Symbol("key1")

const JsUser = {
    name:'Saiee',
    "full name":"Saiee Yadav",
    age:18,
    [mySym]:"mykey1",
    email:"saieeyadav@google.com",
    isLoggedIn : false,
    lastLogged :["Monaday","Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);
// console.log(JsUser[mySym]);
// console.log(JsUser);

JsUser.email = "codewithrowdy@gmail.com"

// Object.freeze(JsUser)

JsUser.email = "r180918@rguktrkv.ac.in"

// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS")
}

JsUser.greeting2 = function(){
    console.log(`Hello JS,${this.name}`)
}

console.log(JsUser.greeting2())










