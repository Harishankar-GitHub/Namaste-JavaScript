// Note: The output of this .js file can be viewed on the index.html page.
// Open the index.html page in a browser, go to Inspect page -> Console tab.

console.log("---JavaScript Runtime Environment---");

// Javascript can run inside a browser, inside a server, inside a smart watch, inside a smart bulb, inside a robot and many more.
// How is it possible ?
// Because of the JavaScript Runtime Environment.
// JavaScript Runtime Environment is like a big container which has all the things required to run the JavaScript code.
// JRE has a JS Engine, a set of APIs to connect to the outer environment, an event loop, a callback queue, a microtask queue etc.

console.log("---JavaScript Runtime Environment---");

console.log("---Browser and Node.js JS Runtime---");

// JRE is not possible without the JS Engine.
// JS Engine is the heart of JRE.
// A browser can execute the JavaScript code just because it has the JavaScript Runtime Environment.
// Every browser has the JavaScript Runtime Environment.
// Node.js also has JavaScript Runtime Environment.
// Node.js is an open source JavaScript Runtime Environment, which means it has everything that is required to run JavaScript code.
// Hence Node.js can run the JavaScript code outside the browser.

// If we have to run JavaScript code inside a water cooler, what do we need? - A JavaScript Runtime Environment.
// The code can connect to the water cooler APIs (for example: getWaterLevel API).

// The APIs are different in case of browser, in case of node and sometimes it is common also.
// For example, setTimeout API is present inside the browser as well as node js.
// Even though there are few common APIs, internally they are implemented differently.
// setTimeout() of browser might have a different implementation compared to the implementation of node.

console.log("---Browser and Node.js JS Runtime---");

console.log("---List of JavaScript Engines---");

// https://en.wikipedia.org/wiki/List_of_ECMAScript_engines

// We can create our own JS Engine.
// 1 important protocol for a JS Engine is following the standards (ECMAScript language standard).
// ECMAScript is like a governing body of JavaScript Language.

console.log("---List of JavaScript Engines---");

console.log("---Myths about JS Engine---");

// JS Engine is not a machine.
// JS Engine is just like a normal program which is written in low level languages.
// For example: Google's V8 Engine is written using C++.
// JS Engine just takes in the code that we write, converts to machine level code and executes it.

console.log("---Myths about JS Engine---");

console.log("---JS Engine Architecture---");

// JS Engine basically takes the readable code as the input.
// This code goes through 3 major steps.
//  1. Parsing
//  2. Compilation
//  3. Execution

console.log("---JS Engine Architecture---");

console.log("---Syntax Parsers and Abstract Syntax Tree---");

// During the parsing phase, the code is broken down into tokens.
// For example: let a = 7
// let is a token, a is a token and so on.

// There is something called syntax parser.
// The job of the syntax parser is to basically take the code and convert into an AST (Abstract Syntax Tree).
// Checkout astexplorer.net to view the AST for a piece of code.
// The AST that is generated in the previous step is passed on to the compilation phase.

console.log("---Syntax Parsers and Abstract Syntax Tree---");

console.log("---Compilation & Execution of JS---");

// JavaScript has something known as Just In Time Compilation.
// What is an intepreter, compiler?
// Is JavaScript an interpreted language or a compiled language.

// In many programmming languages, code is executed using an interpreter.
// Interpreter starts executing code line by line and it doesn't know what might happen in the next line.
// Meanwhile other languages uses a compiler to execute the code.
// In this case, whole code is compiled before executing.
// So the code is compiled and a new code is formed which is an optimised version of the code and the optimised code is executed.

// There are both pros and cons in intrepreted and compiled language.
// In interpreted language, the code execution is faster because it need not wait for the code to be compiled.
// In case of compiler, we have more efficiency.

console.log("---Compilation & Execution of JS---");

console.log("---Is JavaScript an interpreted language or a compiled language?---");

// So JavaScript is an interpreted language or a compiled language?
// It behaves like both.
// It depends on the JS Engine.

// In the initial version of JS Engine, it was developed as an interpreted language.
// Because at that time, the code was mostly run on browsers and browsers can't wait to compile the code.
// In today's world, most of the modern browsers, JS Engines, uses an interpreter + compiler together.
// So it depends on the JS Engine whether it is an interpreted or a compiled language.

// JIT Compilation is best of both worlds.
// It uses an interepreter as well as a compiler to execute the code.

// So the compilation and execution of JS go hand in hand.
// So after parsing the code we got AST.
// AST then goes to the Interpreter and it converts the high level code to byte code and sent for execution.
// While it is executing, it takes help of the compiler to optimise the code.
// The compiler talks to the interpreter while the code is being executed and optimises the code.
// This can happen in multiple phases.
// All JS Engines have their own algorithm of doing it.
// So the job of compiler is to optimise the code as much as it can on the runtime which is why it is known as Just In Time Compilation.

// In some JS Engines, there's something known as AOT - Ahead Of Time Compilation.
// In this case, the compiler takes a piece of code which is going to be executed later and tries to optimise it as much as it can.
// Also it produces the byte code which is then goes to the execution phase.

// The execution step is not possible without 2 major components of JS Engine.
// Those 2 are the memory heap and the call stack.

console.log("---Is JavaScript an interpreted language or a compiled language?---");

console.log("---Garbage Collector - Mark & Sweep Algorithm---");

// Garbage collector basically tries to free up some memory space whenever possible.
// Whenever a function is not being used, or a timeout is cleared, garbage collector collects these and sweeps it.
// It uses an algorithm which is known as Mark & Sweep Algorithm.
// This algorithm is widely used across garbage collectors, not just for JavaScript.
// There are other forms of optimisations that a compiler does to the code such as inlining, copy elision, inline caching etc.

console.log("---Garbage Collector - Mark & Sweep Algorithm---");

console.log("---Fastest JavaScript Engine---");

// As of today, Google's V8 Engine is considered to be the fastest among all the JS Engines ever created.
// In V8 Engine, the name of the interpreter is Ignition and the name of the compiler is Turbo Optimising Compiler.

console.log("---Fastest JavaScript Engine---");

// Refer README.md for more details.
