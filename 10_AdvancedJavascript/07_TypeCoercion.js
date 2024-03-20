//Type coercian refers to the automatic conversion of values from one data types to another when performing operations or comparisons.
//This can happen impplicitly(automatically) or explicitly(manually).

//Examples ->

//1. Implicit Coercian

var x = 5;
var y = "10";
var z = x + y; // JavaScript converts x to a string and concatenates it with y
console.log(z); // Outputs "510"


//2. Explicit Coercian
var x = "5";
var y = 10;
var z = Number(x) + y; // Explicitly converts x to a number
console.log(z); // Outputs 15
