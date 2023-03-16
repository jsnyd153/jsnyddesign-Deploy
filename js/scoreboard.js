$(".scoreboard_input--container").each(function () {
	const inputSelector = $(this).find("label").attr("for");
	const scoreContainer = $(this);

	console.log(inputSelector);

	let score = $(`#${inputSelector}`).val();
	console.log(score);

	function updateScoreDisplay() {
		$(scoreContainer).find("h1").html(score);
		$(`#${inputSelector}`).val(score);
	}

	function increaseScore() {
		score++;
		updateScoreDisplay();
	}

	function decreaseScore() {
		score--;
		updateScoreDisplay();
	}

	//run update function to set default values
	updateScoreDisplay();

	// Button Click Controls
	$(this)
		.find(".up")
		.click(function () {
			increaseScore();
		});

	$(this)
		.find(".down")
		.click(function () {
			decreaseScore();
		});

	// //update score when inputs are updated
});
