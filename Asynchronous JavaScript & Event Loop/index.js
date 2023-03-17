// Note: The output of this .js file can be viewed on the index.html page.
// Open the index.html page in a browser, go to Inspect page -> Console tab.

console.log("---How JS engine executes the code using Call Stack?---");

// So JavaScript is a Single-Threaded language.
// It has 1 Call Stack and it can only do one thing at a time.
// The Call Stack is present inside the JavaScript Engine.
// All the code of JavaScript is executed inside the Call Stack.

// Here is an example.

function a() {
    console.log("Inside a()");
}

a();
console.log("End");

// When the JavaScript Engine executes the above code, first the code is read line by line.
// A global execution context is created and pushed to the Call Stack.
// Now it allocates memory to variable a i.e., it assigns the function code to a.
// After this, no more variables/functions to allocate memory.
// Now a() is invoked.
// So when a function is executed, a new global execution context is created and pushed to the Call Stack.
// Now "Inside a()" is printed.
// There are no other statements to print.
// So the execution context of a() is popped out of the Call Stack.
// Now it is in the global execution context and reads next line. "End" is printed.
// After this there are no other statements to execute.
// So the global execution context is also popped off from the Call Stack.

// This is how JavaScript Engine executes the code.

// So the main job of the Call Stack is to execute whatever comes inside it.
// That's all it does. It does not wait for anything.
// If you give it anything, it just quickly executes that.
// Hence, Time, Tide and JavaScript waits for none!
// Because, all JavaScript code is executed in Call Stack and the call stack won't wait for anything.

console.log("---How JS engine executes the code using Call Stack?---");

console.log("---How does JavaScript perform async tasks?---");

// What if we need to wait for something?
// What if we have a program/script which needs to be run after 5 seconds?
// Can we do that? We can't! Because whatever comes to the Call Stack, it is immediately executed.
// Call Stack does not have a timer.

// So we need something which has a timer and executes a program/script after certain amount of time.

// Browser has JavaScript Engine.
// JavaScript Engine has Call Stack.
// Inside Call Stack the code runs.

// The browser is one of the most remarkable creation in the history of mankind!
// The browser has the JS Engine and also a local storage.
// The browser has a timer as well.
// The browser has the URL. It has the super power of communicating to the external world.
// The browser communicates to a website/server, gets data and displays it in the UI.
// The browser also has access to other things like bluetooth, geo location and a lot of other stuff.

// So the JavaScript code that runs inside the Call Stack need to access other features of the browser right.
// To access those features, some connection is needed between the JS Engine and the features of the browser.
// Here comes Web APIs!

console.log("---How does JavaScript perform async tasks?---");

console.log("---Web APIs in JS---");

// So to access the features of the browser, we need Web APIs.
// Some of the Web APIs below
// setTimeout()
// DOM APIs
// fetch()
// Local Storage
// Console
// Location

// All of the above are not part of JavaScript!!!
// These are part of the browser.
// These are the connection between JS Engine and the features of the browser.
// Browser gives access inside the Call Stack/JS Engine to use the features of the browser.
// The features of the browser are accessible inside the Call Stack using the Global Object i.e., Window Object.

// In case of browsers, browsers give JS Engine the facility to use the features through a keyword known as window.
// So if we have to use a timer, we can use like window.setTimeout() in JavaScript code.
// It can be accessed without window keyword as well. Like setTimeout() because these Web APIs are in global scope/global object.
// So, basically the browser kind of wraps all these Web APIs into an object called Window Object and gives access to Window Object to the Call Stack/JavaScript Engine.

console.log("---Web APIs in JS---");

console.log("---How setTimeout Works behind the scenes in Browsers---");

// Code Snippet

console.log("Start");

setTimeout(function cb() {
    console.log("Inside Callback Function");
}, 2000);

console.log("End");

// The output for the above code is
// Start
// End
// Inside Callback Function

// The above code executes as below
// 1st "Start" is printed in the console.
// Then setTimeout function is registered with a timer.
// Then "End" is printed in the console.
// After this, all the execution contexts are popped out of the Call Stack.
// But after this, the callback function needs to be executed.
// As we know, all the code are executed from the Call Stack. So we need the callback function inside the Call Stack.
// Here comes Event Loop & CallBack Queue!

console.log("---How setTimeout Works behind the scenes in Browsers---");

console.log("---Event Loop & CallBack Queue---");

// So we already know that the setTimeout function is registered with a timer.
// Once the timer expires, the callback function has to go to the Call Stack.
// But it cannot directly go into the call stack.
// It goes to the call stack through the callback queue.
// So once the timer expires, the callback function is put into the callback queue.
// The job of the event loop is to check the callback queue and put the functions
// that are inside the callback queue into the call stack when the callstack is empty.
// So the event loop acts like a gatekeeper and checks if we have something in the callback queue. If it finds something, it just puts into the call stack.
// Once the callback function is pushed into the call stack, a new execution context is created to execute the callback function as usual.

console.log("---Event Loop & CallBack Queue---");

console.log("---How Event Listeners Work?---");

// In the above code snippet, if we have the below code instead of setTimeout function,
// document.getElementById("btn")
// .addEventListener("click", function db() {
//      console.log("Inside Event Listener");
// });

// Similar to the setTimeout function, addEventListener also registers the callback function and attaches the event to it.
// Once the event is triggered, (for example, a click event or a mouse hover event etc.) the callback function is pushed to callback queue
// and then the event loop takes it from callback queue and pushes it to the call stack.

console.log("---How Event Listeners Work?---");

console.log("---Why do we need Callback Queue?---");

// The event loop can directly take the callback function from the Web APIs' environment and push it to the call stack right.
// No. It doesn't work that way.
// We need a callback queue.
// Suppose a user clicks a button 3 or 4 times continuously, in that case, the callback function is pushed to the callback queue 4 times.
// So the event loop listens to the callback queue and pushes the functions to the call stack one by one.
// That is the reason we need a callback queue.

console.log("---Why do we need Event Loop?---");

console.log("---How fetch() function works?---")

// Code Snippet

console.log("Start");

setTimeout(function callbackTimeout() {
    console.log("Inside callbackTimeout()");
}, 3000);

fetch("https://api.netflix.com")
.then(function callbackFetch() {
    console.log("Inside callbackFetch()");
});

// After the above statement, assume there are a lot of codes here before the "End" log statement.

console.log("End");

// NOTE: Output of the above snippet can be ignored as it might have some errors.

// fetch() does a network call and returns a Promise.
// The callback function is executed once the promise is resolved.

// So the above code executes as usual i.e., creates execution context and pushes into the call stack etc..
// The setTimeout and fetch registers it's functions in the Web APIs' environment.
// Once setTimeout is registered, the timer starts.
// callbackTimeout() waits for the timer to expire.
// callbackFetch() waits for the data to be returned from the Netflix server.
// Let's say after 50ms data is returned from netflix server.
// Now the callback function is ready to be executed. Isn't it?
// Ideally it should go to the callback queue and get executed right.
// No. It doesn't work that way.

// Here comes MicroTask Queue.

console.log("---How fetch() function works?---")

console.log("---MicroTask Queue---");

// Just like the callback queue, there's something known as MicroTask Queue.
// It is exactly similar to the callback queue. But it has higher priority.
// The functions inside the microtask queue are executed first and then the functions in callback queue are executed.
// What comes inside microtask queue ?
// The callbackFetch() function comes to the microtask queue.
// Basically the promises/network calls will go to the microtask queue.

// And the job of the event loop is to check whether the call stack is empty and if it's empty, then it gives chance to all
// the functions that are in the queues (Callback queue/MicroTask queue).
// That's how it works.

// So now the data from the netflix server is returned and the function is already pushed to the microtask queue.
// After the statement of the netflix server call, there are a lot of lines of code and it takes some time to execute.
// But we have the callback function in the microtask queue waiting to be executed.
// So, in the main thread, the other lines of code after the netflix server call is executed and the callback function
// is waiting in the microtask queue.
// Meanwhile the other lines of code gets executed, the timer also expires right.
// The browser does a lot of things parallely.
// JavaScript engine only does 1 thing at a time.
// Once the timer expires, the callbackTimeout() function is pushed to the callback queue and it is waiting to be executed.

// Now the other lines of code is still executing, timer is expired, callbackFetch() and callbackTimeout() are waiting to be executed.
// Now the job of the event loop is to continuously check whether the callstack is empty.
// Suppose the other lines of code is finished executing now, and log statement prints "End".
// Now there's nothing else to execute.
// Now the global execution context is popped out of the call stack.
// Now there are functions in both microtask queue and callback queue.
// Because microtask queue has higher priority, it gives chance to the callbackFetch() to get into the call stack.
// So callbackFetch() is executed and popped out of the call stack.
// Now event loop pushes callbackTimeout() to the call stack and it is executed.

console.log("---MicroTask Queue---");

console.log("---What are MicroTasks?---");

// The MicroTask queue is given priority.
// So what can come into the MicroTask queue?
// All the callback functions which come through promises will go to the MicroTask queue.
// And there's something known as Mutation observer.
// Mutation observer basically keeps on checking whether there's a mutation in the DOM tree.
// If there's a mutation, it can execute some callback function.
// So the callback functions that come through promises and mutation observer goes inside the MicroTask queue.

// All the other callback functions, the functions from setTimeout, eventListeners etc., goes to the Callback queue.
// The callback queue is also known as Task queue.

// If there are 3 functions in the MicroTask queue and 1 in the Callback queue,
// the event loop gives opportunity to the functions in the callback queue once all the functions from the microtask queue are completed.

console.log("---What are MicroTasks?---");

console.log("---Starvation of Functions in Callback Queue---")

// As the event loop gives chance to the functions in the MicroTask queue first,
// there's a chance that the function inside the microtask creates one more function
// and that also gets pushed to the microtask queue, and that inturn creates one more function in microtask queue and so on.

// The tasks/functions in the callback queue will never get a chance to execute right.
// There's a possibility for the tasks in the callback queue to not get executed for a long time.
// This is a possiblity. This can happen.
// This is known as Starvation of Functions in Callback Queue.

console.log("---Starvation of Functions in Callback Queue---")

// Refer README.md for more details.
