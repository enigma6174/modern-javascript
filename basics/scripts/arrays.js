console.log("WELCOME TO JAVASCRIPT PROGRAMMING");
console.log("TOPICS:\n1. Arrays");
console.log("\n");

const stringArray = ["helo", "world", "how", "are", "you", "world"];
const numberArray = [156, 23, 0.001, -98, 75.55];

console.log("stringArray[]");
console.log(stringArray);

console.log("\n");

console.log("numberArray[]");
console.log(numberArray);

console.log("\n");

// Element at index 0 of stringArray[]
console.log(`stringArray[0] : ${stringArray[0]}`);

// Element at index 4 of numberArray[]
console.log(`numberArray[4] : ${numberArray[4]}`);

// Length of both the arrays
console.log(`len(stringArray) : ${stringArray.length}`);
console.log(`len(numberArray) : ${numberArray.length}`);

console.log("\n");

// Get the index of array elements
console.log(`stringArray.indexOf('helo') : ${stringArray.indexOf("helo")}`);
console.log(`stringArray.indexOf('world') : ${stringArray.indexOf("world")}`);
console.log(
  `stringArray.lastIndexOf('world) : ${stringArray.lastIndexOf("world")}`
);
console.log(`numberArray.indexOf(0.001) : ${numberArray.indexOf(0.001)}`);
console.log(`numberArray.indexOf(444) : ${numberArray.indexOf(444)}`);

console.log("\n");

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

console.log("evenNumbers[]");
console.log(evenNumbers);

console.log("\n");

console.log("oddNumbers[]");
console.log(oddNumbers);

console.log("\n");

// Join operation combines the elements of the array with the argument
// The result is a single string representing all the elements of the array
const evenJoin = evenNumbers.join("-");
const oddJoin = oddNumbers.join(",");

console.log("evenNumbers.join('-')");
console.log(evenJoin);

console.log("\n");

console.log("oddNumbers.join(',')");
console.log(oddJoin);

console.log("\n");

// Concat operation combines two arrays together
// Result is a single array
const array1 = evenNumbers.concat(oddNumbers);
const array2 = oddNumbers.concat(evenNumbers);

console.log("evenNumbers.concat(oddNumbers)");
console.log(array1);

console.log("\n");

console.log("oddNumbers.concat(evenNumbers)");
console.log(array2);

console.log("\n");

// Push method adds a new element to the array in place
// Returns the new length of the array
const returnValue = evenNumbers.push(12);

console.log(evenNumbers);
console.log(`evenNumbers.push(12) : ${returnValue}`);

console.log("\n");

// Pop method removes the last element from the array in place
// Returns the popped element
const popValue = evenNumbers.pop();

console.log(evenNumbers);
console.log(`evenNumbers.pop() : ${popValue}`);
