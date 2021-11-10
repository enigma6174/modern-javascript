console.log("WELCOME TO JAVASCRIPT PROGRAMMING");
console.log("TOPICS:\n1. Strings\n2. String Methods");
console.log("\n");

// Simple string printing
console.log("hello world! this is a string!");

// Storing strings in variables
const string1 = "random string";
console.log(string1);

// String concatenation through variables
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;
console.log(fullName);

// In place string concatenation
console.log("Mr. " + firstName + " " + lastName);

// Get character at index 0
console.log("fullName[0] : ", fullName[0]);

// Get character at index 5
console.log("fullName[5] : ", fullName[5]);

// Get the length of the string
console.log("fullName.length : ", fullName.length);

// Get the character at the last index
console.log("fullName[fullName.length - 1] : ", fullName[fullName.length - 1]);

// The following methods DO NOT change the string in place
console.log(fullName.toUpperCase(), " ", fullName);
console.log(fullName.toLowerCase(), " ", fullName);

console.log("\n");

// Resuts of string methods can be assigned to variables
const someRandomString = "tHe QuicK BROWN fox juMpS OvER thE lAzy DOG";
const upperCaseString = someRandomString.toUpperCase();
const lowerCaseString = someRandomString.toLowerCase();

console.log("original string : ", someRandomString);
console.log("UPPER(original string) : ", upperCaseString);
console.log("LOWER(original string) : ", lowerCaseString);

console.log("\n");

const email = "johndoe42@gmail.com";
console.log("email : ", email);

// Get the index of a character
console.log("index of @ symbol : ", email.indexOf("@"));

// When the argument is a string then the first character of the string is considered
console.log("index of '2@' character(s) : ", email.indexOf("2@"));
console.log("index of '42@' character(s) : ", email.indexOf("42@"));

// When multiple characters are present only the first instance is considered
console.log("first index of 'o' character : ", email.indexOf("o"));

// Get the last index of a character
console.log("last index of 'o' character : ", email.lastIndexOf("o"));

console.log("\n");

const myString = "welcome friends and hello cruel world!!";
console.log("example string : ", myString);

// Get the string from index 3 to index 10
console.log(myString.slice(3, 10));

// Get the string from index 3 to the next 10 characters
console.log(myString.substr(3, 10));

// Results can also be stored in variables and operations are not in place
const stringSlice = myString.slice(5, 10);
const stringSubstr = myString.substr(5, 10);

console.log("original string : ", myString);
console.log("sliced string : ", stringSlice);
console.log("substr string : ", stringSubstr);

// Replace a character in the string
console.log(myString.replace("f", "X"));

// When multiple occurances are present only the first instance gets replaced
console.log(myString.replace("e", "Z"));

// Replacing is also in place operation
let resultString = myString.replace("w", "K");
console.log("original string : ", myString);
console.log("replaced string : ", resultString);

console.log("\n");

// Replace multiple occurances of a character with single character
resultString = myString.replace("!!", " #");
console.log(resultString);

// Replace single occurance with multiple characters
resultString = resultString.replace("#", "!!!");
console.log(resultString);

// Replace multiple occurance with multiple characters
resultString = resultString.replace("!!!", "@#$");
console.log(resultString);
