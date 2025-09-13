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
	// for loop style
	// for (let index = 0; index < breakfastMenuItems.length; index++) {
	// 	const individualMenuItem = breakfastMenuItems[index];
	// 	console.log(individualMenuItem);
	// }

	// forof style
	// for (const individualMenuItem of breakfastMenuItems) {
	// 	console.log(individualMenuItem);
	// }

	// forin style
	// forin does not like arrays with unassigned positions
	// for (const key in breakfastMenuItems) {
	// 	// if (!Object.hasOwn(object, key)) continue;

	// 	const element = breakfastMenuItems[key];

	// 	console.log(key, element);

	// }

	// foreach style
	// foreach is great for doing stuff per array item
	// breakfastMenuItems.forEach(individualMenuItem => {
	// 	console.log(individualMenuItem);
	// 	let menuItemCard = document.createElement("section");
	// 	menuItemCard.className = "menuitem";
	// 	let menuItemTitle = document.createElement("h2");
	// 	menuItemTitle.innerText = individualMenuItem;
	// 	menuItemCard.appendChild(menuItemTitle);

	// 	// searching the page for content is SLOW, avoid that!
	// 	// let menuContainer = document.getElementById("breakfastmenu");
	// 	// if menuContainer is defined before the loop, awesome!  things will be performant:
	// 	menuContainer.appendChild(menuItemCard);
	// });

	// map style
	// map is amazing for doing stuff per array item and saving a result per item
	let menuItemCards = breakfastMenuItems.map(individualMenuItem => {
		console.log(individualMenuItem);

		// copied from foreach:
		let menuItemCard = document.createElement("section");
		menuItemCard.className = "menuitem";
		let menuItemTitle = document.createElement("h2");
		menuItemTitle.innerText = individualMenuItem;
		menuItemCard.appendChild(menuItemTitle);

		// anything returned is given to the variable in "let someVariables = someArray.map()"
		return menuItemCard;
	});

	// 3. insert menu options into breakfast menu container
	if (menuItemCards.length != 0){
		console.log(menuItemCards);
		// menuContainer.appendChild(...menuItemCards);
		// appendChild([]);
		// appendChild(item1, item2, item3)

		menuContainer.append(...menuItemCards);

	}

}


// call the breakfast menu renderer function
// breakfastRenderer();

// add event listener to the button
let menuToggleButton = document.getElementById("menuToggleButton");
menuToggleButton.addEventListener("click", breakfastRenderer);

