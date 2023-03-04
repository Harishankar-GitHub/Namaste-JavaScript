// Note: The output of this .js file can be viewed on the index.html page.
// Open the index.html page in a browser, go to Inspect page -> Console tab.

console.log("-----------------------------------------------------------------------------------------------------")

function x() {
    var i = 1;

    setTimeout(function () {    // setTimeout() takes a callback function.
        console.log(i);
    }, 3000);

    console.log("Inside x()");
}

x();

// The output of the above code is
// Inside x()
// 1

// Ideally it should have waited for 3 seconds and printed 1,
// then "Inside x()" should be printed.

// But that did not happen. First it printed 1 and then "Inside x()".
// Because, the setTimeout function takes the callabck function and stores it in some place and attaches a timer to it.
// Once the timer expires, the callback function code is executed.
// But other statements in the code executes. It does not wait for the timer to complete.
// That's why "Inside x()" is printed first and 1 is printed after that.

console.log("-----------------------------------------------------------------------------------------------------")

// Code to print 1 to 5 with 5 seconds gap.

function y() {
    for (var j = 1; j <= 5; j++) {
        setTimeout(function () {
            console.log(j);
        }, j * 5000);
    }

    console.log("Inside function y() code to print 1 to 5 with 5 seconds gap");
}

y();

// The output of the above code is
// Inside function y() code to print 1 to 5 with 5 seconds gap
// 6
// 6
// 6
// 6
// 6

// Because when the above code is executed, the setTimeout function stores the callback function in a separate space and
// attaches the timer to it.
// As we know, JavaScript waits for none and it executes other statements.
// So the for loop is run and the j value is incremented to 6 after the loop.

// As we know, when a function is executed, it also remembers it's lexical environment i.e., Closures.
// In this case, the setTimeout function stores 5 copies of callback function.
// Each function has the reference to the same variable j.

// Once the timer expires, each callback function starts executing.
// At that point, the value of variable j will be 6 after the for loop.
// That's why 6 is printed 5 times and not 1 2 3 4 5.

// So how to fix this? How to print 1 2 3 4 5?
// Let's see the below code.

function z() {
    for (let j = 1; j <= 5; j++) {
        setTimeout(function () {
            console.log(j);
        }, j * 1000);
    }

    console.log("Inside function z() code to print 1 to 5 with 1 second gap");
}

z();

// In the above code, the only difference is the variable is a let variable.
// Why let ?
// So what happens is, in every iteration, when the setTimeout takes the callback function
// and stores it in a separate space, the callback function has it's lexical environment.
// i.e., function along with it's lexical environment = Closures.
// Every time the callback function is stored, it creates it's own closure with new variable j.
// let variables are stored in a Block Scope.
// So in 1st iteration, the setTimeout function stores the callback function and value of j is 1.
// In 2nd iteration the setTimeout function stores the callback function and value of j is 2 and so on.

// So each copy of callback function stored, has separate value in it's block space where j is stored.
// That's why when let variable is used, it prints 1 2 3 4 5 properly.

// What if let variable should not be used?
// How to print 1 2 3 4 5 using var variable itself?

// Let's see the below code.

function a() {
    for (var k = 1; k <= 5; k++) {
        function close(b) {
            setTimeout(function () {
                console.log(b);
            }, b * 1000);
        }
        close(k);
    }

    console.log("Inside function a() code to print 1 to 5 with 1 second gap");
}

a();

// The above code properly prints 1 2 3 4 5 using var variable as well.
// How ?
// We enclosed the setTimeout function inside close() function.
// Inside for loop, we call close() function on each iteration by passing the value of k to the argument b.
// Now each callback function is stored along with the latest value of b.
// Hence it prints 1 2 3 4 5 properly even while using var variable.


console.log("-----------------------------------------------------------------------------------------------------")

// Refer README.md for more details.
