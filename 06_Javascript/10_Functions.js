//Functions are if we want to do same piece of work over and over again we use functions

// console.log("P");
// console.log("R");
// console.log("A");
// console.log("N");
// console.log("A");
// console.log("V");

//So to avoid this situation we use functions

function myName() {
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("V");
}

// myName();


function addNumbers(number1, number2){
    const result = number1 + number2;
    return result;
}
// console.log("result :", addNumbers(2,4));

const value = addNumbers(2, 4);
// console.log(value);



function eccomerce(username){
    return `${username} is logged in.`;

}

// console.log(eccomerce("Pranav kumar"))

//Suppose we are making a function and we dont know how many argumnts will come so we use rest operator for this

function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(200,300,400, 500,600))  //so this rest operator will pass all the values inside of an array

//Handle object with functions

const user1 = {
    name: "Pranav",
    price: 199
}

function newFunc(anyobject){
    return `username is ${anyobject.name}, and price is ${anyobject.price}`;
}

console.log(newFunc(user));


//Handle array with functions

const array = [100, 200, 300, 400];

function secFunc(anyarray){
    return `The second value is ${anyarray[1]}`;
}

console.log(secFunc(array));



const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()



//Immediately Invoked Functionk Expressions(iife) -> they are just functions which are immediately invoked to avoid global scope polution

//normal function

function chai(){
    console.log(`db connected`);
}

chai();

//iife

(function chai1(){                    //This is named iife
    console.log(`db connected two`);
})();


(()=>{                                 //This is unaamed iife
    console.log(`db connected three`);
})();


//And if we want to pass variables

((name)=>{
    console.log(`db connected with ${name}`);
})(`pranav`);