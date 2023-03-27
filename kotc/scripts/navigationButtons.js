function navigationLinks() {
	$(".main_nav .icon_button").each(function () {
		const type = $(this).attr("aria-label");

		if (type == "home") {
			$(this).attr("href", baseUrl + "/_home");
			$(this).find("i").html("home");
		}
		if (type == "standings") {
			$(this).attr("href", baseUrl + "/_poolStandings#" + currentPageLetter);
			$(this).find("i").html("leaderboard");
		}
		if (type == "prizes") {
			$(this).attr("href", baseUrl + "/prizes");
			$(this).find("i").html("workspace_premium");
		}
	});
}

navigationLinks();
