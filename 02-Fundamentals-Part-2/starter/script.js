"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log(`I can drive`);

// function logger() {
//     console.log(`My name is Kevin.`);
// }

// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples, and ${oranges} oranges.`;
//     return juice;
// }

// fruitProcessor(10, 15);

// const fruitJuice = fruitProcessor(10, 15);
// console.log(fruitJuice);

// function calcAge(birthYear) {
//     return 2023 - birthYear;
// }

// const kevinAge = calcAge(1994);

// console.log(kevinAge);

// const calcAgeVar = function (birthYear) {
//     return 2023 - birthYear;
// }

// const kevinAgeVar = calcAgeVar(1994);

// console.log(kevinAgeVar);

// const calcAgeArrow = birthYear => 2023 - birthYear;

// const kevinAgeArrow = calcAgeArrow(1994);
// console.log(kevinAgeArrow);

// const yearsUntilRetire = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`;
// }

// const kevinRetire = yearsUntilRetire(1994, "Kevin");
// console.log(kevinRetire);

// function fruitCutter(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = fruitCutter(apples);
//     const orangePieces = fruitCutter(oranges);
//     const juice = `Juice with ${applePieces} apple pieces, and ${orangePieces} orange pieces.`;
//     return juice;
// }

// console.log(fruitProcessor(10, 5));

// const friend1 = "Mike";
// const friend2 = "Steve";
// const friend3 = "Pete";

// const friends = ["Mike", "Steve", "Pete"];

// console.log(friends);

// const years = new Array(1994, 1995, 1996);

// console.log(years);
// console.log(years[0]);
// console.log(years[2]);
// console.log(years.length);
// console.log(years[friends.length - 1]);

// friends[2] = "Jay";

// console.log(friends);

// const friends = ["Mike", "Steve", "Pete"];

// friends.push("Jay");
// console.log(friends);

// friends.unshift("John");
// console.log(friends);

// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// console.log(friends.indexOf("Steve"));

// console.log(friends.includes("Steve"));

// const kevinArray = [
//   "Kevin",
//   "Metzger",
//   2023 - 1994,
//   "GIS Analyst",
//   ["Taylor", "Cristian", "Austin", "Cody"],
// ];

// console.log(kevinArray);

// const kevin = {
//   firstName: "Kevin",
//   lastName: "Metzger",
//   birthYear: 1994,
//   job: "GIS Analyst",
//   friends: ["Taylor", "Cristian", "Austin", "Cody"],
//   location: "Austin",
//   children: ["Malcolm"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     if (this.hasDriversLicense) {
//       return `${this.firstName} is a ${this.calcAge()}-year old ${
//         this.job
//       }, and he has a drivers license.`;
//     } else {
//       return `${this.firstName} is a ${this.calcAge()}-year old ${
//         this.job
//       }, and he does not have a drivers license.`;
//     }
//   },
// };

// console.log(kevin);
// console.log(kevin.lastName);
// console.log(kevin["firstName"]);

// const info = prompt("What info about kevin are you interested in?");

// if (kevin[info]) {
//   console.log(kevin[info]);
// } else {
//   console.log("Info not available.");
// }

// console.log(kevin);

// console.log(
//   `Kevin has ${kevin["friends"].length} friends, and his best friend is called ${kevin["friends"][0]}`
// );

// console.log(kevin.getSummary());

// for (let i = 1; i <= 10; i++) {
//   console.log(`Iteration ${i}`);
// }

// const kevinArray = [
//   "Kevin",
//   "Metzger",
//   2023 - 1994,
//   "GIS Analyst",
//   ["Taylor", "Cristian", "Austin", "Cody"],
//   true,
// ];

// const kevinType = [];

// for (let i = 0; i < kevinArray.length; i++) {
//   kevinType.push(typeof kevinArray[i]);
// }

// console.log(kevinArray);
// console.log(kevinType);

// const years = [1994, 1995, 1996, 2004, 2015];

// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2023 - years[i]);
// }

// console.log(ages);

// for (let i = kevinArray.length - 1; i >= 0; i--) {
//   console.log(i, kevinArray[i]);
// }

// let i = 1;

// while (i <= 10) {
//   console.log(`Iteration ${i}`);
//   i++;
// }
