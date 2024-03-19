//Closures Function -> A closure function can access variables define in its outer function, even after the outer function has returned

//example ->

function outerFunction() {
    var outerVariable = "I'm an outer variable";

    function innerFunction() {
        console.log(outerVariable); // Access outerVariable from the outer scope
    }

    // Return the inner function, which forms a closure over outerVariable
    return innerFunction;
}

// Call outerFunction to get the inner function
var closureFunc = outerFunction();

// Call the inner function, which still has access to outerVariable
closureFunc(); // Output: I'm an outer variable


//Currying -> It is a functional programming technique in javascript where a function with multiple arguments is transformed into a sequence of function
// each taking a single argument

//example ->


// General function with multiple arguments
function add(a, b, c) {
    return a + b + c;
}

// Curried version of the add function
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}
//or

const curriedAdd2 = (a) => (b) => (c) =>{
    return a + b + c;
}

// Usage of curriedAdd function
var curriedAddition = curriedAdd(2); // Pass the first argument 'a'
var result = curriedAddition(3)(4);   // Pass the remaining arguments 'b' and 'c'

console.log(result); // Output: 9 (2 + 3 + 4)



// Or you can call the function all at once
console.log(curriedAdd2(2)(3)(4)); // Output: 9 (2 + 3 + 4)


//Compose function -> This is a high order function used to combine multiple function into single
//function. This combined function executes each of its constituent functions from right to left, passing the result of each
//function call as the argument.

//example ->

const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;
compose(sum, sum)(5);