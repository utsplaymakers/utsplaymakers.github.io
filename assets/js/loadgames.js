"use strict";

const root = document.getElementById("game-jams");

// gameJams is an array of objects
gameJams.forEach(render); // for each game jam entry, render on games.html. variable accessed from 'games.js' in '/data'

/**
 * render the gameJam data 
 * @param {object} gameJam holds all necessary game jam data for rendering an
 */
function render(gameJam) {
	let jam = document.createElement("div");
	jam.classList.add("game-jam");
	jam.classList.add("off-white");

	// render header elements header and p tags
	renderHeaderElements(gameJam, jam);
	// render the individual game entries
	renderGameEntryElements(gameJam.games, jam);
}

/**
 * render header and paragraph elements 
 * @param {object} gameJam individual game jam 
 */
function renderHeaderElements(gameJam, jam) {
	let h2 = document.createElement("h2");
	let anchorTag = document.createElement("a");


	anchorTag.setAttribute("href", gameJam.linkToGames);
	anchorTag.setAttribute("target", "_blank");
	anchorTag.innerHTML = gameJam.title;

	// append the anchor to the header 
	h2.appendChild(anchorTag);
	// add h2 
	root.appendChild(h2);

	// render following p tags
	let pTheme = document.createElement("p");
	let pDate = document.createElement("p");
	let pDescription = document.createElement("p");

	// add necessary classes/styling
	pTheme.classList.add("theme-desc");
	pDate.classList.add("theme-desc");
	pDescription.classList.add("desc");

	// set text content 
	pTheme.innerHTML = "Theme: <strong>" + gameJam.theme + "</strong>";
	pDate.innerHTML = "Date: <strong>" + gameJam.date + "</strong>";
	pDescription.innerHTML = gameJam.description;

	// add p tags to gamejam section

	jam.appendChild(pTheme);
	jam.appendChild(pDate);
	jam.appendChild(pDescription);

	root.appendChild(jam);
}

/**
 * Appends each individual game entry to root
 * @param {Array} gameEntries holds all game entries for the specific game jam
 */
function renderGameEntryElements(gameEntries, jam) {
	if (gameEntries.length === 0) {
		raiseError("No number game entry found in renderGameEntryElements");
		return;
	}
	// create the 'row' div element
	let rowDiv = document.createElement("div");
	rowDiv.classList.add("row");

	// create the columns
	let columnOne = document.createElement("div");
	let columnTwo = document.createElement("div");

	columnOne.classList.add("column"); columnTwo.classList.add("column");

	// loop through each game and create the necessary elements for rendering
	for (let i = 0; i < gameEntries.length; ++i) {
		let entry = generateGameView(gameEntries[i]);
		// append to the correct column
		i % 2 === 0 ? columnOne.appendChild(entry) : columnTwo.appendChild(entry);
	}

	// append columns to rowDiv
	rowDiv.appendChild(columnOne);
	rowDiv.appendChild(columnTwo);

	jam.appendChild(rowDiv);
}

/**
 * 
 * @param {object} game object containing necessary entry data
 * @return {object} html element - content div that contains iframe 
 */
function generateGameView(game) {
	// create content div and iframe 
	let iframeElement = document.createElement("iframe");
	let anchorTag = document.createElement("a");
	anchorTag.setAttribute("href", game.itchioLink); // this anchor tag probably doesn't need to exist
	iframeElement.appendChild(anchorTag);

	let contentDiv = document.createElement("div");
	contentDiv.classList.add("content");

	// render placement tabs
	let placement = game.place;
	if (placement > 0) {
		contentDiv.appendChild(generatePlacementElement(placement, iframeElement));
	}

	// complete the iframe element
	iframeElement.classList.add("game-iframe");
	const itchioEmbedURL = `https://itch.io/embed/${game.embedCode}`;
	iframeElement.setAttribute("src", itchioEmbedURL);

	// append to content div
	contentDiv.appendChild(iframeElement);

	return contentDiv;
}

/**
 *  
 * @param {integer} place placement of the entry in the jam (1: first, 2: 2nd)
 * @param {object} iframe reference to iframe object that will render differently based on placement
 * @return {object} html element that displays the placement banner
 */
function generatePlacementElement(place, iframe) {
	let placementDiv = document.createElement("div");
	placementDiv.classList.add("tab");
	if (place === 1) {
		placementDiv.classList.add("golden");
		placementDiv.innerHTML = "1st";
		iframe.classList.add("golden");

	} else // equals 2
	{
		placementDiv.classList.add("silver");
		placementDiv.innerHTML = "2nd";
		iframe.classList.add("silver");
	}

	return placementDiv;
}

/**
 * prints to console
 * @param {string} errorString printed out to the console
 */
function raiseError(errorString) {
	console.error(`Error: ${errorString}`);
}