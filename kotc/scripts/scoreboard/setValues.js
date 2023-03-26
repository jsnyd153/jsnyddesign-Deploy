function createAllMatches() {
	return;
}

let currentPageString = currentUrl.split("#").pop();
console.log("currentPageString", currentPageString);

function createPlayerMap() {
	const inputString = "A3478"; // Find the players
	const poolLetter = inputString[0];
	const playerNumbers = inputString.slice(1).split("").map(Number);
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

getDataFromApi()
	.then(function () {
		processApiData();
	})
	.then(function () {
		createPlayerMap();
	});
// .then(function () {
// 	addInteractions();
// });
