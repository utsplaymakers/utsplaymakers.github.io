const root = document.getElementById("game-jams");

gameJams.forEach(render); // for each game jam entry render on games.html

function render(gameJam)
{
	// render header elements header and p tags
	renderHeaderElements(gameJam);
}

function renderHeaderElements(gameJam)
{
	let h2 = document.createElement("h2");
	let anchorTag = document.createElement("a");

	anchorTag.setAttribute("href", "SOME VALUE FROM THE DATA");
	anchorTag.setAttribute("target", "_blank");
	anchorTag.text("TITLE PROPERTY FROM THE DATA");

	// append the anchor to the header 


	// add h2 


	// render following p tags
}