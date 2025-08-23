"use strict";

const givenNumber = parseInt(prompt("syötä numero"));

let sum = 0;
for (let i = 0; i <= givenNumber; i++) {
  sum += i;
}

document.querySelector(`#target`).innerHTML = sum;
