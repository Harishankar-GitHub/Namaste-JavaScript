// Note: The output of this .js file can be viewed on the index.html page.
// Open the index.html page in a browser, go to Inspect page -> Console tab.

console.log("---Introduction---");

// Functional Programming is not possible without higher order functions.

console.log("---Introduction---");

console.log("---What is Higher Order Functions?---");

// A function which takes another function as an argument or returns a function from it is known as Higher Order Functions.

console.log("---Normal code---");

// Code to calculate the area of a circle.

const radius = [3, 1, 2, 4];

const calculateArea = function (radius) {
    const output = [];

    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }

    return output;
}

// Code to calculate the circumference of a circle.

const calculateCircumference = function (radius) {
    const output = [];

    for (let i = 0; i < radius.length; i++) {
        output.push(2 * Math.PI * radius[i]);
    }

    return output;
}

// Code to calculate the diameter of a circle.

const calculateDiameter = function (radius) {
    const output = [];

    for (let i = 0; i < radius.length; i++) {
        output.push(2 * radius[i]);
    }

    return output;
}

console.log("Area: " + calculateArea(radius));
console.log("Circumference: " + calculateCircumference(radius));
console.log("Diameter: " + calculateDiameter(radius));

console.log("---Normal code---");

// There are a lot of duplicate code in the above 3 functions.

// The same code is implemented in a better way below using Higher Order Functions and Functional Programming.

console.log("---Using Higher Order Functions and Functional Programming---");

const area = function(radius) {
    return Math.PI * radius * radius;
}

const circumference = function(radius) {
    return 2 * Math.PI * radius;
}

const diameter = function(radius) {
    return 2 * radius;
}

const calculate = function (radius, logic) {
    const output = [];

    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }

    return output;
}

console.log("Area: " + calculate(radius, area));
console.log("Circumference: " + calculate(radius, circumference));
console.log("Diameter: " + calculate(radius, diameter));

console.log("---Using Higher Order Functions and Functional Programming---");

// By writing code in this way, we can have reusability, modularity, pass functions to other functions etc.
// calculate() is a Higher Order Function.
// area(), circumference() and diameter() are callback functions.

console.log("---What is Higher Order Functions?---");

console.log("---Polyfill for map function---");

// The calculate() function is similar to .map function in JavaScript.

console.log("Area: " + radius.map(area));
console.log("Circumference: " + radius.map(circumference));
console.log("Diameter: " + radius.map(diameter));

// In the above code, .map function and calculate() function do the similar thing.
// If we compare the actual implementation, there might be few more checks/conditions in .map function.
// But the functionality is same.

// Now the difference between using .map function and calculate() is,
// we are calling .map on radius and calculate() accepts radius as an argument.

// Can we make calculate() to use like .map() ??

Array.prototype.calculateNew = function (logic) {
    const output = [];

    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }

    return output;
}

// In the above calculateNew() function, we have added Array.prototype.
// Now calculateNew() can be used like arrayName.calculateNew().
// This calculateNew() will be available on all arrays in the code.
// And we do not have to pass radius in the argument when we call radius.calculateNew(radius, logic).
// We can just use like this radius.calculateNew(logic)
// In the code of calculateNew(), we have replaced radius with "this".
// "this" represents the array or any other object on which calculateNew() is called upon.

console.log("---Using Array.prototype function---");
console.log("Area: " + radius.calculateNew(area));
console.log("Circumference: " + radius.calculateNew(circumference));
console.log("Diameter: " + radius.calculateNew(diameter));
console.log("---Using Array.prototype function---");

console.log("---Polyfill for map function---");

// Refer README.md for more details.
