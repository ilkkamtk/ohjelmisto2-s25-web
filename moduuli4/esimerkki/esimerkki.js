'use strict';

const airportForm = document.querySelector('#airport-form');
const map = L.map('map').setView([51.505, -0.09], 13);

async function asynchronousFunction(evt) {
  evt.preventDefault();
  // get value of input element
  const code = document.querySelector('input[name=icao]').value;
  try {                                               // error handling: try/catch/finally
    const response = await fetch('http://127.0.0.1:3000/airport/' + code);    // starting data download, fetch returns a promise which contains an object of type 'response'
    const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
    if (!response.ok) {
      alert(jsonData.error);
      return;
    }
    document.querySelector(
        '#target').innerText = `Nimi: ${jsonData.name}, Kunta: ${jsonData.municipality}`;
    map.setView([jsonData.latitude_deg, jsonData.longitude_deg], 13);
    const marker = L.marker([jsonData.latitude_deg, jsonData.longitude_deg]).
        addTo(map);
    const p = document.createElement('p');
    p.innerText = jsonData.name;
    const button = document.createElement('button');
    button.innerText = 'Click me';
    button.addEventListener('click', function() {
      alert(jsonData.type);
    });

    const markerContent = document.createElement('div');
    markerContent.append(p, button);
    marker.bindPopup(markerContent);
  } catch (error) {
    console.log('Virhe: ' + error.message);
  } finally {                                         // finally = this is executed anyway, whether the execution was successful or not
    console.log('asynchronous load complete');
  }
}

airportForm.addEventListener('submit', asynchronousFunction);

// karttaosasto
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
