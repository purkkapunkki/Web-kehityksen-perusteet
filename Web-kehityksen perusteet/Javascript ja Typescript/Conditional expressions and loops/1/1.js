'use strict';

const celcius = parseInt(prompt('Anna celcius-asteet, jotka muunnetaan fahrenheiteiksi ja kelvineiksi.'));

const fahrenheit = celcius * 1.8 + 32;
const kelvin = celcius + 273.15;


const teksti = `${celcius}°C on ${fahrenheit}°F ja ${kelvin}K.`;

document.querySelector(`#target`).innerHTML = teksti;

