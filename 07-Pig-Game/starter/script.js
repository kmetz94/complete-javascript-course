"use strict";

// Selecting elements
const playerOne = document.querySelector(".player--0");
const playerTwo = document.querySelector(".player--1");
const newGameBtn = document.querySelector(".btn--new");
const rollDiceBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const playerOneScore = document.querySelector("#score--0");
const playerTwoScore = document.querySelector("#score--1");
const playerOneCurrent = document.querySelector("#current--0");
const playerTwoCurrent = document.querySelector("#current--1");
const diceImage = document.querySelector(".dice");

// Variables for initialization
let firstPlayerTurn, score;

// Functions
function initializeGame() {
  firstPlayerTurn = true;
  score = 0;
  playerOneCurrent.textContent = score;
  playerTwoCurrent.textContent = score;
  playerOneScore.textContent = score;
  playerTwoScore.textContent = score;
  playerOne.classList.add("player--active");
  playerTwo.classList.remove("player--active");
}

function switchPlayer() {
  firstPlayerTurn = !firstPlayerTurn;
  score = 0;
  playerOneCurrent.textContent = score;
  playerTwoCurrent.textContent = score;
  playerOne.classList.toggle("player--active");
  playerTwo.classList.toggle("player--active");
}

function holdScore() {
  if (firstPlayerTurn) {
    playerOneScore.textContent = Number(playerOneScore.textContent) + score;
  } else if (!firstPlayerTurn) {
    playerTwoScore.textContent = Number(playerTwoScore.textContent) + score;
  }
  switchPlayer();
  checkWinner();
}

function checkWinner() {
  if (playerOneScore.textContent >= 100 || playerTwoScore.textContent >= 100) {
    initializeGame();
  }
}

// Initialize game
initializeGame();

// Roll dice
rollDiceBtn.addEventListener("click", function () {
  let roll = Math.trunc(Math.random() * 6 + 1);
  diceImage.src = `dice-${roll}.png`;
  score += roll;

  if (firstPlayerTurn && roll !== 1) {
    playerOneCurrent.textContent = score;
  } else if (!firstPlayerTurn && roll !== 1) {
    playerTwoCurrent.textContent = score;
  } else {
    switchPlayer();
  }
});

// Hold score
holdBtn.addEventListener("click", holdScore);

// New game
newGameBtn.addEventListener("click", initializeGame);
