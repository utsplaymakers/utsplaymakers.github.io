/*
	UPDATE THIS TO RENDER GAME JAM ENTRIES
	Maintainers can just add another entry in the array at the !front! for rendering
	<iframe src="https://itch.io/embed/645285" height="167" width="552" frameborder="0"><a href="https://jn-squared.itch.io/dont-do-it">Don&#039;t Do It by JN Squared</a></iframe>
*/

const gameJams = [
	{
		title: "Monthly Jam (27 - 29 Mar 2020)",
		linkToGames: "https://itch.io/jam/monthly-jam-march-2020",
		theme: "Liquid / Rare / Motivation / Ritzy",
		description: "In the first of our monthly game jams held on our Discord, our gamedevs compete to make the best game out of four randomly generated words!",
		games: [
			{
				itchioLink: "https://fysho.itch.io/boom-mine",
				embedCode: 597149, 
				place: 1,
				description: ""
			},
			{
				itchioLink: "https://delcanprobably.itch.io/rare-robots",
				embedCode: 597150,
				place: 2,
				description: ""
			},
			{
				itchioLink: "https://edisu.itch.io/liquid-gold",
				embedCode: 597125,
				place: 2,
				description: ""
			},
			{
				itchioLink: "",
				embedCode: 597152,
				place: 0,
				description: ""
			}
		]
	},
]

/*
	Vanilla JS does not support client side json file imports for security reasons
*/