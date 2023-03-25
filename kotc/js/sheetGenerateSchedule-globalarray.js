let currentUrl = window.location.href;

//break the ID off the URL and get the letter and number seperatly

let currentPageNumber = currentUrl.split("#").pop().match(/\d+/);
//set to 1 as default value if ther's no value from the url
if (currentPageNumber == null) {
	currentPageNumber = 1;
}
let currentPageLetter = currentUrl
	.split("#")
	.pop()
	.match(/[a-zA-Z]+/);
//set to A as default value if ther's no value from the url
if (currentPageLetter == "file") {
	currentPageLetter = "A";
}

//define Base url URL
let urlParts = currentUrl.split("/");
urlParts.pop();
let baseUrl = urlParts.join("/");

console.log(
	" | currentPageLetter=" + currentPageLetter,
	" | currentPageNumber=" + currentPageNumber
);

//Sets current the corresponding modal item
function setCurrentItem() {
	$(".name_card").each(function () {
		if ($(this).attr("playernumber") == currentPageNumber) {
			$(this).addClass("current");
		} else {
			$(this).removeClass("current");
		}
	});
	$(".modal_pool").each(function () {
		if ($(this).attr("pool") == currentPageLetter) {
			$(this).addClass("current");
		} else {
			$(this).removeClass("current");
		}
	});
}

function addMatchCardToggle() {
	$(".match_card").click(function () {
		if ($(this).hasClass("off")) {
			return;
		} else {
			$(this).attr("expanded", function (index, attr) {
				return attr == "false" ? null : "false";
			});
		}
	});
}
function matchCardToggle() {
	if ($(this).hasClass("off")) {
		return;
	} else {
		$(this).attr("expanded", function (index, attr) {
			return attr == "false" ? null : "false";
		});
	}
}

//Replace this with ta dynamic option --> need to be able to swap between maps
const matches = [
	{
		round: 1,
		map: [
			[1, 2],
			[5, 6],
		],
	},
	{
		round: 1,
		map: [
			[3, 4],
			[7, 8],
		],
	},
	{
		round: 2,
		map: [
			[1, 3],
			[6, 8],
		],
	},
	{
		round: 2,
		map: [
			[2, 4],
			[5, 7],
		],
	},
	{
		round: 3,
		map: [
			[1, 8],
			[2, 7],
		],
	},
	{
		round: 3,
		map: [
			[3, 6],
			[4, 5],
		],
	},
	{
		round: 4,
		map: [
			[1, 7],
			[3, 5],
		],
	},
	{
		round: 4,
		map: [
			[2, 8],
			[4, 6],
		],
	},
	{
		round: 5,
		map: [
			[1, 5],
			[4, 8],
		],
	},
	{
		round: 5,
		map: [
			[2, 6],
			[3, 7],
		],
	},
	{
		round: 6,
		map: [
			[1, 4],
			[6, 7],
		],
	},
	{
		round: 6,
		map: [
			[2, 3],
			[5, 8],
		],
	},
	{
		round: 7,
		map: [
			[4, 7],
			[2, 5],
		],
	},
	{
		round: 7,
		map: [
			[1, 6],
			[3, 8],
		],
	},
];

//Replace this with scores pulled from the apisheet
const matchResults = [
	{
		team: [1, 2],
		score: 15,
	},
	{
		team: [1, 3],
		score: 15,
	},
	{
		team: [1, 4],
		score: 15,
	},
	{
		team: [1, 5],
		score: 15,
	},
	{
		team: [1, 6],
		score: 15,
	},
	{
		team: [1, 7],
		score: 15,
	},
	{
		team: [1, 8],
		score: 15,
	},
	{
		team: [2, 3],
		score: 15,
	},
	{
		team: [2, 4],
		score: 15,
	},
	{
		team: [2, 5],
		score: 7,
	},
	{
		team: [2, 6],
		score: 15,
	},
	{
		team: [2, 7],
		score: 14,
	},
	{
		team: [2, 8],
		score: 15,
	},
	{
		team: [3, 4],
		score: 15,
	},
	{
		team: [3, 5],
		score: 13,
	},
	{
		team: [3, 6],
		score: 15,
	},
	{
		team: [3, 7],
		score: 11,
	},
	{
		team: [3, 8],
		score: 11,
	},
	{
		team: [4, 5],
		score: 11,
	},
	{
		team: [4, 6],
		score: 12,
	},
	{
		team: [4, 7],
		score: 15,
	},
	{
		team: [4, 8],
		score: 14,
	},
	{
		team: [5, 6],
		score: 10,
	},
	{
		team: [5, 7],
		score: 12,
	},
	{
		team: [5, 8],
		score: 12,
	},
	{
		team: [6, 7],
		score: 14,
	},
	{
		team: [6, 8],
		score: 13,
	},
	{
		team: [7, 8],
		score: 11,
	},
];

//create array to store match info
const playerDataGlobal = [
	{
		Pool: "A",
		PlayerNumber: 1,
		playerID: "A1",
		FullName: "Jeremy Snyder",
		W: 6,
		L: 1,
		D: 11,
		GP: 7,
		Rank: 1,
		A: 1,
		src: "",
	},
	{
		Pool: "A",
		PlayerNumber: 2,
		playerID: "A2",
		FullName: "Dan Bohan",
		W: 3,
		L: 4,
		D: 3,
		GP: 7,
		Rank: 5,
		A: 2,
		src: "https://assets.opensports.net/profiles/205863qj3QFEJfG-13SN4NmGph.jpg/media_500w.jpg",
	},
	{
		Pool: "A",
		PlayerNumber: 3,
		playerID: "A3",
		FullName: "Abin Cheriyan",
		W: 4,
		L: 3,
		D: 3,
		GP: 7,
		Rank: 4,
		A: 3,
		src: "https://assets.opensports.net/profiles/205863qj3QFEJfG-13SN4NmGph.jpg/media_500w.jpg",
	},
	{
		Pool: "A",
		PlayerNumber: 4,
		playerID: "A4",
		FullName: "Yang Yang",
		W: 3,
		L: 4,
		D: -3,
		GP: 7,
		Rank: 6,
		A: 4,
		src: "",
	},
	{
		Pool: "A",
		PlayerNumber: 5,
		playerID: "A5",
		FullName: "Duy Nguyen",
		W: 3,
		L: 4,
		D: -7,
		GP: 7,
		Rank: 8,
		A: 5,
		src: "",
	},
	{
		Pool: "A",
		PlayerNumber: 6,
		playerID: "A6",
		FullName: "Tim David",
		W: 4,
		L: 3,
		D: 7,
		GP: 7,
		Rank: 3,
		A: 6,
		src: "",
	},
	{
		Pool: "A",
		PlayerNumber: 7,
		playerID: "A7",
		FullName: "Johnny Walker",
		W: 3,
		L: 4,
		D: -3,
		GP: 7,
		Rank: 6,
		A: 7,
		src: "",
	},
	{
		Pool: "A",
		PlayerNumber: 8,
		playerID: "A8",
		FullName: "Matt Shipp",
		W: 2,
		L: 5,
		D: -11,
		GP: 7,
		Rank: 8,
		A: 8,
		src: "",
	},
	{
		Pool: "",
		PlayerNumber: "",
		playerID: "",
		FullName: "",
		W: "",
		L: "",
		D: "",
		GP: "",
		Rank: "",
		A: "",
		src: "",
	},
	{
		Pool: "B",
		PlayerNumber: 1,
		playerID: "B1",
		FullName: "Emily Xie",
		W: 6,
		L: 1,
		D: 14,
		GP: 7,
		Rank: 1,
		A: 1,
		src: "",
	},
	{
		Pool: "B",
		PlayerNumber: 2,
		playerID: "B2",
		FullName: "Juliette Sardin",
		W: 4,
		L: 3,
		D: 4,
		GP: 7,
		Rank: 4,
		A: 2,
		src: "",
	},
	{
		Pool: "B",
		PlayerNumber: 3,
		playerID: "B3",
		FullName: "Merani Cosme",
		W: 1,
		L: 6,
		D: -14,
		GP: 7,
		Rank: 8,
		A: 3,
		src: "https://assets.opensports.net/profiles/205863qj3QFEJfG-13SN4NmGph.jpg/media_500w.jpg",
	},
	{
		Pool: "B",
		PlayerNumber: 4,
		playerID: "B4",
		FullName: "Felipe Garcia",
		W: 3,
		L: 4,
		D: -6,
		GP: 7,
		Rank: 6,
		A: 4,
		src: "",
	},
	{
		Pool: "B",
		PlayerNumber: 5,
		playerID: "B5",
		FullName: "Carlos Herera",
		W: 2,
		L: 5,
		D: -11,
		GP: 7,
		Rank: 7,
		A: 5,
		src: "",
	},
	{
		Pool: "B",
		PlayerNumber: 6,
		playerID: "B6",
		FullName: "Ben Rosso",
		W: 4,
		L: 3,
		D: 9,
		GP: 7,
		Rank: 3,
		A: 6,
		src: "",
	},
	{
		Pool: "B",
		PlayerNumber: 7,
		playerID: "B7",
		FullName: "Abby Smith",
		W: 3,
		L: 4,
		D: -1,
		GP: 7,
		Rank: 5,
		A: 7,
		src: "",
	},
	{
		Pool: "B",
		PlayerNumber: 8,
		playerID: "B8",
		FullName: "Sydney Adams",
		W: 5,
		L: 2,
		D: 5,
		GP: 7,
		Rank: 2,
		A: 8,
		src: "",
	},
];
const allMatches = [];

let modalListContainer = $(".modal_bottom--player_list")[0];

function getDataFromApi() {
	//placeholder api url for now to avoid usinging up the 250 api calls
	//just inserting the playerDataGlobal array as a static value instead of running the data from the api through processApiData(). The API call and process still need to have valid functions since the build functions wont run until they finish
	return fetch("https://api.publicapis.org/entries")
		.then((response) => response.json())
		.then((data) => {
			return data;
		})
		.catch((error) => {
			console.log(error);
		});
}

function processApiData(data) {
	// const playerData = data["data"];
	// function createGlobalPlayerData() {
	// 	for (let i = 0; i < playerData.length; i++) {
	// 		let Pool = playerData[i]["Pool"];
	// 		let PlayerNumber = playerData[i]["Player Number"];
	// 		let playerID = playerData[i]["playerID"];
	// 		let FullName = playerData[i]["Full Name"];
	// 		let W = playerData[i]["W"];
	// 		let L = playerData[i]["L"];
	// 		let D = playerData[i]["D"];
	// 		let GP = playerData[i]["GP"];
	// 		let Rank = playerData[i]["Rank"];
	// 		let A = playerData[i]["A"];
	// 		let src = playerData[i]["src"];
	// 		playerDataGlobal.push({
	// 			Pool,
	// 			PlayerNumber,
	// 			playerID,
	// 			FullName,
	// 			W,
	// 			L,
	// 			D,
	// 			GP,
	// 			Rank,
	// 			A,
	// 			src,
	// 		});
	// 	}
	// }
	// createGlobalPlayerData();
	console.log("processApiData()");
}

//use promise to wait for api rssponce, then process processApiData to create global constant, and then generatePlayerPageContent
getDataFromApi()
	.then(function () {
		processApiData();
	})
	.then(function () {
		console.log("playerDataGlobal", playerDataGlobal);
		generatePlayerPageContent();
	})
	.then(function () {
		addInteractions();
	});

console.log("playerDataGlobal", playerDataGlobal);
// if(playerDataGlobal.length > 1){
//     generatePlayerPageContent();
// }
