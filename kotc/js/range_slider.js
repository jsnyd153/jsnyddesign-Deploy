$(".range_input").each(function () {
	const slider_input = $(this).find(".range_input--input")[0];
	const slider_thumb = $(this).find(".range_input--thumb")[0];
	const slider_thumb_value = $(this).find(".range_input--thumb span")[0];

	function showSliderValue() {
		let n = slider_input.min;
		let x = slider_input.max;
		let v = slider_input.value;

		slider_thumb_value.innerHTML = v;

		let percentChange = (v - n) / (x - n);
		slider_thumb.style.left = percentChange * 100 + "%";
	}

	showSliderValue();
	window.addEventListener("resize", showSliderValue);
	slider_input.addEventListener("input", showSliderValue, false);
});

//orign: https://codepen.io/armanb/pen/GRBjVgd
