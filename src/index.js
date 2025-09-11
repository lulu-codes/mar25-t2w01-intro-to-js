// console.log is like print in Python
console.log("Hello, world! From the index.js file!");

// setting up a port number variable (as null)
let customPortNumber = null;

// ??= is the nullish coalescing assignment operator (newer than ||=)
// it only assigns the value on the right if the variable on the left is falsy value (null, undefined)
// basically like "Use 5000 as the backup port if nothing is set"
const PORT = customPortNumber ??= 5000;
// const PORT = customPortNumber || 5000;


console.log("Port is " + PORT);
console.log("Custom port number is: " + customPortNumber);

// Example of loose equality (==)
let dinner = "butter chicken";

// Loose quality, dinner will be coerced into a string!
if (dinner == "butter chicken"){
	console.log("I'm full!");
} else {
	console.log("I'm ready for dessert!");
}

// Example of strict equality (===)
let luckyNumber = 42;

// Strict equality, comparison will not be true!
// === requires type AND value to match
if (luckyNumber === "42") {
	console.log("Lucky number is the answer to life, the universe, and everything!");
} else {
	console.log("Lucky number is nice, sure, but ehh...");
}

// IF = "if true, run this one statement"
if (dinner == "butter chicken") console.log("I'm full!");

// basic FOR loop
for (let index = 0; index < 10; index++) {
	console.log(index);

}

// looping through an array
let fruits = ["apple", "mango", "banana"];

// FOR loops are best for performance (faster)
for (let index = 0; index < fruits.length; index++) {
	const fruit = fruits[index];
	console.log(fruit);
}

// FOREACH is better for readability for devs (cleaner)
// but it's a wrapper around FOR, so it's slower than FOR
fruits.forEach(fruit => {
	console.log(fruit);
});
