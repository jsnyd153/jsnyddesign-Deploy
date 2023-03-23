//fetch from spreadsheet
fetch("https://api.apispreadsheets.com/data/R6XuVdjk5jIRxw0a/").then((res) => {
	if (res.status === 200) {
		// SUCCESS
		res
			.json()
			.then((data) => {
				//get data from sheet
				const yourData = data["data"];

				function generatePlayerProfile() {
					//for each row in the sheet
					for (let i = 0; i < yourData.length; i++) {
						let rowInfo = yourData[i];

						//Match player number nad pool (playerID)
						if (
							rowInfo["Pool"] == currentPageLetter &&
							rowInfo["Player Number"] == currentPageNumber
						) {
							let playerName = rowInfo["Full Name"];
							//DEBUG logging to make sure this returns proper row
							console.log(playerName);

							//dropdown
							$(".dropdown_input--label span").html(rowInfo["Full Name"]);
							//prifole image
							$(".player_overview .profile_image span").html(
								rowInfo["Full Name"]
									.toString()
									.match(/(^\S\S?|\b\S)?/g)
									.join("")
									.match(/(^\S|\S$)?/g)
									.join("")
									.toUpperCase()
							);
							$(".player_overview .profile_image img").attr(
								"src",
								rowInfo["src"]
							);
							$(
								'.player_overview--scores [data="total"] span:first-child'
							).html(rowInfo["W"]);
							$('.player_overview--scores [data="total"] span:last-child').html(
								rowInfo["L"]
							);
							$('.player_overview--scores [data="diff"] span').html(
								rowInfo["D"]
							);
							if (rowInfo["D"] > 0) {
								$('.player_overview--scores [data="diff"]').attr(
									"diff",
									"positive"
								);
							}
							if (rowInfo["D"] < 0) {
								$('.player_overview--scores [data="diff"]').attr(
									"diff",
									"negative"
								);
							}
						}
					}
					generatePlayerProfile();
					//debug - log the array of data this is pulling from
					// console.log(yourData);
				}
			})
			.catch((err) => console.log(err));
	} else {
		// ERROR
	}
});
