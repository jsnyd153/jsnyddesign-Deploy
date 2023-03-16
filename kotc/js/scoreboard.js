$(".scoreboard_input--container").each(function () {
	const inputSelector = $(this).find("label").attr("for");
	const scoreContainer = $(this);
	const scoreInput = $(this).find('input[type="number"]');

	console.log(inputSelector);

	let score = $(scoreInput).val();
	console.log(score);

	function updateScoreDisplay() {
		$(scoreInput).val(score);
		$(scoreContainer).find("h1").html($(scoreInput).val());
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
