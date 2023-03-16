$(".match_card").click(function () {
	if ($(this).hasClass("off")) {
		return;
	} else {
		$(this).attr("expanded", function (index, attr) {
			return attr == "false" ? null : "false";
		});
	}
});

$("button[matchCode]").click(function (e) {
	e.stopPropagation();
	let matchID = $(this).attr("matchCode");
	console.log(matchID);
});
