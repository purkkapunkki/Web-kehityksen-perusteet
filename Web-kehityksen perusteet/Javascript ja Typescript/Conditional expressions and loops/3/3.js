"use strict";

const sivu1 = parseInt(prompt("syötä kolmion ensimmäinen sivu"));
const sivu2 = parseInt(prompt("syötä kolmion toinen sivu"));
const sivu3 = parseInt(prompt("syötä kolmion kolmas sivu"));

let teksti;
if (sivu1 === sivu2 && sivu2 === sivu3) {
  teksti = `Kolmio on tasasivuinen.`;
} else if (sivu1 === sivu2 || sivu2 === sivu3 || sivu1 === sivu3) {
  teksti = `Kolmio on tasakylkinen.`;
} else {
  teksti = `Kolmion mitkään kyljet eivät ole samanmittaisia.`;
}

document.querySelector(`#target`).innerHTML = teksti;
