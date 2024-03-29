# :sparkles: Namaste JavaScript :sparkles:

## [Season 1](https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP)

- JavaScript is the most hated programming language in the world! :worried:
- You know what's the most loved programming language in the world? It's JavaScript! :heart_eyes:
- And you know what's the most popular programming language in the world? It's again JavaScript! :sunglasses:

## JavaScript Documentation
> Click [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript) to view the JavaScript Documentation.

## How JavaScript works ?

***"Everything in JavaScript happens inside an Execution Context"***

- Execution Context is like a box which has **2 components**.
- **1st component** of Execution Context is the **Memory Component (also known as Variable Environment)**.
	- Memory Component has variables and functions in a key-value pair format.

- **2nd component** of Execution Context is the **Code component (also known as Thread of Execution)**.
	- This is the place where code is executed 1 line at a time.
	- Code component is just like a thread in which the whole code is executed 1 line at a time.

***"JavaScript is a synchronous single-threaded language"***

- Single-Threaded means JavaScript can only execute 1 command at a time.
- Synchronous Single-Threaded means JavaScript can execute only 1 command at a time and in a specific order.
	- That means, it can only go to the next line once the current line has finished executing.

---

## How JavaScript Code is executed?

### Sample Code Snippet
```javascript
var n=2;
function square(num) {
	var ans = num * num;
	return ans;
}
var square2 = square(n);
var square4 = square(4);
```

- When a JavaScript program is run/executed, an **Execution Context is created**.
- Execution Context is created in 2 Phases
	- **Creation Phase** (also known as *Memory Creation Phase*)
	- **Code Execution Phase**

- In the **1st phase**, i.e., *memory creation phase*, javascript will **allocate memory to all the variables and functions**.
	- For **variables**, it allocates a **special value** called **undefined**.
	- For **functions**, it literally allocates **the whole code of the function**.
	- So in the above code, first JavaScript will allocate memory to n (*n = undefined*).
	- Next it will allocate memory to square function (square = ```the whole code of the function```)
	- Next it will allocate memory to square2 and square4 (*square2 = undefined, square4 = undefined*).
- In the **2nd phase**, i.e., *code execution phase*, javascript **once again runs through whole code** line by line and it executes the code now. This is the point where all the functions, logic, calculations etc. are executed.
	- Now when it encounters the 1st line in the code ```var n = 2;```, it actually places/assigns the 2 to the n.
	- Now it moves to the next line ```function square(num) {```. In this line, there's nothing to execute. It is just a starting of a function.
	- Next, it moves to the line that is after the function code ```var square2 = square(n);```
	- In this line, a function is invoked.

### Functions are :heart: of JavaScript

- They behave very differently in JavaScript compared to any other language.
- Functions here are like a mini program.
- In the above flow, the whole javascript program runs in a **Global Execution Context**.
- **Whenever a new function is invoked, a new execution context is created**.
- In the new execution context, the code of the square function is executed.
- Once the execution is done in the inner execution context, the value is returned to the outer execution context where the function was invoked.
- After this, the execution context to execute the function will be deleted.
- If the code has any other function or any line that invokes a function, again a new execution context will be created.
- Once all the code is executed, the Global Execution Context is also deleted.
> **This is how JavaScript Code is executed**.

## Call Stack in JavaScript
- When there're **a lot of function calls** inside a function, **lot of execution contexts are created internally** and it can go to any deep level.
- And it is **very difficult** for JavaScript engine **to manage** and **it does it very beautifully**.
- JavaScript engine manages a stack, i.e., call stack.
- The call stack is like a stack and everytime in the bottom of the stack, we have the Global Execution Context.
- That means whenever any JavaScript program is run, this call stack is populated with the Global Execution Context.
- Whenever a new funciton is invoked/new execution context is created, that execution context is put inside the stack and so on.
- Now when a JavaScript code is executed, all the execution contexts are pushed to the stack and the execution context in the top of the stack is executed first and once done, the value is returned, the execution context is popped off from the stack and the control is taken over by the next execution context in the call stack and so on.
- So this call stack is only for **managing these execution contexts**.
- ***Call stack maintains the order of execution of execution contexts***.
- Call stack is also known by a lot of fancy names such as,
	- Execution Context Stack
	- Program Stack
	- Control Stack
	- Runtime Stack
	- Machine Stack etc.

---

## Hoisting in Javascript
> Hoisting is a phenomena in Javascript where **variables and functions can be accessed without any error even before they are iniitialized**.

> Click [here](https://github.com/Harishankar-GitHub/Namaste-JavaScript/tree/main/Hoisting%20in%20Javascript) to go to the code.

---

## How Functions work in Javascript? & Variable Environment

> Click [here](https://github.com/Harishankar-GitHub/Namaste-JavaScript/tree/main/Functions%20and%20Variable%20Environment) to go to the code.

---

## SHORTEST JS Program - window & this keyword

> Click [here](https://github.com/Harishankar-GitHub/Namaste-JavaScript/tree/main/Shortest%20JS%20Program) to go to the code.

>- When the program is run/debugged (***even if there's no code to execute***), javascript engine still creates global execution context and also sets up the memory space.
>- Though there's nothing to set up, still it does it's job.

### window keyword

>- Javascript engine also creates a **Window**.
>- Once the program is run/html page is refreshed, **In the Console tab, type `window` and click enter**.
>- The Window object is printed and **lots of variables and functions can be seen**.
>- These are **created** by javascript engine **into the Global space**.
>- These variables and functions **can be accessed anywhere in the javascript program**.
>- This **functionality is given by javascript engine**.

### this keyword

>- Just like the Window, javascript engine also creates, a **"this"** keyword.
>- When we type `this` in the Console tab similar to `window`, an object is printed.
>- It is nothing but the same Window object.
>- At the global level, **"this" points to window object**.

>- Window is a global object which is created along with the global execution context.
>- So whenever a javascript program is run/executed, **a global object is created, a global execution context is created, and along with that, a "this" variable is created**.

>- The global object, **in case of browsers**, it is **known as window**.
>- Javascript is not only run on browsers. It is also run on servers and a lot of other places.
>- **Wherever javascript is running, there must be a javascript engine**.
>- In Chrome, it is known as V8. Mozilla has it's own, Safari has it's own.
>- **All the javascript engines has the responsibility to create this global object**.
>- In case of browsers it is known as window, in case of Nodejs, it is known as something else. Wherever the javascript code is run, it is different.
>- But there's always a global object created.
>- Even though the file is empty/there's no code, javascript engine will create this global object.
>- **In the global execution context, "this" is equal to "window"**. It can be verified in the Console tab by typing `this == window`.

### Global Space

>- **A global space is nothing but the place where the code that is not inside a function is present**.
>- ***For example:*** 
>>- A variable `var a = 10` This is in global space.
>>- A function: `function b() {} This is in global space
>>- Another function: `function c() {var x = 10;} Here, the variable x is not in global space.

### What happens when any variables or functions created in global space ?

- These variables and functions **get attached to the global object (*i.e., window*)**.
- From the above example code snippets, variable a, b() and c() functions will be attached to the global object. The variable x that is inside c() function will not be present in the global object.
- Variables and functions that are in the global object **can be accessed using this code** `console.log(window.a);`
- `console.log(a);` also works because if `window.a` is not used, it automatically assumes that we are referring to the global space.
- `console.log(this.a);` also works because this is equal to window only.

---

## undefined vs not defined in JS

> Click [here](https://github.com/Harishankar-GitHub/Namaste-JavaScript/tree/main/undefined%20vs%20not%20defined%20in%20JS) to go to the code.

- ***undefined*** is a very special keyword in Javascript.
- It is not there in other languages.
- It has a lot to do with how javascript code is executed.
- When a javascript program is run/executed, javascript engine creates a global execution context and allocates memory to all the variables and functions even before a single line of code is executed.
- *undefined* is assigned to the variables before the code is executed.
- ***undefined* is like a placeholder** in the memory for variables before any value is assigned.
- Javascript is a **loosely typed language** a.k.a **weakly typed language**.
- Loosely typed means it **does not attach any specific datatype** to its variables.
- If a variable "a" is created and a string is assigned to it, later in the code, the variable can be assigned with numbers, boolean values etc.

### Mistakes to avoid while using undefined
- `var a = undefined` This code is **not a good practice**.
- *undefined* means no value is assigned to the variable in memory creation phase.
- Again if we assign *undefined* to that variable, it will lead to confusion and inconsistency.
- *undefined* is used to know if any value is assigned to a variable and that's the purpose of *undefined* keyword.

---

## The Scope Chain, Scope & Lexical Environment

> Click [here](https://github.com/Harishankar-GitHub/Namaste-JavaScript/tree/main/The%20Scope%20Chain%2C%20Scope%20%26%20Lexical%20Environment) to go to the code.

### Scope

- **Scope in JavaScript is directly related to Lexical Environment**.
- Scope means where you can access a specific variable or a function in the code.

#### 2 Aspects of Scope

- **What is the scope of this variable "b" in the below code?**
```javascript
function a() {
	var b = 10;
	c();

	function c() {
	}
}
a();
```
- That means, where can the variable "b" be accessed?
- Other aspect of scope is, **is variable "b" inside the scope of c() function?**

### Lexical Environment
- **Wherever an execution context is created, a Lexical Environment is also created**.
- ***Lexical Environment is the local memory along with the reference of the lexical environment of it's parent***.
- We can say function c() is lexically sitting inside function a().
- With the example of the above code, the lexical environment of function c() has the memory space of function c() along with the lexical environment of function a().
- The lexical environment of the global space will have the memory space of it's variables and functions and doesn't have access to any parent lexical environment (*it points to null*) because the global space is the starting point and it doesn't have any parent.
- **Lexical means, in a hierarchy, or in a sequence**.
- Function a() is lexically inside the global scope.
- In terms of code, **lexical means where the code is present** (*i.e., a particular code/variable/function might be present in the outer most code/global scope or inside any function etc.*).

### Scope Chain

- The **way/mechanism** of **finding/searching** the **variables from inside any function to its parent function till the global space** is known as Scope Chain.
- Scope Chain defines whether a variable or a function is present inside the scope.
- If the Scope Chain is exhausted and the variable is not found, that means it is not inside the Scope Chain.

### View the Lexical Environment in the browser

- Run the code in debug mode and in the Inspect Page -> Sources Tab -> Click on different execution contexts that are available in the Call Stack tab and see the Scope Tab.
- The global execution context will have Global scope.
- The execution contexts of any function will have the local scope, parent scopes (if any) and the global scope.

---

## let & const in JS and Temporal Dead Zone

> Click [here](https://github.com/Harishankar-GitHub/Namaste-JavaScript/tree/main/let%20%26%20const%20in%20JS%20and%20Temporal%20Dead%20Zone) to go to the code.

- **let & const declarations are Hoisted**.
- But they are hoisted very differently than the var declarations.

### Temporal Dead Zone
- Temporal Dead Zone is the time between the let variable is Hoisted and initialized with some value.
- **Whenever a variable is accessed when it is in the Temporal Dead Zone, it throws a ReferenceError**.

---

## Block, Scope & Shadowing in JS

> Click [here](https://github.com/Harishankar-GitHub/Namaste-JavaScript/tree/main/Block%2C%20Scope%20%26%20Shadowing%20in%20JS) to go to the code.

---

## Closures in JS

> Click [here](https://github.com/Harishankar-GitHub/Namaste-JavaScript/tree/main/Closures%20in%20JS) to go to the code.

### Uses of Closures:

- Module Design Pattern
- Currying
- Functions like once
- Memoize
- Maintaining state in async world
- setTimeouts
- Iterators
- and many more...

---

## setTimeout + Closures Interview Question

> Click [here](https://github.com/Harishankar-GitHub/Namaste-JavaScript/tree/main/setTimeout%20%2B%20Closures%20Interview%20Question) to go to the code.

---

## First Class Functions ft. Anonymous Functions

> Click [here](https://github.com/Harishankar-GitHub/Namaste-JavaScript/tree/main/First%20Class%20Functions) to go to the code.

---

## Callback Functions in JS ft. Event Listeners

> Click [here](https://github.com/Harishankar-GitHub/Namaste-JavaScript/tree/main/Callback%20Functions) to go to the code.

---

## Asynchronous JavaScript & Event Loop from scratch

> Click [here](https://github.com/Harishankar-GitHub/Namaste-JavaScript/tree/main/Asynchronous%20JavaScript%20%26%20Event%20Loop) to go to the code.

---

## JS Engine Exposed

> Click [here](https://github.com/Harishankar-GitHub/Namaste-JavaScript/tree/main/JS%20Engine%20Exposed) to go to the code.

---

## Trust Issues with setTimeout()

> Click [here](https://github.com/Harishankar-GitHub/Namaste-JavaScript/tree/main/Trust%20Issues%20with%20setTimeout()) to go to the code.

---

## Higher-Order Functions ft. Functional Programming

> Click [here](https://github.com/Harishankar-GitHub/Namaste-JavaScript/tree/main/Higher-Order%20Functions) to go to the code.

---

## map, filter & reduce

> Click [here](https://github.com/Harishankar-GitHub/Namaste-JavaScript/tree/main/map%2C%20filter%20%26%20reduce) to go to the code.

---

## [Season 2](https://www.youtube.com/playlist?list=PLlasXeu85E9eWOpw9jxHOQyGMRiBZ60aX)

## Callback Hell

> Click [here]() to go to the code.
