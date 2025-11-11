'use strict';

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

let tulos = 0;

while (tulos !== 6) {
  tulos = rollDice();
  document.querySelector('#target').
      insertAdjacentHTML('beforeend', `<li>${tulos}</li>`);
}