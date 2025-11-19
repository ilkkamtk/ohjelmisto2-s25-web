'use strict';

// etsitään syöttölomake html-sivulta
const tvFormElem = document.querySelector('#tv');

// etsitään tulostuksen paikka html-sivulta
const resultsElem = document.querySelector('#results');

// tehdään tapahtumankäsittelijä syöttölomakkeelle
tvFormElem.addEventListener('submit', async function (evt) {

    // estetään html-sivun oletustoiminto (action-parametri)
    evt.preventDefault();

    // etsitään käyttäjän antama hakusana
    const queryParam = document.querySelector('input[name=q]').value;

    // muodostetaan nettiin lähetettävä hakulause
    const query = `https://api.tvmaze.com/search/shows?q=${queryParam}`;

    // lähdetään hakemaan data netistä...
    try {

        // starting data download, fetch returns a promise which contains an object of type 'Response'
        const response = await fetch( query)

        // muutetaan saatu data json-muotoon
        const jsonData = await response.json();

        // tyhjennetään aluksi html-sivun tulostusalue
        resultsElem.innerHTML = '';

        // käydään saadusta json-datasta jokainen sarja yksitellen läpi,
        // tehdään DOM-elementtejä, kun lisätään dataa tulostukseen
        for (const tvShow of jsonData) {
            // DOM-elementti sarjan otsikkoa varten
            const h2 = document.createElement('h2');
            // lisätään otsikon sisältö saadusta datasta
            h2.innerText = tvShow.show.name;

            // muodostetaan kuva-elementti ja lisätään siihe sen data
            const img = document.createElement('img');
            // '?' -> jos kuva löytyy, niin ok. Jos ei, niin html-sivulle tulee pikku kuvake
            // -> tulos: js-koodi ei kaadu datan null-arvoon.
            img.src = tvShow.show.image?.medium;
            img.alt = tvShow.show.name;

            // tehdään article-elementti ja laitetaan sarjan tiedot sen sisään.
            const article = document.createElement('article');
            article.append(h2, img);

            // lisätään valmis article-elemntti html-sivun tulostusalueelle
            resultsElem.append(article);
        }

    } catch (error) {
        // virhetilanteessa tulostetaan virheen kuvaus
        console.log(error.message);
    }
});
