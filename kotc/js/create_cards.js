var div = $(".container-matches")[0],
  data = {
    items: [
      {
        match: 1,
        currentPlayer: "Matt Shipp",
        partnerPlayer: "Johny Walker",
        currentScore: 0,
        opponentPlayer1: "Abin Cheriyan",
        opponentPlayer2: "Yang Yang",
        opponentScore: 0,
      },
      {
        match: 2,
        currentPlayer: "Matt Shipp",
        partnerPlayer: "Tim Davis",
        currentScore: 0,
        opponentPlayer1: "Dan Bohan",
        opponentPlayer2: "Yang Yang",
        opponentScore: 0,
      },
      {
        match: 3,
        currentPlayer: "Matt Shipp",
        partnerPlayer: "Jeremy Snyder",
        currentScore: 0,
        opponentPlayer1: "Dan Bohan",
        opponentPlayer2: "Johnny Walker",
        opponentScore: 0,
      },
      {
        match: 4,
        currentPlayer: "Matt Shipp",
        partnerPlayer: "Dan Bohan",
        currentScore: 0,
        opponentPlayer1: "Yang Yang",
        opponentPlayer2: "Tim Davis",
        opponentScore: 0,
      },
      {
        match: 5,
        currentPlayer: "Matt Shipp",
        partnerPlayer: "Yang Yang",
        currentScore: 0,
        opponentPlayer1: "Jeremy Snyder",
        opponentPlayer2: "Duy Nguyen",
        opponentScore: 0,
      },
      {
        match: 6,
        currentPlayer: "Matt Shipp",
        partnerPlayer: "Duy Nguyen",
        currentScore: 0,
        opponentPlayer1: "Dan Bohan",
        opponentPlayer2: "Abin Cheriyan",
        opponentScore: 0,
      },
      {
        match: 6,
        currentPlayer: "Matt Shipp",
        partnerPlayer: "Abin Cheriyan",
        currentScore: 0,
        opponentPlayer1: "Jeremy Snyder",
        opponentPlayer2: "Tim Davis",
        opponentScore: 0,
      },
    ],
  },
  html = data.items
    .map(function (v, i) {
      return (
        '<div class="card" expanded="false" timing="default"><div class="match_label"> <span>' +
        v.match +
        '</span></div><div class="team_container"> <div class="team_row current"><div class="player_names"><span class="current_player">' +
        v.currentPlayer +
        '</span><span class="seperator"></span><span class="partner_player">' +
        v.partnerPlayer +
        '</span></div><div class="team_score"><span>' +
        v.currentScore +
        '</span></div></div><div class="team_row opponents"><div class="player_names"><span class="versus">vs</span><span class="opponent_player">' +
        v.opponentPlayer1 +
        '</span><span class="seperator"></span> <span class="opponent_player">' +
        v.opponentPlayer2 +
        '</span></div><div class="team_score"><span>' +
        v.opponentScore +
        '</span>   </div> </div></div><div class="button_container"><button>Enter score</button></div><div class="match_score--container"> <div class="match_score"><span class="score_current">' +
        v.currentScore +
        '</span>   <span>-</span>   <span class="score_opponent">' +
        v.opponentScore +
        "</span> </div></div></div></div>"
      );
    })
    .join("");
div.innerHTML = html;
