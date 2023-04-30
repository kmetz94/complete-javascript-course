"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

// const [starter, main] = restaurant.order(2, 0);

// const {
//   fri: { open, close },
// } = restaurant.openingHours;

// function add(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }

// console.log(add(2, 3));
// console.log(add(2, 3, 4, 5, 6));

// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "Olives", "beeteroni", "Cheese");
// }

// restaurant.orderPizza && restaurant.orderPizza("Cheese", "Spinach", "Tomato");

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//   console.log(item);
// }

// for (const [index, value] of menu.entries()) {
//   console.log(index, value);
// }

// const rest = new Map();

// rest.set("catergories", ["Italian", "Pizzeria", "Vegetarian", "Organic"]);
// rest.set(true, "Open!");
// rest.set(false, "Closed!");

// console.log(rest);

// console.log(rest.delete(true));
// console.log(rest);

// rest.set([1, 2], "test");
// console.log(rest);

// console.log(rest.get([1, 2]));

// const question = new Map([
//   ["question", "What is the best programming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "Correct!"],
//   [false, "Try again!"],
// ]);

// console.log(question.get("question"));

// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(key, value);
// }

// const answer = Number(prompt("What is your answer?"));

// console.log(question.get(answer === question.get("correct")));

// console.log([...question]);

const stuff = "This is a string with the word word twice.";

console.log(stuff.replaceAll("word", "yeet"));
