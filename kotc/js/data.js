//data set
const players = [
	{
		number: 1,
		player: "Jeremy Snyder,",
	},
	{
		number: 2,
		player: "Jan Bohan",
	},
	{
		number: 3,
		player: "Abin Cheriyan",
	},
	{
		number: 4,
		player: "Yang Yang",
	},
	{
		number: 5,
		player: "Duy Nguyen",
	},
	{
		number: 6,
		player: "Tim David",
	},
	{
		number: 7,
		player: "Johnny Walker",
	},
	{
		number: 8,
		player: "Matt Shipp",
	},
];

const matches_8 = [
	[
		[1, 2],
		[5, 6],
	],
	[
		[1, 3],
		[6, 8],
	],
	[
		[1, 4],
		[6, 7],
	],
	[
		[1, 5],
		[4, 8],
	],
	[
		[1, 6],
		[3, 8],
	],
	[
		[1, 7],
		[3, 5],
	],
	[
		[1, 8],
		[2, 7],
	],
	[
		[2, 3],
		[5, 8],
	],
	[
		[2, 4],
		[5, 7],
	],
	[
		[2, 5],
		[4, 7],
	],
	[
		[2, 6],
		[3, 7],
	],
	[
		[2, 7],
		[1, 8],
	],
	[
		[2, 8],
		[4, 6],
	],
	[
		[3, 4],
		[7, 8],
	],
	[
		[3, 5],
		[1, 7],
	],
	[
		[3, 6],
		[4, 5],
	],
	[
		[3, 7],
		[2, 6],
	],
	[
		[3, 8],
		[1, 6],
	],
	[
		[4, 5],
		[3, 6],
	],
	[
		[4, 6],
		[2, 8],
	],
	[
		[4, 7],
		[2, 5],
	],
	[
		[4, 8],
		[1, 5],
	],
	[
		[5, 6],
		[1, 2],
	],
	[
		[5, 7],
		[2, 4],
	],
	[
		[5, 8],
		[2, 3],
	],
	[
		[6, 7],
		[1, 4],
	],
	[
		[6, 8],
		[1, 3],
	],
	[
		[7, 8],
		[3, 4],
	],
];

// Compiled Data

$(".match_list").each(function () {
	let match_list = $(this)[0];
	let currentPlayer = $("body").attr("id");

	var matchDataA1 = {
		items: [
			{
				timing: "complete",
				match: 1,
				currentPlayer: "Jeremy Snyder",
				partnerPlayer: "Johny Walker",
				currentScore: 0,
				opponentPlayer1: "Abin Cheriyan",
				opponentPlayer2: "Yang Yang",
				opponentScore: 0,
				matchCode: "K0000",
			},
			{
				timing: "complete",
				match: 2,
				currentPlayer: "Jeremy Snyder",
				partnerPlayer: "Tim Davis",
				currentScore: 0,
				opponentPlayer1: "Dan Bohan",
				opponentPlayer2: "Yang Yang",
				opponentScore: 0,
				matchCode: "K0000",
			},
			{
				timing: "current",
				match: 3,
				currentPlayer: "Jeremy Snyder",
				partnerPlayer: "Matt Shipp",
				currentScore: 0,
				opponentPlayer1: "Dan Bohan",
				opponentPlayer2: "Johnny Walker",
				opponentScore: 0,
				matchCode: "K0000",
			},
			{
				timing: "upcoming",
				match: 4,
				currentPlayer: "Jeremy Snyder",
				partnerPlayer: "Dan Bohan",
				currentScore: 0,
				opponentPlayer1: "Yang Yang",
				opponentPlayer2: "Tim Davis",
				opponentScore: 0,
				matchCode: "K0000",
			},
			{
				timing: "upcoming",
				match: 5,
				currentPlayer: "Jeremy Snyder",
				partnerPlayer: "Yang Yang",
				currentScore: 0,
				opponentPlayer1: "Matt Shipp",
				opponentPlayer2: "Duy Nguyen",
				opponentScore: 0,
				matchCode: "K0000",
			},
			{
				timing: "upcoming",
				match: 6,
				currentPlayer: "Jeremy Snyder",
				partnerPlayer: "Duy Nguyen",
				currentScore: 0,
				opponentPlayer1: "Dan Bohan",
				opponentPlayer2: "Abin Cheriyan",
				opponentScore: 0,
				matchCode: "K0000",
			},
			{
				timing: "upcoming",
				match: 7,
				currentPlayer: "Jeremy Snyder",
				partnerPlayer: "Abin Cheriyan",
				currentScore: 0,
				opponentPlayer1: "Matt Shipp",
				opponentPlayer2: "Tim Davis",
				opponentScore: 0,
				matchCode: "K0000",
			},
		],
	};
	let match_html = matchDataA1.items
		.map(function (v, i) {
			return `<article class="match_card" timing="${v.timing}" expanded="false" matchCode="${v.matchCode}"> <div class = "match_number"> <span> ${v.match} </span> </div> <div class = "match_card--teams"> <div class = "team_row"> <div class = "team_row--team team-c"> <span class = "player-c">${v.currentPlayer} </span> <span class = "seperator"> </span> <span class = "player-p"> ${v.partnerPlayer} </span> <i> </i> </div> <div class = "score_match"> <span> ${v.currentScore} </span> </div> </div> <div class = "team_row"> <div class = "team_row--team team-o"> <span class = "player-o"> ${v.opponentPlayer1} </span> <span class = "seperator"> </span> <span class = "player-o"> ${v.opponentPlayer2} </span> <i> </i> </div> <div class = "score_match"> <span> ${v.opponentScore} </span> </div> </div> </div> <button type = "button" class = "button small"> Edit score </button> </article>`;
		})
		.join("");

	match_list.innerHTML = match_html;
});
