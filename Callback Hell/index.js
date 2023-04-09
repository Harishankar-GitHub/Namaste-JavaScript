// Note: The output of this .js file can be viewed on the index.html page.
// Open the index.html page in a browser, go to Inspect page -> Console tab.

console.log("---------------------------");

console.log("Namaste");
console.log("Javascript");
console.log("Season 2");

// The above code executes immediately.
// What if we have to execute line 7 after 5 seconds ?
// We will use a callback function.

console.log("---------------------------");

// Let's say we have a cart.

const cart = ["Shoes", "Pants", "Kurta"];

// We have access to 2 APIs.
// Create Order API, Make Payment API.
// Only if an order is created, make payment API has to be called.

// api.createOrder()
// api.makePayment()

// The above code executes asynchronously.
// How can we make it execute one after another?
// Using callback function like below.

// api.createOrder(cart, function () {
//      api.makePayment();
// })

// Now it is the responsibility of createOrder() API to call makePayment() API once order is created.
// This way we can handle async operations in JavaScript.

// Now we have another API for showing order summary.
// It has to be executed after making payment.
// So again we have to pass showOrderSummary() API to makePayment() API as a callback function.

// api.createOrder(cart, function () {
//      api.makePayment(function () {
//          api.showOrderSummary();
//      });
// });

// Now if we have an API to update the wallet after showing order summary.
// Again we have to pass it as a callback function to showOrderSummary() API.

// api.createOrder(cart, function () {
//      api.makePayment(function () {
//          api.showOrderSummary(function() {
//              api.updateWallet(); 
//          });
//      });
// });

// When we have a large code base and we have many APIs and they are dependent on other APIs,
// we end up falling into the callback hell.
// Our code starts growing horizontally instead of vertically.
// This type of code is not readable and not maintainable.
// This is the 1st problem in callback which is known as Callback Hell.
// The horizontal structure of the code is known as Pyramid of Doom.

// The 2nd problem while using callbacks is Inversion of Control.
// Losing control of code while using callbacks.

// api.createOrder(cart, function () {
//      api.makePayment();
// });

// In the above code, we passed makePayment() API to createOrder() API.
// Now it is the responsibility of the createOrder() API to call makePayment() API.
// And we are blindly trusting createOrder() API.
// createOrder() API might be in other service or some other developer wrote it.
// There could be a lot of bugs in createOrder() API.
// What if the callback function is never called ?
// What if the callback function is called twice ?
// We do not knkw what is happening in createOrder() API.

// Refer README.md for more details.
