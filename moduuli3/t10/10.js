'use strict';

const lomake = document.querySelector('#source');

lomake.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const formData = new FormData(lomake);
  const etunimi = formData.get('firstname');
  const sukunimi = formData.get('lastname');

  document.querySelector(
      '#target').innerText = `Your name is ${etunimi} ${sukunimi}`;

  // jos tarttee datat lähettää getillä
  // const queryString = new URLSearchParams(formData);
  // console.log(queryString.toString());
});