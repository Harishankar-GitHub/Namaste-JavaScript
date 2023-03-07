// Note: The output of this .js file can be viewed on the index.html page.
// Open the index.html page in a browser, go to Inspect page -> Console tab.

console.log("---Callback Functions---");

function x(y) {
    console.log("Inside x()");
    y();
}

x(function y() {
    console.log("Inside y()");
});

// In the above code, we call x() and we pass y() as an argument.
// y() is a callback function.
// Here, the responsibility of y() is given to another function.
// Now it is upto x() to call y() whenever it wants.
// So y() is called sometime later in the code.
// That is why it is known as Callback Functions.


console.log("---Callback Functions---");

console.log("---How Callback Functions are used in Asynchronous Tasks ?---");

setTimeout(function () {
    console.log("Inside setTimeout()");
}, 5000);

function z() {
    console.log("Inside z()");
}

z();

// Here the output will be
// Inside z()
// Inside setTimeout()

// Because JavaScript is a Synchronous and Single-Threaded language.
// It executes line by line.
// So first it registers the setTimeout function (i.e., stores the callback function with the timer.) and moves to the next line.
// Then z() is called. So, Inside z() is printed.
// Once 5000ms is over, Inside setTimeout() is printed.

// So, using setTimeout() we are passing a function and making it execute after a certain amount of time.
// setTimeout asynchronous operation is not possible without the callback functions. 

// In the browser -> Inspect Page -> Sources Tab.
// If we run in debug mode with debug points in line 32 and in line 28.
// In line 32, we can observe anonymous and z in the call stack.
// After this, once we resume immediately, we can observe the call stack is empty.
// After 5000ms we can observe one entry in the call stack for the setTimeout function.

console.log("---How Callback Functions are used in Asynchronous Tasks ?---");

console.log("---Blocking the main thread---");

// JavaScript has only one Call Stack. It can also be called as the main Thread.
// All these codes are executed through this Call Stack only.
// If any operation blocks the Call Stack, that is known as Blocking the main thread.

// For example, if function a() takes 30 seconds to execute,
// JavaScript has only 1 call stack and it cannot execute any other function in the code.
// So everything will be blocked.
// So, main thread should never be blocked.
// We should always try to use async operations for things which take time.

console.log("---Blocking the main thread---");

console.log("---Event Listeners---");

document.getElementById("clickMe")
.addEventListener("click", function xyz() {
    console.log("Button Clicked!");
})

// We are getting the element from HTML.
// Adding an event listener.
// On click of that element xyz() callback function is called.

// Basically, when javascript executes this code, it will pick up the element,
// add an event listener, and the event is click in this case, and when that event occurs,
// it will call the callback function.

// So when the button is clicked, the callback function automatically comes into the call stack.
// To see this in the Call Stack, keep a debug point in the log statement of callback function and click the button.
// Once it is clicked, xyz is pushed to the call stack.

// ------------------------------------------------------------------------------------

// Below code prints the number of times the button is clicked like
// Button clicked! 1
// Button clicked! 2
// Button clicked! 3 and so on.

let count = 0;
document.getElementById("clickMeWithCounterWithoutClosure")
.addEventListener("click", function xyz() {
    console.log("Button Clicked!", ++count);
})

// The above code works fine. But using a global variable is not a good solution because some other code might change the value of the count.
// So how can we make a closure and ensure that the count is secure and cannot be modified by any other code?
// Below is the code

function attachEventListener() {
    let count = 0;
    document.getElementById("clickMeWithCounterWithClosure")
    .addEventListener("click", function xyz() {
        console.log("Button Clicked!", ++count);
    })  
}

attachEventListener();

// In the above code, the callback function xyz() forms a closure with the count variable.
// The closure can be seen in the Scope tab while running in debug mode.

// In the Inspect Page -> Elements Tab -> HTML code is displayed.
// If we click on the code for the button, in the Event Listeners Tab we can see the handler attached to the button.
// That handler is nothing but the callback function that we passed here in the code.
// Inside the handler, we can see the Scopes of the function i.e., lexical environment of the parent execution context till global execution context.

console.log("---Event Listeners---");

console.log("---Garbage Collection and Removing Event Listeners---");

// Why do we need to remove event listeners ?
// Event Listeners are heavy i.e., it consumes memory.
// Whenever an event listener is attached, it forms a closure.

// With reference to the event listeners code, even though nothing is running, and the call stack is empty,
// there will be the closures of the callback functions.
// Because it holds the value of count and it has to keep track of it.
// It can't free up that space.

// This is the reason for removing event listeners when they are not used.

// So once the event listeners are removed, all the variables held by the closures will be garbage collected.

console.log("---Garbage Collection and Removing Event Listeners---");

// Refer README.md for more details.
