// console.log is like print in Python
console.log("Hello, world! From the index.js file!");

//#region Basic conditional logic and for loops
// (folding everything between //#region and //#endregion into a neat block)

// // setting up a port number variable (as null)
// let customPortNumber = null;

// // ??= is the nullish coalescing assignment operator (newer than ||=)
// // it only assigns the value on the right if the variable on the left is falsy value (null, undefined)
// // basically like "Use 5000 as the backup port if nothing is set"
// const PORT = customPortNumber ??= 5000;
// // const PORT = customPortNumber || 5000;

// console.log("Port is " + PORT);
// console.log("Custom port number is: " + customPortNumber);

// // Example of loose equality (==)
// let dinner = "butter chicken";

// // Loose quality, dinner will be coerced into a string!
// if (dinner == "butter chicken"){
// 	console.log("I'm full!");
// } else {
// 	console.log("I'm ready for dessert!");
// }

// // Example of strict equality (===)
// let luckyNumber = 42;

// // Strict equality, comparison will not be true!
// // === requires type AND value to match
// if (luckyNumber === "42") {
// 	console.log("Lucky number is the answer to life, the universe, and everything!");
// } else {
// 	console.log("Lucky number is nice, sure, but ehh...");
// }

// // IF = "if true, run this one statement"
// if (dinner == "butter chicken") console.log("I'm full!");

// // basic FOR loop
// for (let index = 0; index < 10; index++) {
// 	console.log(index);

// }

// // looping through an array
// let fruits = ["apple", "mango", "banana"];

// // FOR loops are best for performance (faster)
// for (let index = 0; index < fruits.length; index++) {
// 	const fruit = fruits[index];
// 	console.log(fruit);
// }

// // FOREACH is better for readability for devs (cleaner)
// // but it's a wrapper around FOR, so it's slower than FOR
// fruits.forEach(fruit => {
// 	console.log(fruit);
// });

//#endregion


//#region Functions
// // defining a function
// function exampleFunction(){
// 	console.log("Function code happens here!");
// }

// // calling the function
// exampleFunction();

// exampleFunction();

// // function with a parameter
// // messageToRepeat is a placeholder that gets filled in when the function is called
// function messageRepeater(messageToRepeat){
// // prints the message 3 times
// 	console.log(messageToRepeat + messageToRepeat + messageToRepeat);
// }

// // using for loop - to call the function multiple times (2 times)
// // loop = do again until condition is false,
// // so in this case do again while index is less than 2
// for (let index = 0; index < 2; index++) {
// 	messageRepeater("hello");
// }

// // array (list) of favourite dinners
// let favouriteDinners = [
// 	"palak paneer",
// 	"katsu curry",
// 	"dumplings",
// 	"laghman",
// 	"lentil bolognese"
// ];

// // long form forEach example (expanded version)
// // dinner is the placeholder for each item in the array
// // favouriteDinners.forEach(dinner => {
// // 	messageRepeater(dinner);
// // });


// // arrow function (=>) short form forEach example
// // (short hand version of the above example)
// // if function only has ONE statement, can write it all on one line
// favouriteDinners.forEach(dinner => messageRepeater(dinner));

// // arrow function with a parameter
// // storing the function in a constant variable, so we can call it later
// const messageRepeaterArrowFunction = (messageToRepeat) => {
// 	console.log("Arrow function here! Here is the value of this:" + this);
// }

// // calling the arrow function with a value
// messageRepeaterArrowFunction("bananas");

// // Use const in the function declaration to avoid accidentally doing this:
// // messageRepeaterArrowFunction = "bananas";
// // which would overwrite the function with a string value
// // note: using const prevents accidentally reassigning the variable (protects function def)

//#endregion


//#region Classes

// defining a class (blueprint for an object)
class ExampleClass {
	// constructor = method that runs when an instance of the class is created
	constructor(){
		console.log("ExampleClass instance created!");
	}

	// a class method defined with an arrow function
	messageRepeater = (messageToRepeat) => {
		// prints the message 3 times
		console.log(messageToRepeat + messageToRepeat + messageToRepeat);
		// arrow functions in classes do NOT have their own 'this' value,
		// (they inherit 'this' from the class),
		// in this case, 'this' refers to the instance of ExampleClass (object created from the class)
		console.log("Arrow function of class instance has a value for this of: " + this);
	}
}

// creating an instance of the class (an object based on the class blueprint)
// new = create a new instance of the class
// exampleInstance = variable that stores the new isntance
let exampleInstance = new ExampleClass();

// prints the instance (the object created from the class)
console.log(exampleInstance);
// prints the typeof category of the instance (eg. 'object')
// but it doesn’t say which class the object comes from (eg. 'ExampleClass')
console.log(typeof exampleInstance);
// calling the class method
exampleInstance.messageRepeater("bananas");



// Error handling example:

// a function that throws an error
function functionThatThrowsAnError(){
		// throw = stop execution and create an error object
	throw new Error("example error");
}

// try/catch block to handle errors gracefully
try {
	// calling the function that throws an error
	let exampleError = functionThatThrowsAnError();
	// this line will not run because the error stops execution
	console.log("Example error value" + exampleError);
	// catch block will run instead
} catch (error) {
	// prints the caught error to the console
	console.log("Caught error is: " + error);
}



// Simple function example:

// a basic function that adds two numbers together
function adder(num1, num2) {
	return num1 + num2;
}

// calling the adder function with 1 and 1 as arguments
let result = adder(1,1);
// prints the result
console.log("Result is: " + result);
// prints true if result is 2, otherwise false
console.log(result == 2);



//#endregion
