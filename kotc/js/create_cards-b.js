//========================================
//standings
//========================================

function generatePlayerProfile() {
	$(".player_page").each(function () {
		let player_overview_el = $(this).find(".player_overview")[0];
		let player_id = $("body").attr("id");

		var playerData = [
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
		];

		const playerFilter = playerData.filter(function (item) {
			return item.playerID === player_id;
		});
		console.log(playerFilter);

		function get_item_value(array, key) {
			var arr = [],
				index = -1,
				arrayLength = array.length,
				array_items;

			while (++index < arrayLength) {
				array_items = array[index];

				if (array_items.hasOwnProperty(key)) {
					arr[arr.length] = array_items[key];
				}
			}

			return arr;
		}

		console.log(get_item_value(playerFilter, "initials"));
		console.log(get_item_value(playerFilter, "playerID"));

		$(".dropdown_input--label span").html(
			get_item_value(playerFilter, "player")
		);
		$(".player_overview .profile_image span").html(
			get_item_value(playerFilter, "initials")
		);
		$(".player_overview .profile_image img").attr(
			"src",
			get_item_value(playerFilter, "img")
		);
		$('.player_overview--scores [data="total"] span:first-child').html(
			get_item_value(playerFilter, "wins")
		);
		$('.player_overview--scores [data="total"] span:last-child').html(
			get_item_value(playerFilter, "loss")
		);
		$('.player_overview--scores [data="diff"] span').html(
			get_item_value(playerFilter, "diff")
		);
		if (get_item_value(playerFilter, "diff") > 0) {
			$('.player_overview--scores [data="diff"]').attr("diff", "positive");
		}
		if (get_item_value(playerFilter, "diff") < 0) {
			$('.player_overview--scores [data="diff"]').attr("diff", "negative");
		}
	});
}

generatePlayerProfile();

$("#changeID").click(function () {
	$("body").attr("id", "A1");
	generatePlayerProfile();
});
