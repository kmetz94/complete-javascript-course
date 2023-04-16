"use strict";

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//   }
//   printAge();

//   return age;
// }

// const firstName = "Kevin";
// calcAge(1994);

// console.log(me);
// console.log(job);
// console.log(year);

// var me = "Kevin";
// let job = "GIS Analyst";
// const year = 1994;

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// console.log(numProducts);

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log("All Products Deleted!");
// }

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2023 - birthYear);
//   console.log(this);
// };

// calcAge(1994);

// const calcAgeArrow = (birthYear) => {
//   console.log(2023 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1994);

// const kevin = {
//   firstName: "Kevin",
//   birthYear: 1994,
//   calcAge: function () {
//     console.log(2023 - this.birthYear);
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// kevin.greet();

// let lastName = "Williams";

// let oldLastName = lastName;

// lastName = "Davis";

// console.log(lastName, oldLastName);

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Bob", "Sarah"],
};

// const marriedJessica = jessica;
// marriedJessica.lastName = "Davis";
// console.log(jessica, marriedJessica);

const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = "Davis";

console.log(jessica, jessicaCopy);

jessicaCopy.family.push("Tim");
jessicaCopy.family.push("Alice");

console.log(jessica, jessicaCopy);
