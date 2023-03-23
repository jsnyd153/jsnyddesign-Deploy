function generateModalList() {
	let modalListContainer = $(".modal_bottom--player_list")[0];

	//fetch from spreadsheet
	fetch("https://api.apispreadsheets.com/data/R6XuVdjk5jIRxw0a/").then(
		(res) => {
			if (res.status === 200) {
				// SUCCESS
				res
					.json()
					.then((data) => {
						//get data from sheet
						const yourData = data["data"];

						//for each row in the sheet
						for (let i = 0; i < yourData.length; i++) {
							let rowInfo = yourData[i];

							//Only create a row if the pool matches the id in the URL
							if (rowInfo["Pool"] == currentPageLetter) {
								//create <li>
								let listItem = document.createElement("li");
								//create <a> with link and class
								let anchor = document.createElement("li");
								anchor.classList.add("name_card");
								anchor.href = "#" + rowInfo["Pool"] + rowInfo["Player Number"];
								anchor.setAttribute("pool", rowInfo["Pool"]);
								anchor.setAttribute("playerNumber", rowInfo["Player Number"]);
								listItem.appendChild(anchor);

								let anchorText = document.createTextNode(rowInfo["Full Name"]);
								anchor.appendChild(anchorText);

								//append the <li> to the list
								modalListContainer.appendChild(listItem);
							}
						}
						//debug - log the array of data this is pulling from
						// console.log(yourData);
					})
					.catch((err) => console.log(err));
			} else {
				// ERROR
			}
		}
	);
}

generateModalList();
