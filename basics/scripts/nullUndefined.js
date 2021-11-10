console.log("WELCOME TO JAVASCRIPT PROGRAMMING");
console.log("TOPICS:\n1. Null\n2. Undefined");
console.log("\n");

// Undefined is unintentional lack of value
let number1;
console.log(number1, number1 + 3, `the value of number1 is ${number1}`);

// Null is intentional lack of value
let number2 = null;
console.log(number2, number2 + 3, `the value of number2 is ${number2}`);

console.log("\n");

// Const cannot be undefined
// The following lines will give a syntax error

/*
const temp
console.log(temp)
*/

// Const can be null
const temp = null;
console.log(temp);

console.log("\n");

let number = null;
let string = null;
let boolean = null;

// Null is set to default value of data type when some operation is performed
console.log(number, number + 10);
console.log(string, string + " hello");
console.log(boolean, !boolean);
