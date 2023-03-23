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

function closeModal() {
	$("[modal_active]").attr("modal_active", false);
}

//When the handle or backgground is clicked, close

$(".modal--back, .modal_bottom--handle").click(function () {
	closeModal();
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
	//get the pool and playerNumber from selected option and add to the boddy
	$("body").attr("pool", $(this).attr("pool"));
	$("body").attr("playerNumber", $(this).attr("playerNumber"));

	//set new current state on modal list
	$('[navigateTo = "individual-schedule"]').removeClass("current");
	$(this).addClass("current");

	//generat new player profile and match cards based on the new info
	generatePlayerProfile();
	mapAndFilterMatches();
	closeModal();
});
