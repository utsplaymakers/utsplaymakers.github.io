/*
	UPDATE THIS TO RENDER GAME JAM ENTRIES
	Maintainers can just add another entry in the array at the !front! for rendering
	<iframe src="https://itch.io/embed/645285" height="167" width="552" frameborder="0"><a href="https://jn-squared.itch.io/dont-do-it">Don&#039;t Do It by JN Squared</a></iframe>

	// ADD OBJECT BREAKDOWN HERE FOR MAINTAINERS
*/

const gameJams = [
	{
		title: "Monster Mash Game Jam",
		linkToGame: "https://itch.io/jam/monster-mash-game-jam/entries",
		theme: "HORROR, with one of the sub-themes: The only thing that matters | There’s always another way | Surface Level",
		date: "16-17 Dec 2021",
		description: "The jam from the monster mash collaboration hosted in-person with UTS animation guild and support from the UTS student engagement team",
		games: [
			{
				itchioLink: "https://radiantinferno.itch.io/monster-mash-winery",
				embedCode: 1321645,
				place: 1,
			},
			{
				itchioLink: "https://tobibob.itch.io/for-you",
				embedCode: 1321598,
				place: 2,
			},
			{
				itchioLink: "https://hermitpal.itch.io/love-in-a-capsule",
				embedCode: 1321635,
				place: 2
			},
			{
				itchioLink: "https://jaaamesey.itch.io/murder-on-the-bathurst-bullet",
				embedCode: 1315159
			},
			{
				itchioLink: "https://voidawake.itch.io/sunken",
				embedCode: 1321637
			},
			{
				itchioLink: "https://pat5080.itch.io/gladiator-goblins",
				embedCode: 1321632
			},
			{
				itchioLink: "https://pixiepal.itch.io/shift-to-hell",
				embedCode: 1321616
			}
		]
	},
	{
		title: "Adaptive Jam",
		linkToGame: "https://itch.io/jam/adaptive-jam/entries",
		theme: "Adaptive",
		date: "4-5 Sep 2021",
		description: "A nice mid-year jam, the second game jam of the year. It was hosted online",
		games: [
			{
				itchioLink: "https://radiantinferno.itch.io/prismorph",
				embedCode: 1187197,
				place: 1,
			},
			{
				itchioLink: "https://devsledge.itch.io/unmasked",
				embedCode: 1187331,
				place: 2,
			},
			{
				itchioLink: "https://dr-skittles.itch.io/blockout",
				embedCode: 1186291,
				place: 3,
			}
		]
	},
	{
		title: "The Jam Before Christmas",
		linkToGame: "https://itch.io/jam/the-jam-before-christmas/entries",
		theme: "Unconventional Solutions | Insect Colony | Easter",
		date: "17 - 18 Dec 2020",
		description: "We end the year with a sweet 2 day game jam hosted in-person and online",
		games: [
			{
				itchioLink: "https://kyle-hammer.itch.io/ant-king",
				embedCode: 859306,
				place: 1,
			},
			{
				itchioLink: "https://usernamepassword.itch.io/egg-factory",
				embedCode: 859349,
				place: 2,
			},
			{
				itchioLink: "https://gastricsparrow.itch.io/the-sting",
				embedCode: 859353,
				place: 3,
			}
		]
	},
	{
		title: "Monthly Jam: August",
		linkToGame: "https://itch.io/jam/monthly-jam-august-2020/entries",
		theme: "Repair | Time | Lightspeed",
		date: "28 - 30 Aug 2020",
		description: "Halfway through the semester and things are speeding up! Entrants had an option of three keywords and chose two for their entry",
		games: [
			{
				itchioLink: "https://voidawake.itch.io/count-down",
				embedCode: 744592,
			},
			{
				itchioLink: "https://ibisgamesandentertainment.itch.io/rift-riders",
				embedCode: 744594
			}
		]
	},
	{
		title: "Gaming Geek Week Jam",
		linkToGames: "https://itch.io/jam/gaming-geek-week-jam",
		theme: "It's [INSERT GAME] but [INSERT TWIST]",
		date: "5 - 10 Jul 2020",
		description: "In this collaborative event with Gamer's Guild and anime@UTS, participants are asked to take inspiration from an existing game and add one of five twists: \"everything hurts\" / \"you gotta go fast\" / \"there's an equal, opposite reaction\" / \"to obtain something, something of equal value must be lost\" / \"no one will blame you for giving up\".",
		games: [
			{
				itchioLink: "https://hermitpal.itch.io/perceptions",
				embedCode: 692399,
				place: 1
			},
			{
				itchioLink: "https://whitericee.itch.io/hextype",
				embedCode: 692489,
			},
			{
				itchioLink: "https://agk.itch.io/fragmented",
				embedCode: 692481
			},
			{
				itchioLink: "https://designdialectics.itch.io/painful-breakout",
				embedCode: 691858
			}
		]
	},
	{
		title: "Monthly Jam: May",
		linkToGames: "https://itch.io/jam/monthly-jam-april-2020",
		theme: "Limited Capacity",
		date: "22 - 24 May 2020",
		description: "Despite busy uni schedules, our Monthly Game Jam is still on! This time we used a game jam theme generator.",
		games: [
			{
				itchioLink: "https://jtama.itch.io/nest-robbers",
				embedCode: 651339
			}
		]
	},
	{
		title: "Monthly Jam: April",
		linkToGames: "https://itch.io/jam/monthly-jam-april-2020",
		theme: "Building Imagination",
		date: "24 - 26 Apr 2020",
		description: "Another installment of our monthly game jam, this time with two randomised words combined to create the theme!",
		games: [
			{
				itchioLink: "https://edisu.itch.io/frigid",
				embedCode: 625071
			},
			{
				itchioLink: "https://gastricsparrow.itch.io/eat-the-broom",
				embedCode: 624407
			}
		]
	},
	{
		title: "Monthly Jam: March",
		linkToGames: "https://itch.io/jam/monthly-jam-march-2020",
		theme: "Liquid / Rare / Motivation / Ritzy",
		date: "27 - 29 Mar 2020",
		description: "In the first of our monthly game jams held on our Discord, our gamedevs compete to make the best game out of four randomly generated words!",
		games: [
			{
				itchioLink: "https://fysho.itch.io/boom-mine",
				embedCode: 597149,
				place: 1
			},
			{
				itchioLink: "https://delcanprobably.itch.io/rare-robots",
				embedCode: 597150,
				place: 2
			},
			{
				itchioLink: "https://edisu.itch.io/liquid-gold",
				embedCode: 597125,
				place: 2,
			}
		]
	},
	{
		title: "Social Distancing Jam",
		linkToGames: "https://itch.io/jam/social-distancing",
		theme: "Toilet Paper",
		date: "17 - 22 Mar 2020",
		description: "An impromptu, casual jam hosted on our Discord at the beginning of COVID-19 quarantine period, with a very topical theme!",
		games: [
			{
				itchioLink: "https://2amstudios.itch.io/rolledout",
				embedCode: 592187,
			},
			{
				itchioLink: "https://kyle-hammer.itch.io/wrap-the-crap",
				embedCode: 592159,
			},
			{
				itchioLink: "https://fysho.itch.io/rolling-over-it",
				embedCode: 592072,
			},
			{
				itchioLink: "https://jtama.itch.io/lawn-rolls",
				embedCode: 592121,
			}
		]
	},
	{
		title: "Interactive Media Jam",
		linkToGames: "https://itch.io/jam/interactive-media-jam",
		theme: "Merging the Physical and Digital",
		date: "27 - 29 Jul 2019",
		description: "Our first Interactive Media jam - branching beyond games to showcase a variety of VR, AR, and Arduino based experiences in the submissions.",
		games: [
			{
				itchioLink: "https://whitericee.itch.io/ex-straw-ordinary-fiasco",
				embedCode: 456837,
			},
			{
				itchioLink: "https://jemztones.itch.io/the-master-is-dead",
				embedCode: 456859,
			},
			{
				itchioLink: "https://gastricsparrow.itch.io/laser-turtles",
				embedCode: 456840,
			},
			{
				itchioLink: "https://cazzerty.itch.io/curiosity2",
				embedCode: 457415,
			},
			{
				itchioLink: "https://jamesey.itch.io/take-flight",
				embedCode: 456850,
			},
			{
				itchioLink: "https://ayielin.itch.io/escape-from-building-11",
				embedCode: 456843,
			},
			{
				itchioLink: "https://daletgrant.itch.io/flux-break",
				embedCode: 456841,
			}
		]
	}
]