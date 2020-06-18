const root = document.getElementById("game-jams");

// gameJams is an array of objects
gameJams.forEach(render); // for each game jam entry, render on games.html. variable accessed from 'games.js' in /data

/**
 * render the gameJam data 
 * @param {object} gameJam holds all necessary game jam data for rendering an
 */
function render(gameJam)
{
	// render header elements header and p tags
	renderHeaderElements(gameJam);
	// render the individual game entries
	renderGameEntryElements(gameJam.games);
}

/**
 * render header and paragraph elements 
 * @param {object} gameJam individual game jam 
 */
function renderHeaderElements(gameJam)
{
	let h2 = document.createElement("h2");
	let anchorTag = document.createElement("a");


	anchorTag.setAttribute("href", gameJam.linkToGames);
	anchorTag.setAttribute("target", "_blank");
	anchorTag.innerText = gameJam.title;

	// append the anchor to the header 
	h2.appendChild(anchorTag);
	// add h2 
	root.appendChild(h2);

	// render following p tags
	let pTheme = document.createElement("p");
	let pDescription = document.createElement("p");

	// add necessary classes/styling
	pTheme.classList.add("theme-desc");
	pDescription.classList.add("desc");

	// set text content 
	pTheme.innerText = gameJam.theme;
	pDescription.innerText = gameJam.description;

	// add p tags to gamejam section

	root.appendChild(pTheme);
	root.appendChild(pDescription);

}

/**
 * Appends each individual game entry to root
 * @param {Array} gameEntries holds all game entries for the specific game jam
 */
function renderGameEntryElements(gameEntries)
{
	if(gameEntries.length === 0)
	{
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

	for(let i = 0; i < gameEntries.length; ++i)
	{
		// create content div 
		let contentDiv = document.createElement("div");
		contentDiv.classList.add("content");

		// render banner based on placing
		if(gameEntries[i].place !== 0)
		{
			contentDiv.appendChild(generatePlacementElement(gameEntries[i].place));
		}
	}



}

/**
 *  
 * @param {integer} place placement of the entry in the jam (1: first, 2: 2nd)
 * @return {} html element that displays the placement banner
 */
function generatePlacementElement(place)
{
	let placementDiv = document.createElement("div");
	placementDiv.classList.add("tab");
	if(place === 1)
	{
		placementDiv.classList.add("golden");
		placementDiv.innerText = "1st";
	}else // equals 2
	{
		placementDiv.classList.add("silver");
		placementDiv.innerText = "2nd";
	}
	console.log("Type of placementDiv: " + typeof placementDiv);

	return placementDiv;
}

/**
 * prints to console and exits out of  
 * @param {string} errorString printed out to the console
 */
function raiseError(errorString)
{
	console.log(`Error: ${errorString}`);
}