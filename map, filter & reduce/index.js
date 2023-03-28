// Note: The output of this .js file can be viewed on the index.html page.
// Open the index.html page in a browser, go to Inspect page -> Console tab.

console.log("----------------------------------------");

console.log("---Introduction---");

// map, filter and reduce are higher order functions in JavaScript.

console.log("---Introduction---");

console.log("----------------------------------------");

console.log("---Array.map() function in JavaScript---");
console.log("---Example 1---");

const arr = [5, 1, 3, 2, 6];

function double(num) {
    return num * 2;
}

console.log("Double the elements in the array: " + arr.map(double));

console.log("---Example 1---");

console.log("---Example 2---");

function triple(num) {
    return num * 3;
}

console.log("Triple the elements in the array: " + arr.map(triple));

console.log("---Example 2---");

console.log("---Example 3---");

function binary(num) {
    return num.toString(2);
}

console.log("Print the binary value for the elements in the array: " + arr.map(binary));

console.log("---Example 3---");
console.log("---Array.map() function in JavaScript---");

console.log("----------------------------------------");

console.log("---Array.filter() function in JavaScript---");
console.log("---Example 4---");

function isOdd(num) {
    console.log(num % 2);
    return num % 2;
}

console.log("Filter odd values from the array: " + arr.filter(isOdd));
// Above code can also be written using arrow functions.
// console.log("Output of Example 4: " + arr.filter(num => num % 2 != 0));

console.log("---Example 4---");

console.log("---Example 5---");

console.log("Filter even values from the array: " + arr.filter(num => num % 2 == 0));

console.log("---Example 5---");

console.log("---Example 6---");

console.log("Values greater than 4: " + arr.filter(num => num > 4));

console.log("---Example 6---");
console.log("---Array.filter() function in JavaScript---");

console.log("----------------------------------------");

console.log("---Array.reduce() function in JavaScript---");
console.log("---Example 7---");

// reduce() function is basically used at a place where a single value
// is expected as the output after processing an array.

// Code to find sum of all elements in the array without using reduce() function.

function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log("Sum of all elements without using reduce() function: " + findSum(arr));

console.log("Sum of all elements using reduce() function: " +
arr.reduce(function(acc, curr) {
    acc = acc + curr;
    return acc;
}, 0));

// In the above code, reduce() accepts 2 arguments.
// 1st argument is a function
//      The function has 2 arguments, accumulatedValue and currentValue.
//      The accumulatedValue is similar to sum variable in the findSum() function.
//      currentValue is the element of the array in each iteration.
//      Basically, this function is applied to each element in the array.
// 2nd argument is the initial value of the acc.
//      In findSum() function, sum is initialized to 0.
//      Similarly, in reduce() function, we have to pass the initial value to acc.
console.log("---Example 7---");

console.log("---Example 8---");

// Code to find max of all elements in the array without using reduce() function.

function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

console.log("Max of all elements without using reduce() function: " + findMax(arr));

console.log("Max of all elements using reduce() function: " +
arr.reduce(function(acc, curr) {
    if (curr > acc) acc = curr;
    return acc;
}, 0));

console.log("---Example 8---");

console.log("---Array.reduce() function in JavaScript---");

console.log("----------------------------------------");

console.log("---Example 9---");

const users = [
    {firstName: "Harishankar", lastName: "Bhat", age: 26},
    {firstName: "Donald", lastName: "Trump", age: 75},
    {firstName: "Elon", lastName: "Musk", age: 50},
    {firstName: "A", lastName: "B", age: 26},
]

console.log("List of full names of users: " + users.map(user => user.firstName + " " + user.lastName))

console.log("---Example 9---");

console.log("---Example 10---");

const usersGroupedByAge = users.reduce(function(acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = acc[curr.age] + 1;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log("Age and number of users in each age: ", usersGroupedByAge);

console.log("---Example 10---");

console.log("---Chaining map, filter and reduce---");

console.log("First name of users whose age is less than 30: ",
users
.filter(user => user.age < 30)
.map(user => user.firstName));

console.log("First name of users whose age is less than 30 using reduce() function: ",
users
.reduce(function(acc, curr) {
    if (curr.age < 30) acc.push(curr.firstName);
    return acc;
}, []));

console.log("---Chaining map, filter and reduce---");

// Refer README.md for more details.
