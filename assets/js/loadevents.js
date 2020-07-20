"use strict";

const root = document.getElementById("event-calendar");

// events is an array of objects
events.forEach(render); // for each event entry, render on calendar.html. variable accessed from 'calendar.js' in '/data'

/**
 * render the event data 
 * @param {object} event holds all necessary game jam data for rendering an
 */
function render(event) {
	// render header elements header and p tags
	renderHeaderElements(event);
	// render the individual game entries
}

/**
 * render header and paragraph elements 
 * @param {object} event individual game jam 
 */
function renderHeaderElements(event) {
	let h2 = document.createElement("h2");
	let anchorTag = document.createElement("a");

	anchorTag.setAttribute("target", "_blank");
	anchorTag.innerHTML = event.name;

	// append the anchor to the header 
	h2.appendChild(anchorTag);
	// add h2 
	root.appendChild(h2);

	// render following p tags
	let pImg = document.createElement("img");
	let pDate = document.createElement("p");
	let pDescription = document.createElement("p");

	// add necessary classes/styling
	pImg.classList.add("event-img");
	pDate.classList.add("theme-desc");
	pDescription.classList.add("desc");

	// set text content
	pImg.src = event.image;
	pDate.innerHTML = "Time: <strong>" + event.time + "</strong>";
	pDescription.innerHTML = event.description;

	// add p tags to event section

	root.appendChild(pDate);
	root.appendChild(pImg);
	root.appendChild(pDescription);

}


/**
 * prints to console
 * @param {string} errorString printed out to the console
 */
function raiseError(errorString) {
	console.error(`Error: ${errorString}`);
}