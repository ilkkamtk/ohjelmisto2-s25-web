'use strict';

// arvo huone (numero 0 - 3)
const huone = Math.floor(Math.random() * 4);

const huoneet = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

console.log(`Huoneesi on ${huoneet[huone]}`);