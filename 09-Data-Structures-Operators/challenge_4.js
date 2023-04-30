"use strict";

// function camelCaser(text) {
//   const textArray = text.replaceAll(" ", "").toLowerCase().split("\n");
//   for (const word of textArray) {
//     const [firstWord, lastWord] = word.split("_");
//     const newWord =
//       firstWord + lastWord.replace(lastWord[0], lastWord[0].toUpperCase());
//     console.log(
//       newWord.padEnd(15, " "),
//       "✅".repeat(textArray.indexOf(word) + 1)
//     );
//   }
// }

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const textArray = text.replaceAll(" ", "").toLowerCase().split("\n");
  for (const word of textArray) {
    const [firstWord, lastWord] = word.split("_");
    const newWord =
      firstWord + lastWord.replace(lastWord[0], lastWord[0].toUpperCase());
    console.log(
      newWord.padEnd(15, " "),
      "✅".repeat(textArray.indexOf(word) + 1)
    );
  }
});
