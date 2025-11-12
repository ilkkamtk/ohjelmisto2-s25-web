'use strict';

// select the elements
const form = document.querySelector('form');
const fname = document.querySelector('input[name=fName]');
const lname = document.querySelector('input[name=lName]');
const p = document.querySelector('p');

// When the form is submitted...
form.addEventListener('submit', function(evt) {
  // ... prevent the default action.
  evt.preventDefault();
  // Here you can check, for example, whether the fields on the form have been filled in correctly,
  // after which it could be sent using the fetch method, for example
  // However, for now, let's print the user input as an example.
  p.innerText = `Your name is ${fname.value} ${lname.value}`;
});