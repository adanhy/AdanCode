/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.

    Submit the file to Hive

*/

// From function declarations to explicit and implicit return functions (one of each).
function welcome() {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
}
// explicit
let welcome = () => {
  return "Welcome to Appleseeds Bootcamp!";
};

// implicit
let welcome = () => "Welcome to Appleseeds Bootcamp!";

function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}

// explicit
let power = (a) => {
  return Math.pow(myNumber, 2);
};

// implicit

let power = (a) => Math.pow(a, 2);

// From function expressions to IIFE functions.

// original
const squareRoot = (a) => Math.sqrt(a);

// IIFE
const squareRoot = (function (a) {
  return Math.sqrt(a);
})();

// original
const randomNumbers = (a, b) => Math.random() * (a - b) + b;

// IIFE
const randomNumbers = (function (a, b) {
  return Math.random() * (a - b) + b;
})();
