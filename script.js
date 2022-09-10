'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////

// const genCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('Get', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     console.log(Object.values(data.currencies)[0].name);
//     const html = `
//         <article class="country">
//             <img class="country__img" src="${data.flags.png}" />
//             <div class="country__data">
//                 <h3 class="country__name">${data.name.official}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(
//                   +data.population / 1000000
//                 ).toFixed(1)} people</p>
//                 <p class="country__row"><span>🗣️</span>${
//                   Object.values(data.languages)[0]
//                 }</p>
//                 <p class="country__row"><span>💰</span>${
//                   Object.values(data.currencies)[0].name
//                 }</p>
//             </div>
//         </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// genCountryData('portugal');
// genCountryData('usa');
// genCountryData('germany');
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.official}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
        </div>
    </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryDataAndNeighbour = function (country) {
  //AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('Get', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    console.log(Object.values(data.currencies)[0].name);

    //render Country 1
    renderCountry(data);
    // Get neighbout country 2
    const neighbout = data.borders[0];
    console.log(neighbout);
    const request2 = new XMLHttpRequest();
    request2.open('Get', `https://restcountries.com/v3.1/alpha/${neighbout}`);
    request2.send();
    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryDataAndNeighbour('portugal');
// getCountryDataAndNeighbour('nepal');

// https://restcountries.com/v2/
