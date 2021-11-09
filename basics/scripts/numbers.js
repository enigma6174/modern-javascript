console.log("WELCOME TO JAVASCRIPT PROGRAMMING");
console.log("TOPICS:\n1. Numbers");
console.log("\n");

const float = 0.145;
const exponent = 3.141e2;
const positiveInteger = 10;
const negativeInteger = -93;

// Datatype for numerical data is 'number'
console.log("value :", float, "type :", typeof float);
console.log("value :", exponent, "type :", typeof exponent);
console.log("value :", positiveInteger, "type :", typeof positiveInteger);
console.log("value :", negativeInteger, "type :", typeof negativeInteger);

console.log("\n");

let likes = 10;

console.log(likes++); // Output is 10
console.log(likes); // Output is 11
console.log(++likes); // Ouptut is 12
console.log(likes); // Output is 12

console.log("\n");

let noLikes = 10;

console.log(noLikes--); // Output is 10
console.log(noLikes); // Output is 9
console.log(--noLikes); // Output is 8
console.log(noLikes); // Output is 8

console.log("\n");

const number = 54;
let result = 10;

result += number; // Same as result = result + number (o/p is 64)
console.log(result);

result *= 2; // Same as result = result * 2 (o/p is 128)
console.log(result);

result /= 32; // Same as result = result / 32 (o/p is 4)
console.log(result);

result -= 2; // Same as result = result - 2 (o/p is 2)
console.log(result);

result **= 6; // Same as result = result ^ 6 (o/p is 64)
console.log(result);

result = result % 3; // Get the remainder of result / 3 (o/p is 1)
console.log(result);

console.log("\n");

const myNumber = 23;

// When a number is combined with a non number in a mathematical operation, result is NaN
const myResult = myNumber * "hello";
console.log(myResult);

// The following will not produce NaN
// Contents of 'myNumber' is converted to string and concatenated with 'hello'
const myNewResult = myNumber + "hello";
console.log(myNewResult);
