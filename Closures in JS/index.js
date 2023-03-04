// Note: The output of this .js file can be viewed on the index.html page.
// Open the index.html page in a browser, go to Inspect page -> Console tab.

console.log("-----------------------------------------------------------------------------------------------------")

function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    y();
}

x();

// The output of the above code is
// 7

// The a is printed from function y().
// But function y() does not have variable a.
// So it tries to find the variable from it's parent execution context i.e., lexical scope.
// Now the funcion y() finds variable a and prints it.

// This is Closures in JS.

// A Closure is a function along with it's lexical environment.

console.log("-----------------------------------------------------------------------------------------------------")

// In JavaScript, a function code can be assigned to a variable like var a = function f() {}
// A function code can be passed as an argument to another function.
// A function code can be returned from a function.

function a() {
    var a = 7;
    function b() {
        console.log(a);
    }
    return b;
}

var z = a();    // function code of b() is returned from a() and assigned to var z.
console.log(z); // function code of b() is printed.

z();            // function code of b() is inside z now and when z() is called, the function code is executed.

// The output of the above code is
// ƒ b() {
//     console.log(a);
// }
// 7

// So how it prints 7 ?
// From where did it get the value ?
// When a() is called, it returns function code of b() and when the code is returned,
// it remembers it's lexical scope.
// When b() is executed inside a(), b() will have access to var a = 7 right.
// When b() code is returned, it remembers it's lexical scope.
// That's why when z() is called, it is able to print 7.

// When b() is returned, not only the function code is returned.
// A closure (function along with it's lexical scope) is returned.

// Let's say we have a() and it has b() and it has c().
// When c() function code is returned, it remembers the lexical scopes till the outer most parent function.

console.log("-----------------------------------------------------------------------------------------------------")

// Refer README.md for more details.
