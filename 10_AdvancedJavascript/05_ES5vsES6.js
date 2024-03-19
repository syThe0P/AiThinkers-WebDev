// ES5 (ECMAScript 5) and ES6 (ECMAScript 2015, also known as ES2015 or ES6) are different versions of the ECMAScript standard, 
// which is the specification that JavaScript is based on. 
// Each version introduces new features, improvements, and changes to the language. 
// Here are some key differences between ES5 and ES6


//1. Arrow Functions

// ES5 function expression
var add = function(a, b) {
    return a + b;
};

// ES6 arrow function
const add = (a, b) => a + b;


//2. Let and Const Declaration

// ES5
var x = 10;
// ES6
let y = 20;
const z = 30;


//3. Template Literals

// ES5
var greeting = "Hello, " + name + "!";
// ES6
const greeting = `Hello, ${name}!`;


//4. Default Parameters

// ES5
function multiply(a, b) {
    b = (typeof b !== 'undefined') ?  b : 1;
    return a * b;
}
// ES6
const multiply = (a, b = 1) => a * b;
