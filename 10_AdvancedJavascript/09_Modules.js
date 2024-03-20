//modules are a way to organize code into reusable pieces with well-defined interfaces. They allow you to split your code into separate files, each containing related functionality, and then import and export pieces of code between files as needed.

//1. ES6 modules -> ECMAScript 6 (ES6) introduced native support for modules in JavaScript. ES6 modules use import and export statements to control the visibility of functions, objects, and variables between different JavaScript files.
// math.js
export function add(x, y) {
  return x + y;
}

// app.js
import { add } from "./math.js";
console.log(add(5, 3)); // Outputs 8

//2.CommonJS ->CommonJS is a module format used in Node.js and is also supported by bundlers like Webpack. It uses require() to import modules and module.exports or exports to export them.
// math.js
exports.add = function (x, y) {
  return x + y;
};

// app.js
const math = require("./math.js");
console.log(math.add(5, 3)); // Outputs 8
