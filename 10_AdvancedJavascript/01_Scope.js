// Scope refers to the accessibility of variables and functions within your code.
// It determines where these variables and functions are available for use. 
// There are mainly two types of scope one is GLOBAL SCOPE and LOCAL SCOPE.


// 1. GLOBAL SCOPE where variables and functions are declared outside of any function or block have global scope.
// They can be accessed from anywhere in your code, including within functions or blocks.

// ex ->

var globalVariable = "I'm a global variable";

function myFunction() {
    console.log(globalVariable); // Accessible within the function
}

myFunction(); // Output: I'm a global variable
console.log(globalVariable); // Output: I'm a global variable


// 2. LOCAL SCOPE where variable declared within a function or block have local scope. They are only accessible within the function or block in which they are declared.

// ex ->

function myFunction() {
    var localVar = "I'm a local variable";
    console.log(localVar); // Accessible within the function
}

myFunction(); // Output: I'm a local variable
console.log(localVar); // Error: localVar is not defined
