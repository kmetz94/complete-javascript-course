"use strict";

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsAverage = calcAverage(85, 54, 71);
const koalasAverage = calcAverage(23, 34, 27);

function checkWinner(avgDolphin, avgKoala) {
    if (avgDolphin >= avgKoala * 2) {
        return `Dolphins win (${avgDolphin} vs. ${avgKoala})`
    } else if (avgDolphin * 2 <= avgKoala) {
        return `Koalas win (${avgKoala} vs. ${avgDolphin})`
    } else {
        return `Its a draw!`
    }
}

console.log(checkWinner(dolphinsAverage, koalasAverage))