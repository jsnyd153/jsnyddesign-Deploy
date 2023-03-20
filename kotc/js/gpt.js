const result = matches.map((match) =>
  match.map((playerNumber) =>
    players
      .filter((player) => playerNumber.includes(player.playerNumber))
      .map((player) => player.player)
  )
);
