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
	console.log("Implement me!");
}