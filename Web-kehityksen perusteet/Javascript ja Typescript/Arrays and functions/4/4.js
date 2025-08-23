"use strict";

function sortArray(array) {
  return array.toSorted();
}

const numbers = [8, 5, 3, 9];
console.log(`Numbers before sorting: ${numbers}`);

const sortedNumbers = sortArray(numbers);
console.log(`Numbers after sorting: ${sortedNumbers}`);
