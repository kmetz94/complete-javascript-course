const dolphinsScore = (96 + 158 + 89) / 3;
const koalasScore = (96 + 158 + 89) / 3;

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
    console.log(`Dolphin's average score is higher`)
} else if (koalasScore > dolphinsScore && dkoalasScore >= 100) {
    console.log(`Koala's average score is higher`)
} else if (dolphinsScore === koalasScore && dolphinsScore >= 100 && koalasScore >= 100) {
    console.log(`Its a draw!`)
} else {
    console.log(`No winner`)
}