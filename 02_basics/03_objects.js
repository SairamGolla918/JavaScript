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

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser[mySym]);
console.log();








