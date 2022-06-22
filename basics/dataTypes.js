// JavaScript has only one Number type for all numeric data
// Numeric data can be positive integers, negative integers, whole numbers or decimals
// There is a limitation to the precision of floating point numbers in JavaScript
const num1 = 23;
const num2 = -92.2221;
const num3 = 0.0001009899;

console.log(num1);
console.log(num2);
console.log(num3);

// All standard mathematical operators are supported by JavaScript
// Modulo operator % is used to calculate remainder
// Power operator ** is used to calculate power
let value = 2 ** 3;
console.log("2 raised to power 3:", value);

value = 10 % 3;
console.log("10 divided by 3 remainder is", value);

let expression = 2 + 3 - (4 * 5) / 10;
console.log(expression);

const num4 = 4 / 2;
console.log(num4);

const num5 = 5 / 2;
console.log(num5);

// NaN is a special value in JavaScript that represents something that is "not a number"
// The NaN is still a Number data type
value = 0 / 0;
console.log("0/0 is:", value);

value = value + 5;
console.log("NaN + 5 is:", value);

// Booleans are values that are either true or false
// Boolean data types therefore have only two values - true or false
let flag = true;
console.log("flag is now:", flag);

flag = false;
console.log("flag is now:", false);

// The string datatype in JavaScript is a sequence of characters
// Characters are enclosed between a pair of ' ' or " "
const myString = "hello world";
console.log(myString);

const anotherString = "the Quick brown FOX jumps over THE LAZY dog 12345";
console.log(myString);

const numberString = "123.55";
console.log(numberString);

const firstName = "John";
const lastName = "Doe";

// Joining two strings together is called concatenation
// String concatenation is done in JavaScript using the "+" operator
const fullName = firstName + " " + lastName;
console.log(fullName);

const someString = "JavaScript Programming";
console.log(someString);

// Accessing the individual elements of the string is called as indexing
// The first index of the string is 0 and contains the first character
console.log(someString[0]);
console.log(someString[1]);
console.log(someString[5]);

// String length can be calculated using ".length" after the string
const lengthOfString = someString.length;
console.log("length of ", someString, " is:", lengthOfString);

// Access the last index of the string
console.log(someString[someString.length - 1]);

// Strings are immutable - their contents cannot be changed
let address = "Chicago, USA";
console.log(address);

address[0] = "W";
address[1] = "y";
address[2] = "x";
console.log(address);

// String methods are pre-built functionalities that we can use on strings
// These manipulate the string by changing their contents
// As strings are immutable, these variables actually get assigned a new location in memory
let demoString = "   JavaScript  Programming   Lesson 1       ";
console.log(demoString);

// String methods start with a . after the string and end with "()"
demoString.toUpperCase(); // Converts every character in the string to upper case
console.log(demoString);

demoString.toLowerCase(); // Converts every character in the string to lower case
console.log(demoString);

demoString.trim(); // Removes leading and trailing whitespaces only
console.log(demoString);

// Some string methods accept additional information inside them that modifies their behavior
// These additonal information are called as arguments
console.log(demoString.indexOf("J")); // Get the index of the first occurance of the character "J"
console.log(demoString.indexOf("a"));
console.log(demoString.indexOf("Lesson")); // Get the index of the substring "Lesson"

// If the character or the substring is not found, -1 is returned
console.log(demoString.indexOf("X"));
console.log(demoString.indexOf("Python"));

// String method .slice(x) is used to extract a part of the string
// The partial substring extracted is called substring
// The syntax is string.slice(START_INDEX, END_INDEX)
// If START_INDEX is specified only then the entire string from START_INDEX is extracted
// If START_INDEX and END_INDEX both are specified then the string upto END_INDEX is extracted
console.log(demoString.slice(5));
console.log(demoString.slice(demoString.length));
console.log(demoString.slice(5, 10));
console.log(demoString.slice(12, demoString.length));

// If the indices are invalid, then empty string is returned
console.log(demoString.slice(40));
console.log(demoString.slice(50, 60));

// In slicing operations the original string is not manipulated
console.log(demoString);

// String method .replace(x) is used to replace a substring with another string
// This only works if the substring x is present in the original string
demoString.replace("JavaString", "Python");
console.log(demoString);

demoString.replace("1", "I");
console.log(demoString);

// No change as the substring is not found
demoString.replace("Hello", "Programming");
console.log(demoString);

// We can combine string methods one after the other with . operator
// This is called as method chaining - the order of execution is same as the order of chaining
const userInput = "     helloJohn@email.com  ";
const processedInput = userInput.trim().toLowerCase().replace(".com", ".in");

console.log("original input", userInput);
console.log("processedInput", processedInput);

// Escape characters are symbols that convey a special meaning to JavaScript
// The escape sequence \ tells JavaScript to consider the first character after it as a string
const escapeSequence = 'hello world "inside quotes" outside quotes!';
console.log(escapeSequence);

// The escape sequence \n tells JavaScript to add a newline after it
const newlineSequence = "Hello!\nWelcome To Programming!";
console.log(newlineSequence);

// Template literals are strings that allow embedded expressions inside them
// These expressions are evaluated first and turned into a resulting string
// Template literals start and end with ` ` characters
// The embedded expression is enclosed within the sequence ${}
const weather = "rainy";
let templateString = `Today is a ${weather} day!`;
console.log(templateString);

templateString = `The interest is ${(10000 * 4.5 * 7) / 100} for 7 years`;
console.log(templateString);

const userName = "   enigma6174      ";
templateString = `[INFO] USERNAME ${userName.trim().toUpperCase()} LOGGED IN`;
console.log(templateString);

// The null type represents an intentional absence of any value
// This has to be assigned by the user

const nothing = null;
console.log(nothing);

// Variables that do not have any assigned type are undefined
// It can also refer to something that has no meaning or definition available
// Generally, this is provided to the user defined variables from JavaScript
const text = "hello";
const undefinedValue = text[6]; // This index has no meaning
console.log(`text is ${text} and text[6] ${undefinedValue}`);

// The Math Object has pre-defined functionality to perform mathematical functions
console.log(`Math.PI ${Math.PI}`);
console.log(`Math.round(4.789) ${Math.round(4.789)}`);
console.log(`Math.pow(2, 5) ${Math.pow(2, 5)}`);
console.log(`Math.abs(-450) ${Math.abs(-450)}`);
console.log(`Math.floor(3.999999) ${Math.floor(3.999999)}`);

// Math.random() generates a random decimal between (0, 1) not including 1
console.log(`Math.random() ${Math.random()}`);
console.log(`Math.random() ${Math.random()}`);

// Generate a random number between (1, 10) including 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// The typeof operator is used to find out the type of a value
console.log("99 ->", typeof 99);
console.log("45.2134e2 ->", typeof 452.2134e2);
console.log("NaN ->", typeof NaN);
console.log('"hello" ->', typeof "hello");
console.log("false ->", typeof false);
console.log("null ->", typeof null);
console.log("undefined ->", typeof undefined);

// Conversion of strings to integers and floats can be done by parsing
const s1 = "-340";
const s2 = "45.12500";

// The method parseInt() converts string to integer
console.log(parseInt(s1));

// This method extracts only the non fractional part of strings
console.log(parseInt(s2));

// The method parseFloat() extracts the whole string and converts to float
console.log(parseFloat(s2));

// This method represents integers as is
console.log(parseFloat(s1));

// A number present at the beginning of string can be extracted
console.log(parseFloat("25.55dollars"));
console.log(parseInt("9cents"));

// A number not in the beggining of the string cannot be extracted
console.log(parseFloat("dollar23.45"));
console.log(parseInt("food2bad"));
