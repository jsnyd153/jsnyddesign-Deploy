$(".modal_bottom--player_list").each(function () {
	const player_list = $(this)[0];

	const currentPool = window.location.href
		.split("#")
		.pop()
		.match(/[a-zA-Z]+/);

	const playerDataPool = playerData.filter(function (item) {
		return item.pool === currentPool[0];
	});

	const player_list_html = playerDataPool
		.map(function (v, i) {
			return (
				`<li><a class="name_card" href="#` +
				v.pool +
				v.playerNumber +
				`" pool="` +
				v.pool +
				`" playerNumber="` +
				v.playerNumber +
				`">` +
				v.playerName +
				`</a></li>`
			);
		})
		.join("");

	player_list.innerHTML = player_list_html;
});

// return (
// 	`<li><div class="name_card" navigateTo="individual-schedule" pool="` +
// 	v.pool +
// 	`" playerNumber="` +
// 	v.playerNumber +
// 	`">` +
// 	v.player +
// 	`</div></li>`
// );
