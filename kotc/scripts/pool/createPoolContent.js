const allMatches = [];

function createAllMatches() {
	return;
} //create createAllMatches

function createUnorderedList() {
	const modalListContainer = $("#pools_all .modal_bottom--content")[0];

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
		poolContainer.href = "#" + Pool;
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
	setCurrentPool();
}

function setCurrentPool() {
	$(".modal_bottom--pool_item").each(function () {
		let currentPool = $(this).attr("pool");

		if (currentPool == currentPageLetter) {
			$(this).addClass("current");
		} else {
			$(this).removeClass("current");
		}

		$(".main_nav--controls .dropdown_input--label span").html(
			"Pool " + currentPageLetter
		);

		if (currentPageLetter[0] === "https") {
			$(".main_nav--controls .dropdown_input--label span").html(
				"Select a pool "
			);
			console.log("true");
		}
	});
}

createUnorderedList();
// generateModalList(playerDataGlobal);

function generatePoolStandings() {
	let modalList = $("#player_cards")[0];
	modalList.innerHTML = "";

	// for each row in the sheet
	for (let i = 0; i < playerDataGlobal.length; i++) {
		let rowInfo = playerDataGlobal[i];

		//Only create a row if the pool matches the id in the URL
		if (rowInfo["Pool"] == currentPageLetter) {
			//create <a>
			let listItem = document.createElement("a");
			listItem.classList.add("standings_card");
			listItem.setAttribute("row_rank", rowInfo["RowRank"]);
			listItem.setAttribute("true_rank", rowInfo["Rank"]);
			listItem.style.setProperty("--rank", rowInfo["RowRank"]);
			listItem.style.setProperty("--index", rowInfo["PlayerNumber"]);
			listItem.href =
				baseUrl +
				"/_individualSchedule.html#" +
				rowInfo["Pool"] +
				rowInfo["PlayerNumber"];

			// create .circle_number
			let circleNumber_El = document.createElement("div");
			circleNumber_El.classList.add("circle_number");
			let circleNumber_Text = document.createTextNode(rowInfo["Rank"]);
			circleNumber_El.appendChild(circleNumber_Text);
			//append circle_number number
			listItem.appendChild(circleNumber_El);

			//create .profile_image
			let profileImage_El = document.createElement("div");
			profileImage_El.classList.add("profile_image");
			let profileImage_Span = document.createElement("span");
			//create intiails from FullName and set as text
			let profileImage_Text = document.createTextNode(
				rowInfo["FullName"]
					.match(/(\b\S)?/g)
					.join("")
					.match(/(^\S|\S$)?/g)
					.join("")
					.toUpperCase()
			);
			profileImage_Span.appendChild(profileImage_Text);
			profileImage_El.appendChild(profileImage_Span);
			let profileImage_Img = document.createElement("img");
			profileImage_Img.src = rowInfo["src"];
			profileImage_Img.appendChild(profileImage_El);
			listItem.appendChild(profileImage_El);

			//create .standings_card--name
			let cardName_El = document.createElement("div");
			cardName_El.classList.add("standings_card--name");
			let cardName_Text = document.createTextNode(rowInfo["FullName"]);
			cardName_El.appendChild(cardName_Text);
			listItem.appendChild(cardName_El);

			//create .standings_card--scores
			let scores_El = document.createElement("div");
			scores_El.classList.add("standings_card--scores");
			//total score box
			let scoreTotal_El = document.createElement("div");
			scoreTotal_El.classList.add("score_total");
			scoreTotal_El.setAttribute("data", "total");
			let scoreTotal_Text = document.createTextNode(
				rowInfo["W"] + "-" + rowInfo["L"]
			);
			scoreTotal_El.appendChild(scoreTotal_Text);
			scores_El.appendChild(scoreTotal_El);
			//point differntial box
			let scoreDiff_El = document.createElement("div");
			scoreDiff_El.classList.add("score_total");
			scoreDiff_El.setAttribute("data", "diff");
			if (rowInfo["D"] > 0) {
				scoreDiff_El.setAttribute("diff", "positive");
			}
			if (rowInfo["D"] < 0) {
				scoreDiff_El.setAttribute("diff", "negative");
			}
			let scoreDiff_Text = document.createTextNode(rowInfo["D"]);
			scoreDiff_El.appendChild(scoreDiff_Text);
			scores_El.appendChild(scoreDiff_El);
			//append to list
			listItem.appendChild(scores_El);

			//append the <li> to the list
			modalList.appendChild(listItem);
		} //filter for matching pool letter
	} //each playerDataGlobal
	// setCurrent();
} //generateModalList()

// generatePoolStandings();

function generatePageContent() {
	generatePoolStandings();
	setOrder();
}

function setOrder() {
	let sortSetting = $('#sort_function input[type="radio"]:checked').val();
	$("#player_cards").attr("list_order", sortSetting);
	console.log(sortSetting);

	let totalCards = $(".standings_card").length;

	if (sortSetting == "rank") {
		$(".standings_card").each(function () {
			let cardRank = parseInt($(this).attr("row_rank"));

			if (cardRank == totalCards) {
				$(".standings_card").removeClass("last_item");
				$(this).addClass("last_item");
			}
		});
	} else {
		$(".standings_card").removeClass("last_item");
		$(".standings_card:last-child").addClass("last_item");
	}
}

$('#sort_function input[type="radio"]').click(function () {
	setOrder();
});
