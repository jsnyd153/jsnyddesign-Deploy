$(".modal_trigger").each(function () {
	let modalID = $(this).attr("modal_ID");
	let target = $(`#${modalID}`);

	$(this).click(function () {
		$(target).attr("modal_active", true);
		$(target).parents(".modal").attr("modal_active", true);
	});
});

$(".modal--back, .modal_bottom--handle").click(function () {
	$("[modal_active]").attr("modal_active", false);
});

let pageID = $("body").attr("id");

$(`[playerid=${pageID}`).addClass("current");
$(`[poolid=${pageID}`).addClass("current");

// $(".match_card").click(function () {
// 	if ($(this).hasClass("off")) {
// 		return;
// 	} else {
// 		$(this).attr("expanded", function (index, attr) {
// 			return attr == "false" ? null : "false";
// 		});
// 	}
// });

// $("button[matchCode]").click(function (e) {
// 	e.stopPropagation();
// 	let matchID = $(this).attr("matchCode");
// 	console.log(matchID);
// });
