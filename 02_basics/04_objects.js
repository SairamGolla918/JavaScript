// const tinderUser = new Object(); ----- Singleton Object

const tinderUser = { }   // non -Singleton Object..


tinderUser.id = "123abc"

tinderUser.name = "Saiee"
tinderUser.isLogggedIn = false


// console.log(tinderUser)

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname : {
            firstname : "Saiee",
            lastname : "Yadav"
        }
    }

}

// console.log(regularUser.fullname.userfullname.firstname);/

const obj1 = {1:"a",2:"b"}

const obj2 = {3:"a",4:"b"}

const obj5 = {5:"a",6:"b"}

const obj3 = {obj1,obj2}

// console.log(obj3)

const obj4 = Object.assign({},obj1,obj2,obj5) 

// console.log(obj4)

const obj6 = {...obj1,...obj2,...obj4} //Using Spread(...) Operator...

// console.log(obj6)

const users = [

    {
        id: 1,
        email:"saiee"
    },
    {   id: 1,
        email:"saiee"},
    {   
        id: 1,
        email:"saiee"
    },
    {   id: 1,
        email:"saiee"},
    {   id: 1,
        email:"saiee"}
        
]

// console.log(users[4].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));






const course = {

    courseName : "PV",
    price : "10000",
    courseInstructor:"Ramesh"

}

const {courseInstructor:instructor} = course

console.log(instructor);


// {
//     "name" : "Saiee",         ---- JSON format [JAVASCRIPT OBJECT NOTATION]
//     "pass" : "Yadav"      
// }


[
                      
    {},                    // JSON format of Array type 
    {},
    {}
]




