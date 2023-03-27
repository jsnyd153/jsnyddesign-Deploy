const allMatches = [];

function createAllMatches() {
	return;
} //create createAllMatches

function generatePoolModalList() {
	const modalListContainer = $("#poolList .modal_bottom--content")[0];

	const poolMap = new Map();
	for (const player of playerDataGlobal) {
		if (player.Pool !== undefined && player.Pool !== "") {
			if (!poolMap.has(player.Pool)) {
				poolMap.set(player.Pool, []);
			}
			poolMap.get(player.Pool).push(player.FullName);
		}
	}

	const poolList_El = document.createElement("div");
	poolList_El.classList.add("modal_bottom--pool_list");

	for (const [Pool, players] of poolMap.entries()) {
		const poolContainer = document.createElement("a");
		poolContainer.classList.add("modal_bottom--pool_item");
		poolContainer.href = baseUrl + "/_poolStandings.html#" + Pool;
		poolContainer.setAttribute("pool", Pool);
		poolList_El.appendChild(poolContainer);

		poolContainer.addEventListener("click", function () {
			closeModal();
			setTimeout(getURLProps, 50);
			setTimeout(generatePoolStandings, 100);
			setTimeout(setCurrentPool, 100);
		});

		const poolTitle_Label = document.createElement("h4");
		poolTitle_Label.textContent = "Pool " + Pool;
		const playerList = document.createElement("ul");
		playerList.classList.add("modal_bottom--player_list");

		poolContainer.appendChild(poolTitle_Label);
		poolContainer.appendChild(playerList);

		for (const player of players) {
			const playerItem = document.createElement("li");
			playerItem.classList.add("name_card");
			playerItem.textContent = player;

			playerList.appendChild(playerItem);
		}
	}
	modalListContainer.appendChild(poolList_El);
	// setCurrentPool();
}

// function setCurrentPool() {
// 	$(".modal_bottom--pool_item").each(function () {
// 		let currentPool = $(this).attr("pool");

// 		if (currentPool == currentPageLetter) {
// 			$(this).addClass("current");
// 		} else {
// 			$(this).removeClass("current");
// 		}

// 		$(".main_nav--controls .dropdown_input--label span").html(
// 			"Pool " + currentPageLetter
// 		);

// 		if (currentPageLetter[0] === "https") {
// 			$(".main_nav--controls .dropdown_input--label span").html(
// 				"Select a pool "
// 			);
// 			console.log("true");
// 		}
// 	});
// }

generatePoolModalList();
// generateModalList(playerDataGlobal);
