'use strict';

const x1 = prompt('anna ensimmäisen pisteen x koordinaatti');
const y1 = prompt('anna ensimmäisen pisteen y koordinaatti');

const x2 = prompt('anna toisen pisteen x koordinaatti');
const y2 = prompt('anna toisen pisteen y koordinaatti');

const etaisyys = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

console.log(etaisyys);

const teksti = `pisteiden etäisyys on ${etaisyys}`;

document.querySelector(`#target`).innerHTML = teksti;
