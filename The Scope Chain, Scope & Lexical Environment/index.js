// Note: The output of this .js file can be viewed on the index.html page.
// Open the index.html page in a browser, go to Inspect page -> Console tab.

console.log("-----------------------------------------------------------------------------------------------------")

function a() {
    console.log(x);
}

var x = 10;
a();

// The output of the above code will be
// 10

// Because when the a() function is called, javascript engine will look for the value
// of x in the a() function's execution context and there won't be any.
// It will get the value of x from the global execution context.
// Hence it prints 10.

console.log("-----------------------------------------------------------------------------------------------------")

function b() {
    c();

    function c() {
        console.log(y);
    }
}

var y = 10;
b();

// The output of the above code will be
// 10

// Even though y is logged inside c() function, it will be able to access y
// which is inside the global execution context.

console.log("-----------------------------------------------------------------------------------------------------")

function d() {
    var x = 10;
    e();

    function e() {
        console.log(x);
    }
}

d();

// Here the log stmt will print 10 as has access to variable x.

console.log("-----------------------------------------------------------------------------------------------------")

function e() {
    var z = 10;
    f();

    function f() {
    }
}

e();
console.log(z);

// Here the output will be

// index.js:66 Uncaught ReferenceError: z is not defined
// at index.js:66:13

// Because variable z is defined inside e() function.
// When we try to log z outside, it throws not defined error because no value is assigned
// to the variable z outside the e() function.

// Here comes scope into picture.

console.log("-----------------------------------------------------------------------------------------------------")

// Refer README.md for more details.
