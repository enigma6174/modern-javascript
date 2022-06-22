// A variable is something that holds data
// If we create a variable with 'let' then we can update it's value later on
let age = 23;
console.log(age);

// Creating a variable and assigning a value to it is called initialization
let t = "hello";

// JavaScript follows camel case convention for naming variables
// Variable names with different words are joined together
// First letter of every word is in upper case
let firstName = "John";
console.log(firstName);

let officeAddressPin = 100112;
console.log(officeAddressPin);

// Updating the contents of the variables
age = 50;
console.log(age);

firstName = "Maxine";
console.log(firstName);

officeAddressPin = 551100;
console.log(officeAddressPin);

let personCount = 100;

// Update count of persons
personCount = personCount + 100;
console.log("count of persons:", personCount);

// We can also use unary operators to update the variable values
// Unary operators take only one operand to perform the operation
personCount += 10; // This is the same as personCount = personCount + 1
console.log("count of persons:", personCount);

// We can also unary increment operator to increase the value by 1
personCount++; // This is the same as personCount = personCount + 1
console.log("count of persons:", personCount);

personCount--; // This is the same as personCount = personCount - 1
console.log("count of persons:", personCount);

// The increment and decrement operators behave differently when used before or after variables
let num = 10;

// When used after the variable, the value is updated after the increment
console.log(num++); // Num is 10 because first 10 is printed then num is incremented by 1
console.log(++num); // Num is 12 because 11 is first updated to 12 then printed to console

// We can use const to create variables
// Const is used to create variables whose values do not change
const cannotChange = "hello";
const fixedNumber = 200;

console.log(cannotChange);
console.log(fixedNumber);

// These lines of codes will give error as we are trying to update the value of const
// In JavaScript modifying a const value is not permitted
// Uncomment at your own risk!
// cannotChange = "hello world!"
// fixedNumber += 10
