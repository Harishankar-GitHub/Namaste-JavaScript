// Note: The output of this .js file can be viewed on the index.html page.
// Open the index.html page in a browser, go to Inspect page -> Console tab.

console.log("-----------------------------------------------------------------------------------------------------")

var x = 7;

function getName() {
    console.log("Namaste Javascript from getName()");
}

getName();
console.log(x);

// The output for the above code will be
// Namaste Javascript
// 7

console.log("-----------------------------------------------------------------------------------------------------")

getName1();
console.log(y);

var y = 8;

function getName1() {
    console.log("Namaste Javascript getName1()");
}

// Now the output for the above code will be
// Namaste Javascript
// undefined

// For explanation, refer here - https://github.com/Harishankar-GitHub/namaste-javascript#how-javascript-code-is-executed

console.log("-----------------------------------------------------------------------------------------------------")

getName2();
// console.log(z);
// Commenting above line so that the codes below will be executed.

function getName2() {
    console.log("Namaste Javascript getName2()");
}

// Now the output for the above code will be
// index.js:35 Uncaught ReferenceError: z is not defined
// at index.js:35:13

// This is known as Hoisting in Javascript.
// Hoisting is a phenomena in Javascript where variables and functions can be accessed
// without any error even before they are iniitialized.

console.log("-----------------------------------------------------------------------------------------------------")

function getName3() {
    console.log("Namaste Javascript from getName3()");
}

console.log(getName3);

// Now the output for the above code will be
// ƒ getName3() {
//      console.log("Namaste Javascript getName3()");
// }

// We are not invoking the function.
// We are just logging the function.
// It actually prints the function itself.

console.log("-----------------------------------------------------------------------------------------------------")

console.log(getName4);

function getName4() {
    console.log("Namaste Javascript from getName4()");
}

// Now the output for the above code will be
// ƒ getName4() {
//      console.log("Namaste Javascript from getName2()");
// }

// When the function is printed before the initialization
// of the function, it still prints the function itself.

console.log("-----------------------------------------------------------------------------------------------------")

console.log(getName5);

var getName5 = () => {
    console.log("Namaste Javascript from getName5()")
}

// Now the output for the above code will be
// undefined
// Because getName5() is an arrow function.
// And during execution of the code, in memory allocation phase,
// arrow function is considered like a variable and undefined is assigned to getName3 instead of the function code.

console.log("-----------------------------------------------------------------------------------------------------")


// Note:
// To debug, go to the Inspect page -> Sources -> select Index.js file.
// Keep debug point on 1st line.
// Once the page is refreshed, the debugging starts and in the Scope tab,
// the memory allocated to the variables and functions can be seen such as x = undefined, getName = ƒ getName() etc.

// The Execution Contexts can be viewed in the Sources tab -> Call Stack tab.
