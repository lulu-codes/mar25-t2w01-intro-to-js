// This file is linked to index.html
console.log("domstuff.js has loaded!");

// This function finds the first p tag in the document
function paragraphTagUpdater(){
	// 1. find the p tag
	let targetPtag = document.querySelector("p");
	// log the p tag to the console
	console.log(targetPtag);

	// 2. update the text of the p tag

	// innerHTML parses the string as valid HTML
	// targetPtag.innerHTML = "<h1>Some cool message here!</h1>";
	// innerText does no HTML parsing, just treats the string as a string
	targetPtag.innerText = "<h1>Some cool message here!</h1>";
}

// call the function to update the p tag
paragraphTagUpdater();



// Breakfast Menu renderer

// array of breakfast menu items
let breakfastMenuItems = [
	"pancakes",
	"blueberry pancakes",
	"bacon and eggs",
	"omelette",
	"avo smash"
];

// function to render the breakfast menu
function breakfastRenderer () {
	// 1. render the breakfast menu container
	// 1a. find the menu container's parent element
	let targetParentContainer = document.querySelector("body");
	// 1b. create the menu container element
	let menuContainer = document.createElement("section");
	console.log(menuContainer);
	menuContainer.id = "breakfastmenu";
	// 1c. append the menu container element to the parent element
	targetParentContainer.appendChild(menuContainer);
	// document.body.appendChild()


	// 2. create menu options

	// 3. insert menu options into breakfast menu container
}

// call the breakfast menu renderer function
breakfastRenderer();

