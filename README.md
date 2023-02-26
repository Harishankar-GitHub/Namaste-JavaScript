
# :sparkles: [Namaste JavaScript](https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP) :sparkles:

- JavaScript is the most hated programming language in the world! :worried:
- You know what's the most loved programming language in the world? It's JavaScript! :heart_eyes:
- And you know what's the most popular programming language in the world? It's again JavaScript! :sunglasses:

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

### Call Stack in JavaScript
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