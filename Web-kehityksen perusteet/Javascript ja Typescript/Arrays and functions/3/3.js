"use strict";

const givenNumbers = [];

while (true) {
  let userPrompt = prompt("Syötä numero tai kirjoita done lopettaaksesi.");
  if (userPrompt === "done") {
    break;
  }
  givenNumbers.push(parseInt(userPrompt));
}

const evenNumbers = [];

for (const number of givenNumbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}

const target = document.querySelector(`#target`);

if (evenNumbers.length === 0) {
  target.innerHTML = `Ei parillisia lukuja.`;
} else {
  target.innerHTML = `Parilliset numerot: ${evenNumbers.join(", ")}.`;
}
