"use strict";

function sortArray(numbers, order) {
  if (order === "asc") {
    return numbers.toSorted();
  } else {
    return numbers.toSorted().reverse();
  }
}

const numbersToSort = [8, 5, 3, 9, 8];
console.log(`Numbers before sorting: ${numbersToSort.join(", ")}`);

const ascendingNumbers = sortArray(numbersToSort, "asc");
const descendingNumbers = sortArray(numbersToSort, "desc");
console.log(`Numbers in ascending order: ${ascendingNumbers.join(", ")}`);
console.log(`Numbers in descending order: ${descendingNumbers.join(", ")}`);
