// Note: The output of this .js file can be viewed on the index.html page.
// Open the index.html page in a browser, go to Inspect page -> Console tab.

console.log("-----------------------------------------------------------------------------------------------------")

console.log(a);

var a = 5;

console.log(a);

// console.log(b);
// Commenting above line so that the codes below will be executed.

// The output of the above code will be

// undefined
// 5
// Uncaught ReferenceError: b is not defined
// at index.js:10:13

// This is because, in the memory creation phase,
// undefined will be assigned to a as there's a value assigned to a later in the code.
// So the 1st log stmt prints undefined.
// Then 5 is assigned to variable a.
// The 2nd log stmt prints 5.
// The 3rd log stmt tries to print the value of b.
// But there's no such code where any value is assigned to b.
// So it throws not defined error.

// This is the difference between undefined and not defined keyword.

console.log("-----------------------------------------------------------------------------------------------------")

var c;

console.log(c);

if (c === undefined) {
    console.log("c is undefined")
} else {
    console.log("c is not undefined")
}

c = 10;

if (c === undefined) {
    console.log("c is undefined")
} else {
    console.log("c is not undefined")
}

// The output of the above code will be

// c is undefined
// c is not undefined

// Because no value is assigned to variable c and it will have undefined assigned to it
// in the memory creation phase.
// Before the 2nd if condition, 10 is assigned to variable c.
// So it prints c is not undefined now.

console.log("-----------------------------------------------------------------------------------------------------")

var d;
console.log(d);
d = 10;
console.log(d);
d = "Hello World"
console.log(d);

// The output of the above code will be

// undefined
// 10
// Hello World

// Because javascript is a loosely typed language.

console.log("-----------------------------------------------------------------------------------------------------")

// Refer README.md for more details.
