const playerData = [];

fetch("https://api.apispreadsheets.com/data/R6XuVdjk5jIRxw0a/").then((res) => {
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
					const pool = rowInfo["Pool"];
					const playerNumber = rowInfo["Player Number"];
					const playerName = rowInfo["Full Name"];
					const playerID = rowInfo["Pool"] + rowInfo["Player Number"];
					const wins = rowInfo["W"];
					const loss = rowInfo["L"];
					const diff = rowInfo["D"];
					const rank = rowInfo["Rank"];

					playerData.push({
						pool,
						playerNumber,
						playerName,
						playerID,
						wins,
						loss,
						diff,
						rank,
					});
				}
				console.log(playerData);
			})
			.catch((err) => console.log(err));
	} else {
		// ERROR
	}
});
