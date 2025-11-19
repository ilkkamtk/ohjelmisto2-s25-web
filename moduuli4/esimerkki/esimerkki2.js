'use strict';

const hakulomake = document.querySelector('#hakulomake');
const saatiedot = document.querySelector('#saatiedot');

async function haeSaatiedot(evt) {
  evt.preventDefault();
  saatiedot.innerHTML = '';
  try {
    const city = document.querySelector('input[name=kaupunki]').value;
    const queryString = `/weather?q=${city}&appid=${apiKey}&units=metric&lang=fi`;
    const response = await fetch(apiURL + queryString);
    const jsonData = await response.json();

    const h3 = document.createElement('h3');
    h3.innerText = jsonData.name;

    const tuuli = document.createElement('p');
    tuuli.innerText = `Tuulen nopeus:  ${jsonData.wind.speed}`;

    const lampo = document.createElement('p');
    lampo.innerText = `Lämpötila: ${jsonData.main.temp}°C`;

    const figure = document.createElement('figure');
    const iconImg = document.createElement('img');
    iconImg.alt = jsonData.weather[0].description;
    iconImg.src = `${imgURL}${jsonData.weather[0].icon}@2x.png`;
    const caption = document.createElement('figcaption');
    caption.innerText = jsonData.weather[0].description;

    figure.append(iconImg, caption);
    saatiedot.append(h3, tuuli, lampo, figure);
    console.log(saatiedot);

  } catch (error) {

  }
}

hakulomake.addEventListener('submit', haeSaatiedot);