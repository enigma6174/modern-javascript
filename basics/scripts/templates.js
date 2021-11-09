console.log("WELCOME TO JAVASCRIPT PROGRAMMING");
console.log("TOPICS:\n1. Template Strings");
console.log("\n");

const employeeName = "john doe";
const employeeMail = "johndoe42@email.com";

// Using string concatenation
const string =
  "employee" + " " + employeeName + " " + " has email id " + " " + employeeMail;

// Using template literals
const template = `employee ${employeeName} has email id ${employeeMail}`;

console.log("string : ", string);
console.log(`template : ${template}`);

const number = 234;
const offset = 5;

// Template literals can also evaluate expressions
console.log(`234 * 5 - 180 = ${number * offset - 180}`);
