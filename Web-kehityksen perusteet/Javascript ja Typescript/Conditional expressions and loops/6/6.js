"use strict";

const givenNumber = parseInt(prompt("syötä numero"));

const table = document.querySelector(`#target`);

for (let i = 1; i <= givenNumber; i++) {
  const tableRow = document.createElement("tr");
  table.append(tableRow);
  for (let j = 1; j <= givenNumber; j++) {
    let product = i * j;
    const tablecell = document.createElement("td");
    tablecell.innerHTML = product;
    tableRow.append(tablecell);
  }
}
