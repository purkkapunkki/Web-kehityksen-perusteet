"use strict";

const pisteet = parseInt(prompt("syötä pisteet"));

let teksti;
if (pisteet === 0 || pisteet <= 39) {
  teksti = "arvosana on 0";
} else if (pisteet >= 40 && pisteet <= 51) {
  teksti = "arvosana on 1";
} else if (pisteet >= 52 && pisteet <= 63) {
  teksti = "arvosana on 2";
} else if (pisteet >= 64 && pisteet <= 75) {
  teksti = "arvosana on 3";
} else if (pisteet >= 76 && pisteet <= 87) {
  teksti = "arvosana on 4";
} else {
  teksti = "arvosana on 5";
}

document.querySelector(`#target`).innerHTML = teksti;
