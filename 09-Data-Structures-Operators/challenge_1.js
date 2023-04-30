"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...playerNames) {
    for (let i = 0; i < playerNames.length; i++) {
      console.log(`${playerNames[i]}, Total Score ${playerNames.length}`);
    }
  },
};

const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = [players1];

const allPlayers = [...players1, ...players2];

const players1Final = [gk, ...fieldPlayers, "Thiago", "Coutinho", "Perisic"];

const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(gk, fieldPlayers);
console.log(players2);
console.log(players1Final);
console.log(team1, team2, draw);

game.printGoals("Kevy", "Bevy", "April", "mal");
