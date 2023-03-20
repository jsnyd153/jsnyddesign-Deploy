//data set
const players = [
	{
		playerNumber: 1,
		player: "Jeremy Snyder,",
	},
	{
		playerNumber: 2,
		player: "Dan Bohan",
	},
	{
		playerNumber: 3,
		player: "Abin Cheriyan",
	},
	{
		playerNumber: 4,
		player: "Yang Yang",
	},
	{
		playerNumber: 5,
		player: "Duy Nguyen",
	},
	{
		playerNumber: 6,
		player: "Tim David",
	},
	{
		playerNumber: 7,
		player: "Johnny Walker",
	},
	{
		playerNumber: 8,
		player: "Matt Shipp",
	},
];

const matches = [
	{
		round: 1,
		map: [[1, 2][(5, 6)]],
	},
];

// Compiled Data

const result = matches.map((match) =>
	match.map((playerNumber) =>
		players
			.filter((player) => playerNumber.includes(player.playerNumber))
			.map((player) => player.player)
	)
);
console.log(result);

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
