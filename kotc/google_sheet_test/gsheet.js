let allNamesElm = document.getElementById("player_cards");
// let loaderElm = document.getElementById("loader");
let errorMessageElm = document.getElementById("errorMessage");

function setErrorDisplay() {
	// loaderElm.style.display = "none";
	// allNamesElm.style.display = "none";
	// errorMessageElm.style.display = "block";
}

// // Get the current URL
// const currentUrl = window.location.href;
// // Split the URL into parts
// const parts = currentUrl.split("/");
// // Remove the last part (the pathname)
// parts.pop();
// // Join the remaining parts back together to get the base URL
// const baseUrl = parts.join("/");
// // Return the base URL
// console.log(baseUrl);

fetch("https://api.apispreadsheets.com/data/R6XuVdjk5jIRxw0a/").then((res) => {
	if (res.status === 200) {
		// SUCCESS
		res
			.json()
			.then((data) => {
				//get data from sheet
				const yourData = data["data"];
				//get pool letter from url #ID (alpha character from ID)
				const currentPool = window.location.href
					.split("#")
					.pop()
					.match(/[a-zA-Z]+/);

				//for each row in the sheet
				for (let i = 0; i < yourData.length; i++) {
					let rowInfo = yourData[i];
					//Only create a row if the pool matches the id in the URL
					if (rowInfo["Pool"] == currentPool[0]) {
						let rowInfoDiv = document.createElement("a");
						// let hyphen = "-";
						rowInfoDiv.classList.add("standings_card");
						rowInfoDiv.style.setProperty("--rank", rowInfo["Rank"]);
						rowInfoDiv.href =
							baseUrl +
							"/_individual-schedule.html#" +
							rowInfo["Pool"] +
							rowInfo["Player Number"];

						//create .circle_number
						let circleNumber = document.createElement("div");
						// let circleNumberNode = document.createTextNode(rowInfo["A"]);
						// circleNumber.appendChild(circleNumberNode);
						circleNumber.classList.add("circle_number");

						//create .profile_image
						let profileImage = document.createElement("div");
						let profileImageInitialsSpan = document.createElement("span");
						let profileImageImg = document.createElement("img");
						let profileImageInitials = document.createTextNode(
							rowInfo["Full Name"]
								.toString()
								.match(/(^\S\S?|\b\S)?/g)
								.join("")
								.match(/(^\S|\S$)?/g)
								.join("")
								.toUpperCase()
						);
						profileImage.appendChild(profileImageInitialsSpan);
						profileImage.appendChild(profileImageImg);
						profileImageImg.src = rowInfo["src"];
						profileImageInitialsSpan.appendChild(profileImageInitials);
						profileImage.classList.add("profile_image");

						//create .standings_card--name
						let standingCardName = document.createElement("h4");
						let standingCardNameNode = document.createTextNode(
							rowInfo["Full Name"]
						);
						standingCardName.appendChild(standingCardNameNode);
						standingCardName.classList.add("standings_card--name");

						//create .standings_card--scores
						let standingCardScores = document.createElement("div");
						standingCardScores.classList.add("standings_card--scores");
						//create .score_total (Summary)
						let scoreTotal = document.createElement("div");
						scoreTotal.classList.add("score_total");
						scoreTotal.setAttribute("data", "total");
						//create .score_total inner node for Total Summary
						let scoreTotalNode = document.createTextNode(
							rowInfo["W"] + "-" + rowInfo["L"]
						);
						scoreTotal.appendChild(scoreTotalNode);
						standingCardScores.appendChild(scoreTotal);

						//create .score_total (Diff)
						let scoreDiff = document.createElement("div");
						scoreDiff.classList.add("score_total");
						scoreDiff.setAttribute("data", "diff");
						//create .score_total inner node for Total Summary
						let scoreDiffNode = document.createTextNode(rowInfo["D"]);
						if (rowInfo["D"] > 0) {
							scoreDiff.setAttribute("diff", "positive");
						}
						if (rowInfo["D"] < 0) {
							scoreDiff.setAttribute("diff", "negative");
						}

						scoreDiff.appendChild(scoreDiffNode);
						standingCardScores.appendChild(scoreDiff);

						rowInfoDiv.appendChild(circleNumber);
						rowInfoDiv.appendChild(profileImage);
						rowInfoDiv.appendChild(standingCardName);
						rowInfoDiv.appendChild(standingCardScores);
						// rowInfoDiv.appendChild(rowAudio);

						allNamesElm.appendChild(rowInfoDiv);
					}
				}
				console.log(yourData);
			})
			.catch((err) => console.log(err));
	} else {
		// ERROR
	}
});
