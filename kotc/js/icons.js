$(document).ready(function () {
	$(".math_icon").each(function () {
		const check =
			'<!-- check --><path d="M4 8L7 11" class="check"/><path d="M13.4248 4L6.00018 11.4246" class="check"/>';
		const plus =
			'<!-- plus --><path d="M3 8H13.5"class="plus"/><path d="M8.25 2.74994L8.25 13.2499" class="plus"/>';
		const minus = '<!-- minus --><path d="M3 8H13.5" class="minus"/>';
		const ex =
			'<!-- ex --><path d="M4.5376 4.28772L11.9622 11.7123" class="ex"/><path d="M11.9624 4.28772L4.53778 11.7123" class="ex"/>';

		$(this).html(check + plus + minus + ex);
	});
});
$(document).ready(function () {
	let editButtonContent =
		'<p>Edit</p><svg class="edit_icon" viewBox="0 0 16 16"><path d="M4.55493 8.5558V10.778H6.77715L13.3312 4.22393L11.109 2.00171L4.55493 8.5558ZM15.0497 2.50542C15.2808 2.2743 15.2808 1.90097 15.0497 1.66986L13.6631 0.283196C13.432 0.0520858 13.0586 0.0520858 12.8275 0.283196L11.7431 1.36764L13.9653 3.58986L15.0497 2.50542Z"/><path d="M0.244385 5.44447C0.244385 4.04535 1.3786 2.91113 2.77772 2.91113H6.28883V4.42224H2.77772C2.21316 4.42224 1.75549 4.87991 1.75549 5.44447V13.2222C1.75549 13.7868 2.21316 14.2444 2.77772 14.2444H11.311C11.8757 14.2444 12.3333 13.7868 12.3333 13.2222V8.95559H13.8444V13.2222C13.8444 14.6214 12.7102 15.7555 11.311 15.7555H2.77772C1.3786 15.7555 0.244385 14.6214 0.244385 13.2222V5.44447Z"/></svg>';

	let addButtonContent =
		'<p>Add</p><div class="add_item--icon"><svg viewBox="0 0 16 16" class="math_icon"><!-- check --><path d="M4 8L7 11" class="check"></path><path d="M13.4248 4L6.00018 11.4246" class="check"></path><!-- plus --><path d="M3 8H13.5" class="plus"></path><path d="M8.25 2.74994L8.25 13.2499" class="plus"></path><!-- minus --><path d="M3 8H13.5" class="minus"></path><!-- ex --><path d="M4.5376 4.28772L11.9622 11.7123" class="ex"></path><path d="M11.9624 4.28772L4.53778 11.7123" class="ex"></path></svg></div>';

	$('[editable="true"]').each(function () {
		$(this).append("<button></button");
		$(this)
			.find("button")
			.addClass("table_display--item-edit")
			.html(editButtonContent);
	});
	$('[addnew="true"]').each(function () {
		$(this).append("<button></button");
		$(this)
			.find("button")
			.addClass("table_display--item-add")
			.html(addButtonContent);
	});
});
