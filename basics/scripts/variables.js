// This is a single line comment
/*
This is a multi line comment
This is line 2 of multi line comment
This is last line of multi line comment
*/

// Display a popup message through JavaScript
alert("Check Browser Console!");

// Print a message to console
console.log("WELCOME TO JAVASCRIPT PROGRAMMING");
console.log("TOPICS:\n1. Comments\n2. Console\n3. Variables");
console.log("\n");

// Print a warning to console
console.warn("This Is A Warning!!");

// Print an error to the console
console.error("This Is An Error!!");

// Print an info to the console
console.info("This Is An Info!!");

// Variables that can change
let age = 25;
let fullName = "john doe";
console.log(age, fullName);

age = 30;
fullName = "john deer";
console.log(age, fullName);

// Variables that do not change
const yearOfBirth = 1992;
console.log("YOB", yearOfBirth);

// This will throw an error
// Any code after unhandled error in JavaScript will not execute

/* 
yearOfBirth = 1990;
console.log(yearOfBirth); 
*/

// Errorneous code with error handling
// This will ensure that errors do not break the flow of execution
try {
  yearOfBirth = 1990;
} catch (error) {
  console.error("[ERROR]", error);
}

console.log("YOB", yearOfBirth);
