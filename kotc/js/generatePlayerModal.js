$(".modal_bottom--player_list").each(function () {
	const player_list = $(this)[0];
	const poolID = $("body").attr("pool");
	const playerDataPool = playerData.filter(function (item) {
		return item.pool === poolID;
	});

	const player_list_html = playerDataPool
		.map(function (v, i) {
			// let playerID = v.pool + v.playerNumber;
			return (
				`<li><div class="name_card" navigateTo="individual-schedule" pool="` +
				v.pool +
				`" playerNumber="` +
				v.playerNumber +
				`">` +
				v.playerName +
				`</div></li>`
			);
		})
		.join("");

	player_list.innerHTML = player_list_html;
});
