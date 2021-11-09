console.log("WELCOME TO JAVASCRIPT PROGRAMMING");
console.log("TOPICS:\n1. Boolean");
console.log("\n");

let score = "100";

// Score will not increase mathematically as it is string
console.log(`score + 1 is ${score + 1}`);
console.log(`typeof score ${typeof score}`);

console.log("\n");

// Convert score to Number type
score = Number(score);

console.log(`score + 1 is ${score + 1}`);
console.log(`typeof score ${typeof score}`);

console.log("\n");

// The following will result in NaN
const t1 = Number("hello");
const t2 = Number("a");

console.log(`Number("hello") ${t1}, Number("a") ${t2}`);

// Convert Number to String
const t3 = String(50);
console.log(`String(50) ${t3}`);

// Convert Number to Boolean
const b1 = Boolean(3);
const b2 = Boolean(0);
const b3 = Boolean(-10);

console.log(`Boolean(3) ${b1}, Boolean(0) ${b2}, Boolean(-10) ${b3}`);

// Convert String to Boolean
const s1 = Boolean("hello");
const s2 = Boolean("0");
const s3 = Boolean("");

console.log(`Boolean('hello) ${s1}, Boolean('0') ${s2}, Boolean('') ${s3}`);
