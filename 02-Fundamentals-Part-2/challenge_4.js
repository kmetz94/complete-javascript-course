"use strict";

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
}

for (let i = 0; i < bills.length; i++) {
  totals.push(bills[i] + tips[i]);
}

function calcAverage(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

console.log(bills);
console.log(tips);
console.log(totals);
console.log(calcAverage(totals));
