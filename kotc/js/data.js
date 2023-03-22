//Sample Data set for 8 Person King of the Court
const players = [
	{ playerNumber: 1, playerName: "Jeremy Snyder," },
	{ playerNumber: 2, playerName: "Dan Bohan" },
	{ playerNumber: 3, playerName: "Abin Cheriyan" },
	{ playerNumber: 4, playerName: "Yang Yang" },
	{ playerNumber: 5, playerName: "Duy Nguyen" },
	{ playerNumber: 6, playerName: "Tim David" },
	{ playerNumber: 7, playerName: "Johnny Walker" },
	{ playerNumber: 8, playerName: "Matt Shipp" },
];
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
		team: [6, 8],
		score: 11,
	},
];

//Loop through items in $players
//for each one, find all items in $matches where the playerNumber appears in the map
//compare the the map in $matches to $players and $matchResults to generate new array/json

//the match number
//the initial playerName that corresponds to the initial value as "currentPlayer"
//the playerName that corresponds to the sibling in the pair as "partnerPlayer"
//the playerNames that corresponds to the other pair in the map as "opponentPlayer1" and "opponentPlayer2" (ordered numerically descending)
//Get both pairs in map, and find the corrsponding team values in $matchResults. for the item that has a match the initial value, get the score as "currentScore"
//for the item that does not have a match to the initial value, get the score as "opponentScore"
//subtract the currentScore from the opponentScore as "Diff"

//#first item in the loop for players[1] should return:
//{
//round:1,
//currentPlayer:"Dan Bohan",
//partnerPlayer:"Jeremy Snyder",
//opponentPlayer1:"Duy Nguyen",
//opponentPlayer2:"Tim David",
//currentScore:15,
//opponentScore:10,
//diff:5,
//},

//#fourth item in the loop for players[5] should return:
//{
//round:4,
//currentPlayer:"Tim David",
//partnerPlayer:"Yang Yang",
//opponentPlayer1:"Dan Bohan",
//opponentPlayer2:"Matt Shipp",
//currentScore:12,
//opponentScore:15,
//diff:-3,
//},

const result = players.reduce((acc, { playerName, playerNumber }) => {
	const match = matches.filter(({ map }) =>
		map.some((arr) => arr.includes(playerNumber))
	);
	const matchData = match.map(({ map }) =>
		map.map(([a, b]) => {
			//map.map(([[a, b],[c, d]]) => { //need to figure out how to access the ther half of the map array
			const [currentScore] = matchResults
				.filter(({ team }) => team.includes(a) && team.includes(b))
				.map(({ score }) => score);
			const [opponentScore] = matchResults //need to find a way to access c and d values of the map
				.filter(({ team }) => team.includes(b) && team.includes(a))
				.map(({ score }) => score);
			return {
				round: matches.round, //returning undefined
				currentPlayer: playerName,
				partnerPlayer: players.find(
					({ playerNumber: num }) =>
						num !== playerNumber &&
						(map[0].includes(num) || map[1].includes(num))
				).playerName,
				opponentPlayer1: players.find(
					({ playerNumber: num }) =>
						num === (map[0][0] > map[0][1] ? map[1][0] : map[1][1])
				).playerName,
				opponentPlayer2: players.find(
					({ playerNumber: num }) =>
						num === (map[0][0] > map[0][1] ? map[1][1] : map[1][0])
				).playerName,
				currentScore,
				opponentScore, //same as current
				diff: currentScore - opponentScore,
			};
		})
	);

	return acc.concat(matchData);
}, []);

console.log(result);

// current return
// currentPlayer: "Dan Bohan"
// currentScore: 15
// diff: 0
// opponentPlayer1: "Tim David"
// opponentPlayer2: "Duy Nguyen"
// opponentScore: 15
// partnerPlayer: "Jeremy Snyder,"
// round: undefined
