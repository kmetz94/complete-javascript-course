"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Press check number button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // There is no input
  if (!guess) {
    displayMessage("No number provided!");

    // Guess is correct
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    highscore = document.querySelector(".score").textContent;

    if (document.querySelector(".highscore").textContent < highscore) {
      document.querySelector(".highscore").textContent = highscore;
    }

    // Guess is wrong
  } else if (guess !== secretNumber) {
    if (document.querySelector(".score").textContent > 1) {
      displayMessage(
        guess > secretNumber ? "Guess too high!" : "Guess too low!"
      );
      document.querySelector(".score").textContent--;
    } else {
      displayMessage("You lose!");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#d33a3a";
    }
  }
});

// Press play again button
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";

  displayMessage("Guess another number!");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 20;
});
