const allMatches = [];

function createAllMatches() {
	return;
}

function createPlayerMap() {
	const poolLetter = currentPageLetter[0];
	const playerNumbers = currentPageNumber[0].slice(0).split("").map(Number);
	console.log("playerNumbers", playerNumbers);
	const matchingPlayers = playerDataGlobal.filter(
		(player) =>
			player.Pool === poolLetter && playerNumbers.includes(player.PlayerNumber)
	);
	const fullNames = matchingPlayers.map((player) => player.FullName); // Find the map const
	matchingMap = matches_8.find((map) =>
		map.map.flat().every((playerNumber) => playerNumbers.includes(playerNumber))
	); // Swap digits with full names const
	swappedMap = matchingMap.map.map((pair) =>
		pair.map(
			(playerNumber) =>
				matchingPlayers.find((player) => player.PlayerNumber === playerNumber)
					.FullName
		)
	);

	console.log(swappedMap);
	$("#player00").html(swappedMap[0][0]);
	$("#player10").html(swappedMap[1][0]);
	$("#player01").html(swappedMap[0][1]);
	$("#player11").html(swappedMap[1][1]);
}

function generatePageContent() {
	createPlayerMap();
}

function submitScore() {
	console.log("push scores");
	history.back();
}

function getExsitingScores() {
	const team1 = currentPageNumber[0]
		.substring(0, 2)
		.split("")
		.map((digit) => parseInt(digit, 10));

	const team2 = currentPageNumber[0]
		.substring(2)
		.split("")
		.map((digit) => parseInt(digit, 10));

	console.log(team1);
	console.log(team2);

	const exsitingScores1 = matchResults.find((result) => {
		return (
			(result.team[0] === team1[0] && result.team[1] === team1[1]) ||
			(result.team[0] === team1[1] && result.team[1] === team1[0])
		);
	});

	const exsitingScores2 = matchResults.find((result) => {
		return (
			(result.team[0] === team2[0] && result.team[1] === team2[1]) ||
			(result.team[0] === team2[1] && result.team[1] === team2[0])
		);
	});

	const scoreTeam1 = exsitingScores1 ? exsitingScores1.score : null;
	const scoreTeam2 = exsitingScores2 ? exsitingScores2.score : null;
	console.log("score", scoreTeam1);
	console.log("score", scoreTeam2);

	$("#scoreHome").val(scoreTeam1);
	$("#scoreAway").val(scoreTeam2);
	$("#teamHome h1").html(scoreTeam1);
	$("#teamAway h1").html(scoreTeam1);
}

getExsitingScores();
