//========================================
//Match Card
//========================================

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

//========================================
//Player list bottom modal
//========================================
$(".modal_bottom--player_list").each(function () {
	let player_list = $(this)[0];

	var playerData = {
		items: [
			{
				player: "Jeremy Snyder",
				playerID: "A1",
			},
			{
				player: "Dan Bohan",
				playerID: "A2",
			},
			{
				player: "Abin Cheriyan",
				playerID: "A3",
			},
			{
				player: "Yang Yang",
				playerID: "A4",
			},
			{
				player: "Duy Nguyen",
				playerID: "A5",
			},
			{
				player: "Tim David",
				playerID: "A6",
			},
			{
				player: "Johnny Walker",
				playerID: "A7",
			},
			{
				player: "Matt Shipp",
				playerID: "A8",
			},
		],
	};
	var player_html = playerData.items
		.map(function (v, i) {
			return (
				`<li><div class="name_card" navigateTo="individual-schedule" playerID="` +
				v.playerID +
				`">` +
				v.player +
				`</div></li>`
			);
		})
		.join("");

	player_list.innerHTML = player_html;
});

//========================================
//standings
//========================================

$(".standings_list").each(function () {
	let standings_list = $(this)[0];

	var standingsData = {
		items: [
			{
				player: "Jeremy Snyder",
				initials: "JS",
				playerID: "A1",
				wins: 1,
				loss: 0,
				diff: +4,
				img: "https://images.unsplash.com/photo-1678284258973-af8533fbace5?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1287&amp;q=80",
				rank: 5,
			},
			{
				player: "Dan Bohan",
				initials: "DB",
				playerID: "A2",
				wins: 1,
				loss: 0,
				diff: +3,
				rank: 4,
			},
			{
				player: "Abin Cheriyan",
				initials: "AC",
				playerID: "A3",
				wins: 1,
				loss: 0,
				diff: +2,
				rank: 7,
			},
			{
				player: "Yang Yang",
				initials: "YY",
				playerID: "A4",
				wins: 1,
				loss: 0,
				diff: +1,
				rank: 1,
			},
			{
				player: "Duy Nguyen",
				initials: "DN",
				playerID: "A5",
				wins: 0,
				loss: 1,
				diff: -1,
				rank: 8,
			},
			{
				player: "Tim David",
				initials: "TD",
				playerID: "A6",
				wins: 0,
				loss: 1,
				diff: -2,
				rank: 2,
			},
			{
				player: "Johnny Walker",
				initials: "JW",
				playerID: "A7",
				wins: 0,
				loss: 1,
				diff: -3,
				rank: 6,
			},
			{
				player: "Matt Shipp",
				initials: "MS",
				playerID: "A8",
				wins: 0,
				loss: 1,
				diff: -4,
				rank: 3,
			},
		],
	};
	var standings_html = standingsData.items
		.map(function (v, i) {
			return (
				'<article class="standings_card" style="--rank:' +
				v.rank +
				';"><div class="circle_number">' +
				v.playerID +
				'</div><div class="profile_image"><span>' +
				v.initials +
				'</span><img src="' +
				v.img +
				'" alt="' +
				v.player +
				'" /></div><div class="standings_card--name">' +
				v.player +
				'</div><div class="standings_card--scores"><div class="score_total" data="total"><span>' +
				v.wins +
				"</span>-<span>" +
				v.loss +
				'</span></div><div class="score_total" data="diff" diff="positive"><span>' +
				v.diff +
				"</span></div></div></article>"
			);
		})
		.join("");

	standings_list.innerHTML = standings_html;
});
