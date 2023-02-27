// Note: The output of this .js file can be viewed on the index.html page.
// Open the index.html page in a browser, go to Inspect page -> Console tab.

console.log("-----------------------------------------------------------------------------------------------------")

var x = 1;

a();
b();

console.log("a() and b() are executed")
console.log(x)

function a() {
    console.log("Inside a()")
    var x = 10;
    console.log(x);
}

function b() {
    console.log("Inside b()")
    var x = 100;
    console.log(x);
}

console.log("-----------------------------------------------------------------------------------------------------")

// The output of the above code will be
// Inside a()
// 10
// Inside b()
// 100
// a() and b() are executed
// 1

// In the Inspect page -> Sources tab -> Scope tab
// There is Global and Local.
// The var x = 10 and var x = 100 in a() and b() functions respectively are stored in Local Scope.
// var x = 1 is stored in Global Scope.
