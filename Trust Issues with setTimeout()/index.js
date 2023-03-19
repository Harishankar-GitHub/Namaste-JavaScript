// Note: The output of this .js file can be viewed on the index.html page.
// Open the index.html page in a browser, go to Inspect page -> Console tab.

console.log("---Introduction---");

// setTimeout has trust issues.
// setTimeout with a delay of 5000ms does not always wait for 5 exactly seconds.
// There are trust issues.
// setTimeout does not guarantee that the callback method will be called exactly after 5 seconds.
// It might also take 6 seconds or may be even 10 seconds.
// It all depends on the call stack.

console.log("---Introduction---");

console.log("---Why we have trust issues with setTimeout?---");

// Code Snippet

console.log("Start");

setTimeout(function cb() {
    console.log("Inside Callback Function");
}, 5000);

console.log("End");
// Lot of lines of code here.

// In the above code, let's assume there are a lot of lines of code after "End" log statement.
// And it takes 10 seconds to execute the code.
// In the call stack, the global execution context will be present and it won't go till the code is executed.
// But the timer expires after 5 seconds.
// Once the timer expires, the callback function is pushed to the callback queue and is ready for execution.
// The event loop is constantly checking if the call stack is empty.
// Once the code in main thread completes executing, the callback function is pushed to the call stack and executed.
// So in this case, even though the timer is set for 5 seconds, it is executed after 10 seconds.
// This is also known as the concurrency model in JavaScript.

console.log("---Why we have trust issues with setTimeout?---");

console.log("---Code demonstration of setTimeout delay---");

console.log("Start");

setTimeout(function cb() {
    console.log("Inside Callback Function");
}, 5000);

console.log("End");

// In the below code, simulating to block the main thread for 10 seconds.
// So that the callback function is not executed after 5 seconds.

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate <= startDate + 10000) {
    endDate = new Date().getTime();
}

console.log("While loop ends here after 10 seconds");

console.log("---Code demonstration of setTimeout delay---");

console.log("---Discussion about setTimeout(0)---");

console.log("Start");

setTimeout(function cb() {
    console.log("Inside Callback Function");
}, 0);

console.log("End");

// In the above code, the timeout is given as 0ms.
// So the function will not have to wait for even a single ms to be executed.

// Output will be
// Start
// End
// Inside Callback Function

// In this case, it won't print Start, Inside Callback Function and End.
// Even though the timeout is set for 0ms, the callback function has to go through the callback queue.
// That's why the output is Start, End and Inside Callback Function.

console.log("---Discussion about setTimeout(0)---");

// Refer README.md for more details.
