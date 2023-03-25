//use promise to wait for api rssponce, then process processApiData to create global constant, and then generatePlayerPageContent
getDataFromApi()
	.then(function () {
		processApiData();
	})
	.then(function () {
		console.log("playerDataGlobal", playerDataGlobal);
		generatePlayerPageContent();
	})
	.then(function () {
		addInteractions();
	});

console.log("playerDataGlobal", playerDataGlobal);
// if(playerDataGlobal.length > 1){
//     generatePlayerPageContent();
// }

//=============================================
//CREATE NEW ARRAY FOR ALL MATCHES (allMatches)
//=============================================

function createAllMatches() {
	for (let i = 0; i < playerDataGlobal.length; i++) {
		const currentPlayer = playerDataGlobal[i]["FullName"];
		const playerNumber = playerDataGlobal[i]["PlayerNumber"];
		const poolLetter = playerDataGlobal[i]["Pool"];

		// Loop through matches
		for (let j = 0; j < matches.length; j++) {
			const map = matches[j].map;
			const matchNumber = matches[j].round;

			// Check if the current player is in the match
			for (let k = 0; k < map.length; k++) {
				if (map[k].includes(playerNumber)) {
					//Get Partner name
					const partnerNumber = map[k][1 - map[k].indexOf(playerNumber)];
					const partnerPlayer = playerDataGlobal.find(
						(player) => player["PlayerNumber"] === partnerNumber
					)["FullName"];

					//Get Oppnent names
					const opponentNumbers = map
						.filter((pair) => !pair.includes(playerNumber))
						.flat();
					const opponentPlayer1 = playerDataGlobal.find(
						(player) => player["PlayerNumber"] === opponentNumbers[0]
					)["FullName"];
					const opponentPlayer2 = playerDataGlobal.find(
						(player) => player["PlayerNumber"] === opponentNumbers[1]
					)["FullName"];

					//make array from current and partner and sort by asc
					const teamForCurrent = [playerNumber, partnerNumber];
					const teamCurrent = teamForCurrent.sort();
					//Opponents sorted by default
					const teamOpponent = opponentNumbers;

					//make score variables
					let currentScore = 0;
					let opponentScore = 0;

					for (let l = 0; l < matchResults.length; l++) {
						const matchTeam = matchResults[l].team;
						if (JSON.stringify(matchTeam) === JSON.stringify(teamCurrent)) {
							currentScore = matchResults[l].score;
						} else if (
							JSON.stringify(matchTeam) === JSON.stringify(teamOpponent)
						) {
							opponentScore = matchResults[l].score;
						}
					} //matchResults l++

					// Calculate the score difference
					const diff = currentScore - opponentScore;

					// Add the result to the array
					allMatches.push({
						teamCurrent,
						teamOpponent,
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
			}
		} //matches j++
	} //playerData i++

	console.log("allMatches", allMatches);

	//make sure the player number is an integer
	const currentPageNumberInt = parseInt(currentPageNumber);
	// console.log(currentPageNumberInt);

	const filteredMatches = allMatches.filter(
		(allMatches) =>
			allMatches.playerNumber === currentPageNumberInt &&
			allMatches.poolLetter === currentPageLetter[0]
	);
	// console.log("filteredMatches", filteredMatches);

	// console.log("currentPageNumberInt", currentPageNumberInt);
	// console.log("currentPageLetter", currentPageLetter);

	// Create DOM elements and html for all the matches
	const cardList_container = document.createElement("div");
	cardList_container.classList.add("card_list", "match_list");

	// Create a row for each match in the filtered results
	filteredMatches.forEach((result) => {
		const {
			teamCurrent,
			teamOpponent,
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
		const scheduleRow_Art = document.createElement("article");
		scheduleRow_Art.classList.add("match_card");
		scheduleRow_Art.setAttribute("expanded", "false");
		scheduleRow_Art.setAttribute("timing", "current");

		const matchNumber_El = document.createElement("div");
		matchNumber_El.classList.add("match_number");
		const matchNumber_Span = document.createElement("span");
		matchNumber_Span.textContent = matchNumber;
		matchNumber_El.appendChild(matchNumber_Span);
		scheduleRow_Art.appendChild(matchNumber_El);

		const matchTeams_El = document.createElement("div");
		matchTeams_El.classList.add("match_card--teams");
		scheduleRow_Art.appendChild(matchTeams_El);

		const teamRow_El = document.createElement("div");
		teamRow_El.classList.add("team_row");
		matchTeams_El.appendChild(teamRow_El);

		const teamCurrent_El = document.createElement("div");
		teamCurrent_El.classList.add("team_row--team", "team-c");
		teamRow_El.appendChild(teamCurrent_El);

		const playerCurrent_El = document.createElement("span");
		playerCurrent_El.classList.add("player-c");
		playerCurrent_El.textContent = currentPlayer + " ";
		teamCurrent_El.appendChild(playerCurrent_El);

		const seperatorCurrent = document.createElement("span");
		seperatorCurrent.classList.add("seperator");
		teamCurrent_El.appendChild(seperatorCurrent);

		const playerPartner_El = document.createElement("span");
		playerPartner_El.classList.add("player-p");
		playerPartner_El.textContent = " " + partnerPlayer;
		teamCurrent_El.appendChild(playerPartner_El);

		//team_row
		const teamRowOpp_El = document.createElement("div");
		teamRowOpp_El.classList.add("team_row");
		matchTeams_El.appendChild(teamRowOpp_El);

		//team_row--team team-o
		const teamOpp_El = document.createElement("div");
		teamOpp_El.classList.add("team_row--team", "team-o");
		teamRowOpp_El.appendChild(teamOpp_El);

		const playerOpp1_El = document.createElement("span");
		playerOpp1_El.classList.add("player-o");
		playerOpp1_El.textContent = opponentPlayer1 + " ";
		teamOpp_El.appendChild(playerOpp1_El);

		const seperatorOpp = document.createElement("span");
		seperatorOpp.classList.add("seperator");
		teamOpp_El.appendChild(seperatorOpp);

		const playerOpp2_El = document.createElement("span");
		playerOpp2_El.classList.add("player-o");
		playerOpp2_El.textContent = " " + opponentPlayer2;
		teamOpp_El.appendChild(playerOpp2_El);

		const scoreMatchOpp_El = document.createElement("div");
		scoreMatchOpp_El.classList.add("score_match");
		teamRowOpp_El.appendChild(scoreMatchOpp_El);

		const opponentScore_El = document.createElement("span");
		opponentScore_El.textContent = opponentScore;
		scoreMatchOpp_El.appendChild(opponentScore_El);

		const scoreMatchCurrent_El = document.createElement("div");
		scoreMatchCurrent_El.classList.add("score_match");
		teamRow_El.appendChild(scoreMatchCurrent_El);
		if (opponentScore > currentScore) {
			scoreMatchCurrent_El.setAttribute("diff", "negative");
		}
		if (opponentScore < currentScore) {
			scoreMatchCurrent_El.setAttribute("diff", "positive");
		}

		const currentScore_El = document.createElement("span");
		currentScore_El.textContent = currentScore;
		scoreMatchCurrent_El.appendChild(currentScore_El);

		const score_Button = document.createElement("a");
		score_Button.classList.add("button", "small");
		score_Button.href =
			baseUrl +
			"/_scoreboard_for.html#" +
			teamCurrent[0] +
			teamCurrent[1] +
			teamOpponent[0] +
			teamOpponent[1];
		score_Button.textContent = "Enter Score";
		scheduleRow_Art.appendChild(score_Button);

		cardList_container.appendChild(scheduleRow_Art);
	});

	//clear all previous elements
	document.getElementById("player_schedule").innerHTML = "";
	//append all new
	document.getElementById("player_schedule").appendChild(cardList_container);

	//match mard toggle needs to be re-run every time new cards are created
	addInteractions();
}

//=============================================
//generate Modal List items and content
//=============================================

function generateModalList() {
	//for each row in the sheet
	modalListContainer.innerHTML = "";
	for (let i = 0; i < playerDataGlobal.length; i++) {
		let rowInfo = playerDataGlobal[i];

		//Only create a row if the pool matches the id in the URL
		if (rowInfo["Pool"] == currentPageLetter) {
			//create <li>
			let listItem = document.createElement("li");
			//create <a> with link and class
			let anchor = document.createElement("a");
			anchor.classList.add("name_card");
			anchor.href = "#" + rowInfo["Pool"] + rowInfo["PlayerNumber"];
			anchor.setAttribute("pool", rowInfo["Pool"]);
			anchor.setAttribute("playerNumber", rowInfo["PlayerNumber"]);
			listItem.appendChild(anchor);
			let anchorText = document.createTextNode(rowInfo["FullName"]);
			anchor.appendChild(anchorText);
			//append the <li> to the list
			modalListContainer.appendChild(listItem);

			$(".name_card").click(function () {
				//add delay so the new url is already there when it executes
				closeModal();
				setTimeout(generatePlayerPageContent, 100);
			});
		}
	}
}

//=============================================
//generate Player Profile content
//=============================================

function generatePlayerProfile() {
	//for each row in the sheet
	for (let i = 0; i < playerDataGlobal.length; i++) {
		let rowInfo = playerDataGlobal[i];

		//Match player number nad pool (playerID)
		if (
			rowInfo["Pool"] == currentPageLetter &&
			rowInfo["PlayerNumber"] == currentPageNumber
		) {
			let playerName = rowInfo["FullName"];
			//DEBUG logging to make sure this returns proper row
			console.log(playerName);

			//dropdown
			$(".dropdown_input--label span").html(rowInfo["FullName"]);
			//prifole image
			$(".player_overview .profile_image span").html(
				rowInfo["FullName"]
					.toString()
					.match(/(^\S\S?|\b\S)?/g)
					.join("")
					.match(/(^\S|\S$)?/g)
					.join("")
					.toUpperCase()
			);
			$(".player_overview .profile_image img").attr("src", rowInfo["src"]);
			$('.player_overview--scores [data="total"] span:first-child').html(
				rowInfo["W"]
			);
			$('.player_overview--scores [data="total"] span:last-child').html(
				rowInfo["L"]
			);
			$('.player_overview--scores [data="diff"] span').html(rowInfo["D"]);
			if (rowInfo["D"] > 0) {
				$('.player_overview--scores [data="diff"]').attr("diff", "positive");
			}
			if (rowInfo["D"] < 0) {
				$('.player_overview--scores [data="diff"]').attr("diff", "negative");
			}
		}
	}
} //generatePlayerProfile()

function addModalCardClick() {
	$(".name_card").click(function () {
		//add delay so the new url is already there when it executes
		closeModal();
		setTimeout(generatePlayerPageContent, 100);
	});
}

// create lists and modify content for the page
function generatePlayerPageContent() {
	generatePlayerProfile();
	generateModalList();
	setCurrentItem();
	createAllMatches();
}

//add interactions to new object once they're created
function addInteractions() {
	addMatchCardToggle();
	addModalCardClick();
}
