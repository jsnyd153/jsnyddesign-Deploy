let currentUrl = window.location.href;

//break the ID off the URL and get the letter and number seperatly
let currentPageNumber = currentUrl.split("#").pop().match(/\d+/);
let currentPageLetter = currentUrl
	.split("#")
	.pop()
	.match(/[a-zA-Z]+/);

//define Base url URL
let urlParts = currentUrl.split("/");
urlParts.pop();
let baseUrl = urlParts.join("/");

console.log(
	" | currentPageLetter=" + currentPageLetter,
	" | currentPageNumber=" + currentPageNumber
);

//Sets current the corresponding modal item
function setCurrentItem() {
	$(".name_card").each(function () {
		if ($(this).attr("playernumber") == currentPageNumber) {
			$(this).addClass("current");
		} else {
			$(this).removeClass("current");
		}
	});
	$(".modal_pool").each(function () {
		if ($(this).attr("pool") == currentPageLetter) {
			$(this).addClass("current");
		} else {
			$(this).removeClass("current");
		}
	});
}

function addMatchCardToggle() {
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

//Replace this with ta dynamic option --> need to be able to swap between maps
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

//Replace this with scores pulled from the apisheet
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

//create array to store match info

const allMatches = [];

const modalListContainer = $(".modal_bottom--player_list")[0];

function generatePlayerPageContent() {
	let modalListContainer = $(".modal_bottom--player_list")[0];

	//fetch from spreadsheet
	fetch("https://api.apispreadsheets.com/data/MKdeYIPHjYWB7snk/").then(
		(res) => {
			if (res.status === 200) {
				// SUCCESS
				res
					.json()
					.then((data) => {
						const playerData = data["data"];
						//=============================================
						//CREATE NEW ARRAY FOR ALL MATCHES (allMatches)
						//=============================================

						function createAllMatches() {
							console.log("playerData", playerData);
							for (let i = 0; i < playerData.length; i++) {
								const currentPlayer = playerData[i]["Full Name"];
								const playerNumber = playerData[i]["Player Number"];
								const poolLetter = playerData[i]["Pool"];

								// Loop through matches
								for (let j = 0; j < matches.length; j++) {
									const map = matches[j].map;
									const matchNumber = matches[j].round;

									// Check if the current player is in the match
									for (let k = 0; k < map.length; k++) {
										if (map[k].includes(playerNumber)) {
											//Get Partner name
											const partnerNumber =
												map[k][1 - map[k].indexOf(playerNumber)];
											const partnerPlayer = playerData.find(
												(player) => player["Player Number"] === partnerNumber
											)["Full Name"];

											//Get Oppnent names
											const opponentNumbers = map
												.filter((pair) => !pair.includes(playerNumber))
												.flat();
											const opponentPlayer1 = playerData.find(
												(player) =>
													player["Player Number"] === opponentNumbers[0]
											)["Full Name"];
											const opponentPlayer2 = playerData.find(
												(player) =>
													player["Player Number"] === opponentNumbers[1]
											)["Full Name"];

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
												if (
													JSON.stringify(matchTeam) ===
													JSON.stringify(teamCurrent)
												) {
													currentScore = matchResults[l].score;
												} else if (
													JSON.stringify(matchTeam) ===
													JSON.stringify(teamOpponent)
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
							console.log(currentPageNumberInt);

							const filteredMatches = allMatches.filter(
								(allMatches) =>
									allMatches.playerNumber === currentPageNumber &&
									allMatches.poolLetter === currentPageLetter
							);

							console.log(filteredMatches);

							// Create DOM elements and html for all the matches
							const table = document.createElement("div");
							table.classList.add("card_list", "match_list");

							// Create a row for each match in the filtered results
							filteredMatches.forEach((result) => {
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

							//match mard toggle needs to be re-run every time new cards are created
							addMatchCardToggle();
						}
						createAllMatches();

						//=============================================
						//generate Modal List items and content
						//=============================================

						function generateModalList() {
							//for each row in the sheet
							for (let i = 0; i < playerData.length; i++) {
								let rowInfo = playerData[i];

								//Only create a row if the pool matches the id in the URL
								if (rowInfo["Pool"] == currentPageLetter) {
									//create <li>
									let listItem = document.createElement("li");
									//create <a> with link and class
									let anchor = document.createElement("li");
									anchor.classList.add("name_card");
									anchor.href =
										"#" + rowInfo["Pool"] + rowInfo["Player Number"];
									anchor.setAttribute("pool", rowInfo["Pool"]);
									anchor.setAttribute("playerNumber", rowInfo["Player Number"]);
									listItem.appendChild(anchor);
									let anchorText = document.createTextNode(
										rowInfo["Full Name"]
									);
									anchor.appendChild(anchorText);
									//append the <li> to the list
									modalListContainer.appendChild(listItem);
								}
							}
						}

						generateModalList();

						//=============================================
						//generate Player Profile content
						//=============================================

						function generatePlayerProfile() {
							//for each row in the sheet
							for (let i = 0; i < playerData.length; i++) {
								let rowInfo = playerData[i];

								//Match player number nad pool (playerID)
								if (
									rowInfo["Pool"] == currentPageLetter &&
									rowInfo["Player Number"] == currentPageNumber
								) {
									let playerName = rowInfo["Full Name"];
									//DEBUG logging to make sure this returns proper row
									console.log(playerName);

									//dropdown
									$(".dropdown_input--label span").html(rowInfo["Full Name"]);
									//prifole image
									$(".player_overview .profile_image span").html(
										rowInfo["Full Name"]
											.toString()
											.match(/(^\S\S?|\b\S)?/g)
											.join("")
											.match(/(^\S|\S$)?/g)
											.join("")
											.toUpperCase()
									);
									$(".player_overview .profile_image img").attr(
										"src",
										rowInfo["src"]
									);
									$(
										'.player_overview--scores [data="total"] span:first-child'
									).html(rowInfo["W"]);
									$(
										'.player_overview--scores [data="total"] span:last-child'
									).html(rowInfo["L"]);
									$('.player_overview--scores [data="diff"] span').html(
										rowInfo["D"]
									);
									if (rowInfo["D"] > 0) {
										$('.player_overview--scores [data="diff"]').attr(
											"diff",
											"positive"
										);
									}
									if (rowInfo["D"] < 0) {
										$('.player_overview--scores [data="diff"]').attr(
											"diff",
											"negative"
										);
									}
								}
							}
						} //generatePlayerProfile()
						generatePlayerProfile();
					}) //res.json().then(data)
					.catch((err) => console.log(err));
			} else {
				// ERROR
			}
		}
	);
}

// run on load
setCurrentItem();
generatePlayerPageContent();
//createAllMatches() + generateModalList() + generatePlayerProfile() + addMatchCardToggle()

$(".name_card").click(function () {
	//add delay so the new url is already there when it executes
	closeModal();
	setTimeout(generatePlayerPageContent, 100);
	setTimeout(setCurrentItem, 100);
});
