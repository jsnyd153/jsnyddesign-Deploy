const matches = [
	{
		round: 1,
		map: [
			[1, 2],
			[5, 6],
		],
	},
	{
		round: 1,
		map: [
			[3, 4],
			[7, 8],
		],
	},
	{
		round: 2,
		map: [
			[1, 3],
			[6, 8],
		],
	},
	{
		round: 2,
		map: [
			[2, 4],
			[5, 7],
		],
	},
	{
		round: 3,
		map: [
			[1, 8],
			[2, 7],
		],
	},
	{
		round: 3,
		map: [
			[3, 6],
			[4, 5],
		],
	},
	{
		round: 4,
		map: [
			[1, 7],
			[3, 5],
		],
	},
	{
		round: 4,
		map: [
			[2, 8],
			[4, 6],
		],
	},
	{
		round: 5,
		map: [
			[1, 5],
			[4, 8],
		],
	},
	{
		round: 5,
		map: [
			[2, 6],
			[3, 7],
		],
	},
	{
		round: 6,
		map: [
			[1, 4],
			[6, 7],
		],
	},
	{
		round: 6,
		map: [
			[2, 3],
			[5, 8],
		],
	},
	{
		round: 7,
		map: [
			[4, 7],
			[2, 5],
		],
	},
	{
		round: 7,
		map: [
			[1, 6],
			[3, 8],
		],
	},
];

const matchResults = [
	{
		team: [1, 2],
		score: 15,
	},
	{
		team: [1, 3],
		score: 15,
	},
	{
		team: [1, 4],
		score: 15,
	},
	{
		team: [1, 5],
		score: 15,
	},
	{
		team: [1, 6],
		score: 15,
	},
	{
		team: [1, 7],
		score: 15,
	},
	{
		team: [1, 8],
		score: 15,
	},
	{
		team: [2, 3],
		score: 15,
	},
	{
		team: [2, 4],
		score: 15,
	},
	{
		team: [2, 5],
		score: 7,
	},
	{
		team: [2, 6],
		score: 15,
	},
	{
		team: [2, 7],
		score: 14,
	},
	{
		team: [2, 8],
		score: 15,
	},
	{
		team: [3, 4],
		score: 15,
	},
	{
		team: [3, 5],
		score: 13,
	},
	{
		team: [3, 6],
		score: 15,
	},
	{
		team: [3, 7],
		score: 11,
	},
	{
		team: [3, 8],
		score: 11,
	},
	{
		team: [4, 5],
		score: 11,
	},
	{
		team: [4, 6],
		score: 12,
	},
	{
		team: [4, 7],
		score: 15,
	},
	{
		team: [4, 8],
		score: 14,
	},
	{
		team: [5, 6],
		score: 10,
	},
	{
		team: [5, 7],
		score: 12,
	},
	{
		team: [5, 8],
		score: 12,
	},
	{
		team: [6, 7],
		score: 14,
	},
	{
		team: [6, 8],
		score: 13,
	},
	{
		team: [7, 8],
		score: 11,
	},
];

function mapAndFilterMatches() {
	//Map players to the matchups and scores for individual matches
	const result = [];

	// Loop through players
	for (let i = 0; i < playerData.length; i++) {
		const currentPlayer = playerData[i].playerName;
		const playerNumber = playerData[i].playerNumber;
		const poolLetter = playerData[i].pool;
		// Loop through matches
		for (let j = 0; j < matches.length; j++) {
			const map = matches[j].map;
			const matchNumber = matches[j].round;

			// Check if the current player is in the match
			for (let k = 0; k < map.length; k++) {
				if (map[k].includes(playerNumber)) {
					const partnerNumber = map[k][1 - map[k].indexOf(playerNumber)];
					const partnerPlayer = playerData.find(
						(player) => player.playerNumber === partnerNumber
					).playerName;

					const opponentNumbers = map
						.filter((pair) => !pair.includes(playerNumber))
						.flat();
					const opponentPlayer1 = playerData.find(
						(player) => player.playerNumber === opponentNumbers[0]
					).playerName;
					const opponentPlayer2 = playerData.find(
						(player) => player.playerNumber === opponentNumbers[1]
					).playerName;

					// Find the corresponding team values in matchResults
					//need to sort current/partner in asc order first so it matches a match result
					const teamsFor1 = [playerNumber, partnerNumber];
					const team1 = teamsFor1.sort();
					//opponent numbers are already in asc order since they are directly from the map
					const team2 = opponentNumbers;
					let currentScore = 0;
					let opponentScore = 0;
					for (let l = 0; l < matchResults.length; l++) {
						const matchTeam = matchResults[l].team;
						if (JSON.stringify(matchTeam) === JSON.stringify(team1)) {
							currentScore = matchResults[l].score;
						} else if (JSON.stringify(matchTeam) === JSON.stringify(team2)) {
							opponentScore = matchResults[l].score;
						}
					}

					// Calculate the score difference
					const diff = currentScore - opponentScore;

					// Add the result to the array
					result.push({
						team1,
						team2,
						matchNumber,
						currentPlayer,
						partnerPlayer,
						opponentPlayer1,
						opponentPlayer2,
						currentScore,
						opponentScore,
						Diff: diff,
						playerNumber,
						poolLetter,
					});
				}
			} //k++
		} //j++
	} //++i

	console.log(result);

	//change to dynamic value based on body

	const pagePlayerNumber = parseInt($("body").attr("playerNumber"));
	const pagePoolLetter = $("body").attr("pool");

	console.log(pagePlayerNumber);
	console.log(pagePoolLetter);

	const filteredResults = result.filter(
		(result) =>
			result.playerNumber === pagePlayerNumber &&
			result.poolLetter === pagePoolLetter
	);

	// add a dynamic vaue of the pool
	//filter to mathc both pool player number

	console.log(filteredResults);

	// Create DOM elements and html for all the matches
	const table = document.createElement("div");
	table.classList.add("card_list", "match_list");

	// Create a row for each match in the filtered results
	filteredResults.forEach((result) => {
		const {
			matchNumber,
			currentPlayer,
			partnerPlayer,
			opponentPlayer1,
			opponentPlayer2,
			currentScore,
			opponentScore,
			poolLetter,
			Diff,
		} = result;

		//single match item
		const row = document.createElement("article");
		row.classList.add("match_card");
		row.setAttribute("expanded", "false");
		row.setAttribute("timing", "current");

		//match number
		const matchNumberEl = document.createElement("div");
		const matchNumberSpan = document.createElement("span");
		matchNumberEl.classList.add("match_number");
		matchNumberSpan.textContent = matchNumber;
		matchNumberEl.appendChild(matchNumberSpan);
		row.appendChild(matchNumberEl);

		//match team container
		const matchTeamsEl = document.createElement("div");
		matchTeamsEl.classList.add("match_card--teams");
		row.appendChild(matchTeamsEl);

		//team_row
		const team_rowEl = document.createElement("div");
		team_rowEl.classList.add("team_row");
		matchTeamsEl.appendChild(team_rowEl);

		//team_row--team team-c
		const team_row_team_cEl = document.createElement("div");
		team_row_team_cEl.classList.add("team_row--team", "team-c");
		team_rowEl.appendChild(team_row_team_cEl);

		const player_cEl = document.createElement("span");
		player_cEl.classList.add("player-c");
		player_cEl.textContent = currentPlayer + " ";
		team_row_team_cEl.appendChild(player_cEl);

		const seperator_c = document.createElement("span");
		seperator_c.classList.add("seperator");
		team_row_team_cEl.appendChild(seperator_c);

		const player_pEl = document.createElement("span");
		player_pEl.classList.add("player-p");
		player_pEl.textContent = " " + partnerPlayer;
		team_row_team_cEl.appendChild(player_pEl);

		//team_row
		const team_row_oEl = document.createElement("div");
		team_row_oEl.classList.add("team_row");
		matchTeamsEl.appendChild(team_row_oEl);

		//team_row--team team-o
		const team_row_team_oEl = document.createElement("div");
		team_row_team_oEl.classList.add("team_row--team", "team-o");
		team_row_oEl.appendChild(team_row_team_oEl);

		const player_o1El = document.createElement("span");
		player_o1El.classList.add("player-o");
		player_o1El.textContent = opponentPlayer1 + " ";
		team_row_team_oEl.appendChild(player_o1El);

		const seperator_o = document.createElement("span");
		seperator_o.classList.add("seperator");
		team_row_team_oEl.appendChild(seperator_o);

		const player_o2El = document.createElement("span");
		player_o2El.classList.add("player-o");
		player_o2El.textContent = " " + opponentPlayer2;
		team_row_team_oEl.appendChild(player_o2El);

		const score_match_oEl = document.createElement("div");
		score_match_oEl.classList.add("score_match");
		team_row_oEl.appendChild(score_match_oEl);

		const opponentScoreEl = document.createElement("span");
		opponentScoreEl.textContent = opponentScore;
		score_match_oEl.appendChild(opponentScoreEl);

		const score_match_cEl = document.createElement("div");
		score_match_cEl.classList.add("score_match");
		team_rowEl.appendChild(score_match_cEl);
		if (opponentScore > currentScore) {
			score_match_cEl.setAttribute("diff", "negative");
		}
		if (opponentScore < currentScore) {
			score_match_cEl.setAttribute("diff", "positive");
		}

		const currentScoreEl = document.createElement("span");
		currentScoreEl.textContent = currentScore;
		score_match_cEl.appendChild(currentScoreEl);

		const scoreButton = document.createElement("button");
		scoreButton.classList.add("button", "small");
		scoreButton.textContent = "Enter Score";
		row.appendChild(scoreButton);

		table.appendChild(row);
	});

	//clear all previous elements
	document.getElementById("player_schedule").innerHTML = "";
	//append all new
	document.getElementById("player_schedule").appendChild(table);

	//====================================
	//Function to expand/collapse cards - this needs to be run every time new cards are generated
	//====================================
	$(".match_card").click(function () {
		if ($(this).hasClass("off")) {
			return;
		} else {
			$(this).attr("expanded", function (index, attr) {
				return attr == "false" ? null : "false";
			});
		}
	});
}

mapAndFilterMatches();
