//Basic Modal Open and Close

$(".modal_trigger").each(function () {
	//dropdown will open the modal with the ID that match the modalID attribute
	let modalID = $(this).attr("modal_ID");
	let target = $(`#${modalID}`);

	$(this).click(function () {
		$(target).attr("modal_active", true);
		$(target).parents(".modal").attr("modal_active", true);
	});
});

//When the handle or backgground is clicked, close

$(".modal--back, .modal_bottom--handle").click(function () {
	$("[modal_active]").attr("modal_active", false);
});

// Modal for Individual Player page
// Shows just the players in the current pool

$('[navigateTo="individual-schedule"]').each(function () {
	if (
		$("body").attr("pool") === $(this).attr("pool") &&
		$("body").attr("playerNumber") === $(this).attr("playerNumber")
	) {
		$(this).addClass("current");
	}
});

$('[navigateTo="individual-schedule"]').click(function () {
	// let PlayerID = $(this).attr("playerID");
	$("body").attr("pool", $(this).attr("pool"));
	$("body").attr("playerNumber", $(this).attr("playerNumber"));
	$('[navigateTo = "individual-schedule"]').removeClass("current");
	$(this).addClass("current");
	$("[modal_active]").attr("modal_active", false);

	generatePlayerProfile();
});
