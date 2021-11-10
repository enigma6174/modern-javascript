console.log("WELCOME TO JAVASCRIPT PROGRAMMING");
console.log("TOPICS:\n1. Boolean");
console.log("\n");

// Boolean values are either true or false
console.log(true, typeof true, "true", typeof "true");
console.log(false, typeof false, "false", typeof "false");

console.log("\n");

const email = "johndoe42@email.com";
const buffer = [
  "hello",
  "world",
  "lorem",
  "ipsum",
  "dolor",
  ["lorem", "ipsum"],
];

console.log(email);
console.log(`email.includes('@') ? ${email.includes("@")}`);
console.log(`email.includes('#') ? ${email.includes("#")}`);

console.log("\n");

console.log(buffer);
console.log(`buffer.includes('hello') ? ${buffer.includes("hello")}`);
console.log(`buffer.includes('foxtrot') ? ${buffer.includes("foxtrot")}`);
console.log(
  `buffer.includes(['hello', 'world']) ? ${buffer.includes(["hello", "world"])}`
);
console.log(
  `buffer.includes(['lorem', 'ipsum']) ? ${buffer.includes(["lorem", "ipsum"])}`
);

console.log("\n");

const string = "shaun";

// String comparison happens at a character by character level
console.log(`${string} == 'shaun' ? ${string == "shaun"}`);
console.log(`${string} > 'Shaun' ? ${string > "Shaun"}`);
console.log(`${string} > 'shaw' ? ${string > "shaw"}`);
console.log(`${string} < 'shane' ? ${string < "shane"}`);

console.log("\n");

// Loose comparison - different types can be equal
console.log(`25 == 25 ? ${25 == 25}`);
console.log(`25 == '25' ? ${25 == "25"}`);
console.log(`25 != 25 ? ${25 != 25}`);
console.log(`25 != '25' ? ${25 != "25"}`);

console.log("\n");

// String comparison - different types cannot be equal
console.log(`25 === 25 ? ${25 === 25}`);
console.log(`25 === '25' ? ${25 === "25"}`);
console.log(`25 !== 25 ? ${25 !== 25}`);
console.log(`25 !== '25' ? ${25 !== "25"}`);
