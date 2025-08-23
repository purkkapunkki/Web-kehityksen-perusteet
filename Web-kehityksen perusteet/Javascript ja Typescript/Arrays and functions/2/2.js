"use strict";
const numbers = [];

for (let i = 1; i <= 5; i++) {
  const number = parseInt(prompt(`Enter Number ${i}:`));
  numbers.push(number);
}

console.log(`Numbers: ${numbers}`);

const numberToSearch = parseInt(prompt("Enter a Number to Search:"));

if (numbers.includes(numberToSearch)) {
  console.log(`Number ${numberToSearch} is found in the array.`);
} else {
  console.log(`Number ${numberToSearch} is not found in the array.`);
}

numbers.pop();
console.log(`Updated Numbers: ${numbers}`);

numbers.sort((a, b) => a - b);
console.log(`Sorted Numbers: ${numbers}`);
