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

const genCountryDataAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('Get', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    console.log(Object.values(data.currencies)[0].name);
    const html = `
          <article class="country">
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
  });
};

genCountryData('portugal');
genCountryData('usa');
genCountryData('germany');

// https://restcountries.com/v2/
