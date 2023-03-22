function generatePlayerProfile() {
	$(".player_page").each(function () {
		let player_overview_el = $(this).find(".player_overview")[0];
		let player_id = $("body").attr("pool") + $("body").attr("playerNumber");

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

		console.log(get_item_value(playerFilter, "player"));
		// console.log(get_item_value(playerFilter, "playerID"));

		$(".dropdown_input--label span").html(
			get_item_value(playerFilter, "playerName")
		);
		$(".player_overview .profile_image span").html(
			get_item_value(playerFilter, "playerName")
				.toString()
				.match(/(^\S\S?|\b\S)?/g)
				.join("")
				.match(/(^\S|\S$)?/g)
				.join("")
				.toUpperCase()
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
