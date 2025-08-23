"use strict";

const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
let fruitCount = 0;
for (const _ of fruits) {
  fruitCount++;
}

console.log(`Fruits: ${fruits}`);
console.log(`Length of Fruits: ${fruitCount}`);
console.log(`Element at Index 2: ${fruits[2]}`);
console.log(`Last Element of Fruits: ${fruits[fruits.length - 1]}`);

const vegetables = [];
const veggie1 = prompt("Enter vegetable 1");
const veggie2 = prompt("Enter vegetable 2");
const veggie3 = prompt("Enter vegetable 3");
vegetables.push(veggie1);
vegetables.push(veggie2);
vegetables.push(veggie3);

let vegetableCount = 0;
for (const _ of vegetables) {
  vegetableCount++;
}

console.log(`Vegetables: ${vegetables}`);
console.log(`Length of Vegetables: ${vegetableCount}`);
