function searchPlayers(query) {
	const searchResults = document.getElementById("search-results");

	searchResults.innerHTML = "";
	const regex = new RegExp(query, "i");
	const filteredPlayers = playerDataGlobal.filter(
		(player) =>
			player.FullName &&
			player.playerID &&
			(regex.test(player.FullName) || regex.test(player.playerID))
	);
	filteredPlayers.forEach((player) => {
		const li = document.createElement("div");
		const playerLink_El = document.createElement("a");
		playerLink_El.textContent = player.FullName + " (Pool " + player.Pool + ")";
		playerLink_El.classList.add("name_card", "large");
		playerLink_El.href =
			baseUrl + "/_individualSchedule.html#" + player.playerID;
		li.appendChild(playerLink_El);

		searchResults.appendChild(li);
	});
}
