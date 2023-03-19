$(document).ready(function () {
	let sortSetting;

	if ($('#sort_function input[type="radio"]:check').val() === "rank") {
		let sortSetting = "rank";
	} else {
		let sortSetting = "player_number";
	}
	$(".card_list").attr("list_order", sortSetting);
});

//add properties to article elements (cards)
//adds based on index number
$(".card_list article").each(function () {
	let initialNumber = $(this).index() + 1;
	console.log(initialNumber);
	$(this).css("--player_number", `${initialNumber}`);
});
//Value for rank geenrated from the JSON for the cards

$('#sort_function input[type="radio"]').click(function () {
	let sortSetting = $(this).val();
	console.log(sortSetting);
	$(".card_list").attr("list_order", sortSetting);
});
