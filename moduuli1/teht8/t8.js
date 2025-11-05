'use strict';

const kohde = document.querySelector('#target');

const alku = prompt('Syötä aloitusvuosi');
const loppu = prompt('Syötä lopetusvuosi');


for (let i = alku; i <= loppu; i++) {
  if (i % 4 === 0) {
    kohde.innerHTML += `<li>${i}</li>`;
  }
}