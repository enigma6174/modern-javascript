console.log("WELCOME TO JAVASCRIPT PROGRAMMING");
console.log("TOPICS:\n1. For\n2.While\n3.Do-While\n4. For-Of\n5. For-Each");
console.log("\n");

console.log("FOR LOOP");
console.log("\n");

// Basic iteration with for loop
// The loo evaluation conditon and the iteration variable are all part of the loop
for (let i = 0; i < 5; i++) {
  console.log(`iteration ${i}`);
}

let offset = 5;

console.log(`\noffset ${offset}`);
for (let i = 1; i < 6; i++) {
  console.log(`iteration ${i} offset ${offset + i}`);
}

console.log("\n");

const array = [10, 20, 30, 40, 50, 60];

console.log(array);
for (let i = 0; i < array.length; i++) {
  console.log(`${array[i]}/ 10 is ${array[i] / 10}`);
}

console.log("WHILE LOOP");
console.log("\n");

const numbers = [2, 4, 6, 8, 10, 12, 14, 16];
let i = numbers.length;

console.log(numbers);

// Basic iteration with while loop
// The loop evaluation condition is the only part of the loop
// The loop iteration variable needs to be adjusted accordingly to prevent infinite loop
while (i > 0) {
  console.log(numbers[i - 1]); // because [i] will print till index 1
  i--;
}

console.log("\n");

// An alternative approach to the above
console.log(numbers);
while (i >= 0) {
  console.log(numbers[i]);
  i--;
}

console.log("\n");

// The following code will lead to infinite loop
/*
let i = 10;
while (i > 0) {
    console.log(i)
}
*/

console.log("DO WHILE LOOP");
console.log("\n");

let t1 = 5;
console.log("single iteration =>");

// Do-While loop is similar to while loop
// Difference is in do while the loop condition is evaluated at the end
// The loop runs at least once even if the condition is false
do {
  console.log(`iteration = ${t1}`);
  t1++;
} while (t1 < 5);

console.log("\n");

let t2 = 2;
console.log("3 iterations =>");

// This loop will execute 3 times
do {
  console.log(`iteration = ${t2}`);
  t2++;
} while (t2 < 5);

console.log("\nFOR OF LOOP");
console.log("\n");

console.log(numbers);

i = 0;

// Iterating over an array with for-of loop
for (number of numbers) {
  console.log(`numbers[${i}] = ${number}`);
  console.log(`numbers[${i}] * 5 = ${number * 5}`);
  i++;
}
console.log("\n");

i = 0;
const string = "hello world!";

console.log(`string = ${string}`);

// Iterating over a string with for-of loop
for (character of string) {
  console.log(`string[${i}] = ${character}`);
  i++;
}
