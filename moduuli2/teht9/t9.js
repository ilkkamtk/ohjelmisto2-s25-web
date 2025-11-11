'use strict';

function even(numbers) {
  const evenNumbers = [];
  for (let number of numbers) {
    if (number % 2 !== 0) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}

const numerot = [12, 2, 3, 1, 56, 7, 89, 45, 65, 32, 123, 77];

const result = even(numerot);

console.log('alkuperäinen', numerot);
console.log('muutettu', result);