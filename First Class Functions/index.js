// Note: The output of this .js file can be viewed on the index.html page.
// Open the index.html page in a browser, go to Inspect page -> Console tab.

console.log("---Function Statement aka Function Declaration---");

a();

function a() {
    console.log("This way of creating a function is known as a Function Statement.")
}

a();

console.log("---Function Statement aka Function Declaration---");

console.log("---Function Expression---");

// b();
// Commenting above line so that the below code executes.

var b = function () {
    console.log("We can assign a function to a variable. This is known as Function Expression.");
}

b();

console.log("---Function Expression---");

// Difference between Function Statement and Function Expression is Hoisting.
// How does Hoisting come into picture?

// In the above code snippets, a() can be called above the function declaration
// as well as below the function declaration.

// Whereas b() cannot be called above the function declaration.
// Because var b is treated like a variable and not a function.
// So initially b will be undefined. When javascript engine comes to the line where b is assigned with a function code,
// at that point variable b is assigned with the function.
// So when b() is called after line 20, it executes the function.

// This is the major difference between a Function Statement and a Function Expression.

console.log("---Anonymous Functions---");

var c = function () {
    console.log("Functions without a name are called Anonymous Functions.");
    console.log("Anonymous Functions do not have an identity.");
    console.log("Creating Anonymous Functions without a name throws Syntax Error. Because it expects a function name.");
    console.log("Anonymous Functions are used in a place where functions are used as values.");
    console.log("So Anonymous Functions can be assigned to a variable.");
}

c();

console.log("---Anonymous Functions---");

console.log("---Named Function Expression---");

var d = function namedFunc() {
    console.log("Creating a function with a name and assigning it to a variable is known as Named Function Expression.");
}

d();
// namedFunc();
// Commenting above line so that the below code executes.
// Calling namedFunc() throws Uncaught ReferenceError: namedFunc is not defined

// When a function is created with a name and assigned to a variable,
// that function cannot be accessed outside with the function name.
// It can be accessed only with the variable name to which it is assigned.
// Because the function name is not available in the global scope. It is created
// as a local variable.

console.log("---Named Function Expression---");

console.log("---Difference between Parameters and Arguments---");

function e(param1, param2) {    // param1, param2 are parameters.
    console.log(param1, param2);
}

e(1, 2);    // 1, 2 are arguments.

console.log("---Difference between Parameters and Arguments---");

console.log("---First Class Functions---");
console.log("---Passing a function to another function---");

// A function can also be passed as an argument to another function.

function f(func) {
    console.log(func);
}

f(function () {     // This is one way of passing a function as argument to another function.
    console.log("This is a function passed as argument to f()");
})

function someFunction() {
    console.log("Some Function");
}

f(someFunction);    // This is one way of passing a function as argument to another function.

console.log("---Passing a function to another function---");

console.log("---Returning a function from a function---");

// When a function can be passed as an argument to another function, a function can be returned from a function as well.

function g() {
    return function () {
        console.log("This is a function inside g() and this function is returned");
    }
}

var functionReturnedFromAFunction = g();    // Assigned returned function to a variable.
console.log(functionReturnedFromAFunction); // Logging the function.
functionReturnedFromAFunction();            // Calling that funciton.

console.log("---Returning a function from a function---");

// The ability to use functions as values (pass function to another function or return function from a function) is known as First Class Functions.
// First Class Functions are not only in JavaScript. It is a programming concept. It is available in few other languages as well.
// First Class Functions also known as First Class Citizens.

// When a function is assigned to let or const variable, the concept of First Class Function remains the same.
// Along with the First Class Function concepts, it also follows the concepts of let & const as well.

console.log("---First Class Functions---");

console.log("---Intro to Arrow Functions---");

// Function Statement, Function Expression etc. can also be written using Arrow Functions.
// The concept of Arrow Functions is introduced in ES6 (ES6 stands for ECMAScript 6).
// let and const are also introduced in ES6.

console.log("---Intro to Arrow Functions---");

// Refer README.md for more details.
