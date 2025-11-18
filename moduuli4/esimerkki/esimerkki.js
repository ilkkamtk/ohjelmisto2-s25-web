'use strict';

const airportForm = document.querySelector('#airport-form');

async function asynchronousFunction(evt) {
  evt.preventDefault();
  // get value of input element
  const code = document.querySelector('input[name=icao]').value;
  try {                                               // error handling: try/catch/finally
    const response = await fetch('http://127.0.0.1:3000/airport/' + code);    // starting data download, fetch returns a promise which contains an object of type 'response'
    const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
    document.querySelector(
        '#target').innerText = `Nimi: ${jsonData.name}, Kunta: ${jsonData.municipality} `;
  } catch (error) {
    console.log(error.message);
  } finally {                                         // finally = this is executed anyway, whether the execution was successful or not
    console.log('asynchronous load complete');
  }
}

airportForm.addEventListener('submit', asynchronousFunction);