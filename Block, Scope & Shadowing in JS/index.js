// Note: The output of this .js file can be viewed on the index.html page.
// Open the index.html page in a browser, go to Inspect page -> Console tab.

console.log("-----------------------------------------------------------------------------------------------------")

{
    // Compound Statement
}

// A block is defined by the above curly braces.
// This is a perfectly valid javascript code.
// This is a Block.
// And the curly braces (block) is not doing anything.

// What is the use of this block ?
// Block is also known as Compound Statement.
// A block is used to combine multiple javascript statements into one group.

// Why do we need to group multiple statements together?
// We need to group multiple statements together so that we can use multiple statements in a place where
// javascript expects only 1 statement.

console.log("-----------------------------------------------------------------------------------------------------")

// if (true)
// Commented above code so that the below code will run.

// If only the above if statement is run (by commenting other codes in this file
// or by keeping this if statement in the last line of the file), it throws
// Uncaught SyntaxError: Unexpected end of input (at index.js:25:1)
// Why ?
// The reason is, the if statement, expects a statement, one statement.

    if (true) console.log("Inside if block");

// The above statement is perfectly valid statement.
// But if multiple statements have to be written inside this if block,
// it has to be grouped together.
// Here, block can be used and multiple statements can be grouped together.
// Like the code below.

    if (true) {
        console.log("Inside 2nd if block");
        console.log("Again inside 2nd if block");
    }

// Sometimes we use a single statement in the if block like
// if (true) console.log("Example");
// This is valid code.
// If statement doesn't have curly braces in it's syntax.
// If we want to write multiple statements in place if 1 statement, we need to use a block.
// And that is the same reason to combine multiple statements inside a block and use it with for loops,
// while loops etc.

// So this is a block and this is it's use!

console.log("-----------------------------------------------------------------------------------------------------")

// What is a Block Scope?
// Block scope means, what all variables and functions we can access inside a block.

{
    console.log("Inside a block");

    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);

    console.log("Block End");
}

    console.log("Outside block");

    console.log(a);
    // console.log(b);
    // console.log(c);
    // Commenting above code so that the below code will run.

// When we debug and see these variables' memory in the Scope tab,
// we can observe, b and c are assigned with undefined in Block scope.
// And variable a is assigned with undefined in Global scope.
// Once the code comes out of the block, let and const variables cannot be accessed.
// The Block scope inside the Scope tab is also gone.
// But var variables are accessible even outside the block.
// let and const are in block scope.
// var is in global scope.

// In the above code, when we print all variables inside and outside of the block,
// it prints all 3 variables inside the block.
// But prints only variable c outside the block and not a and b.
// Because variable a and b are let and const variables and they are in block scope.

console.log("-----------------------------------------------------------------------------------------------------")

// What is Shadowing?
// If same named variable is outside and inside a block, the variable inside the block shadows the
// outer variable.

console.log("Shadowing code start")

var d = 50
let e = 100;

{
    var d = 5;
    let e = 200;
    console.log(e);
    console.log(d);
}

console.log(d);
console.log(e);

console.log("Shadowing code end")

// The output of the above code will be
// 200
// 5
// 5
// 100

// Because initially the variable d is 50.
// Once code comes inside the block, it is changed to 5.
// Outside the block also it prints 5.

// The inner variable d is shadowed and also it modified the value of the outer variable.
// Why ?
// Because they both are pointing to the same location i.e., global space.

// Whereas the let variable is not behaving like var variables.
// Outside the block, e is assigned to 100 and inside it is assigned to 200.
// Inside it prints 200 and outside it prints 100 only.
// Because let and const are in block scope.
// The outer let variable is in Script scope and the let variable inside the block is inside Block scope.

// Shadowing is not only a concept of blocks.
// It is the same way in the function also.

console.log("-----------------------------------------------------------------------------------------------------")

// Illegal Shadowing

console.log("Illegal Shadowing code start")

var f = 20;

{
    var f = 25;
    console.log(f);
}

console.log(f);

console.log("Illegal Shadowing code end")

// The above code works.
// But a let variable outside the block is assigned with a value
// and when the same variable is reassigned with var inside a block,
// it throws SyntaxError: Identifier 'g' is already been declared.
// It is illegal shadowing.

// Example:
// a can be shadowed using b.
// That means, a is outside the block and b is inside the block.

// So var can be shadowed using a var.
// let cannot be shadowed using a var.
// let can be shadowed using a let.

// But var can be shadowed using a let. That is possible.
// Why?
// What happens when a let variable is shadowed using a var?
// When a variable is shadowing something, it should not cross the boundary of it's scope.
// In a particular scope, let cannot be redeclared right.
// So var should not cross the boundary by shadowing a let.

// What are the boundaries of var?
// var is in a funcion scope.
// When a var variable is used inside a function, it's scope is only inside the function.

// This is the reason var can be shadowed using a let but a let cannot be shadowed using a var.

// And lexical scope works the same way inside the block also.

console.log("-----------------------------------------------------------------------------------------------------")

// Refer README.md for more details.
