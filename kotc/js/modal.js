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
