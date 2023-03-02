// Note: The output of this .js file can be viewed on the index.html page.
// Open the index.html page in a browser, go to Inspect page -> Console tab.

console.log("-----------------------------------------------------------------------------------------------------")

console.log(b);
// console.log(a);
// Commenting the above code so that the code below will execute.
let a = 10;
var b = 100;

// The output of the above code will be

// undefined
// Uncaught ReferenceError: Cannot access 'a' before initialization
// at index.js:7:13

// Because var is in global space.
// let is in a separate memory space called Script.
// This can be seen in the Inspect Page -> Sources -> Scope Tab.
// So let and const variables cannot be accessed before it is initialized.

console.log("-----------------------------------------------------------------------------------------------------")

let c = 10;
console.log(c) ;

console.log("-----------------------------------------------------------------------------------------------------")

// console.log(z);
// console.log(e);
// console.log(d);

// Uncomment the above log statements one at a time and run to see the below output.

let d = 5;
var e = 100;

// The output of the above code (if each log statement run once at a time)
// will be

// index.js:30 Uncaught ReferenceError: z is not defined
// at index.js:30:13

// undefined

// Uncaught ReferenceError: Cannot access 'd' before initialization
// at index.js:32:13

// Because z is not declared anywhere in the code.
// e is declared. But at the line where we have log statement, it will print undefined.
// d is a let variable and it is accessed before initialization. Hence it throws ReferenceError: Cannot access 'd' before initialization.

// In the console, if we type window.e or this.e
// It prints 100.
// Because variable e is attached to the global space.
// But for window.d or this.d it prints undefined.
// It treats like a variable that doesn't exist.

console.log("-----------------------------------------------------------------------------------------------------")

// console.log("this log statement will not be logged because of redeclaraton of let variable");
// let x = 1;
// let x = 1;

// Uncomment the above code to see the below error.

// The above code will throw error.
// let is a little more strict than var.
// Redeclaration of let variables is not possible.

// The output of the above code wil be

// Uncaught SyntaxError: Identifier 'x' has already been declared (at index.js:62:5)

// When let variables are redeclared, NO OTHER CODE WILL BE RUN/EXECUTED.
// The error is thrown upfront.
// Even the code before the redeclaration will not be executed.

// For example, When variable a is declared with let, same variable cannot be declared with var in the same scope.
// But variables declared using var can be redeclared.

console.log("-----------------------------------------------------------------------------------------------------")

let f;
f = 25;

const g = 30;

console.log(f);
console.log(g);

// const h;
// h = 35;
// Uncomment the above code to see the below error.

// const i = 40;
// i = 45;
// Uncomment the above code to see the below error.

// const behaves very much similar to the let variables.
// But there's a difference. It is even more strict than let.

// The output of the above code will be
// 25
// 30
// Uncaught SyntaxError: Missing initializer in const declaration (at index.js:93:7)
// Uncaught TypeError: Assignment to constant variable.
// at index.js:98:3

// let variables can be declared and assigned value later.
// But the same can't be done in const. It expects a value to be assigned in the same line.

// In this case as well, NO OTHER CODE IS RUN/EXECUTED.
// The error is thrown upfront.

// When a variable with const is assigned a value in the same line
// and assigned another value later, it throws Uncaught TypeError: Assignment to constant variable.

// So there are 3 ways of declaring variables.
// let, const and var

// Which one to use?

// If the value won't change later, go with const. It is the best one and more strict.
// If not const, try to use let wherever possible because let has a temporal dead zone
// and you won't run into unexpected errors such as undefined etc.
// Keep var aside in day to day coding. There might be cases where var might have to be used. But have to use carefully.

// The temporal dead zone can sometimes mess our life as a developer.
// It can lead to a lot of unexpected errors.
// So the best way to avoid these temporal dead zone is to always to put declarations and initializations
// on the top.
// So, as soon as the code starts running, it hits the declarations and initializations part at the beginning.
// By keeping the declarations and initializations in the top few lines of the code, we can shrink the temporal dead zone to 0.

console.log("-----------------------------------------------------------------------------------------------------")

// Refer README.md for more details.
