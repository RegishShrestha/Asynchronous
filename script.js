// 'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// // // ///////////////////////////////////////

// // // const genCountryData = function (country) {
// // //   const request = new XMLHttpRequest();
// // //   request.open('Get', `https://restcountries.com/v3.1/name/${country}`);
// // //   request.send();
// // //   request.addEventListener('load', function () {
// // //     const [data] = JSON.parse(this.responseText);
// // //     console.log(data);
// // //     console.log(Object.values(data.currencies)[0].name);
// // //     const html = `
// // //         <article class="country">
// // //             <img class="country__img" src="${data.flags.png}" />
// // //             <div class="country__data">
// // //                 <h3 class="country__name">${data.name.official}</h3>
// // //                 <h4 class="country__region">${data.region}</h4>
// // //                 <p class="country__row"><span>👫</span>${(
// // //                   +data.population / 1000000
// // //                 ).toFixed(1)} people</p>
// // //                 <p class="country__row"><span>🗣️</span>${
// // //                   Object.values(data.languages)[0]
// // //                 }</p>
// // //                 <p class="country__row"><span>💰</span>${
// // //                   Object.values(data.currencies)[0].name
// // //                 }</p>
// // //             </div>
// // //         </article>`;
// // //     countriesContainer.insertAdjacentHTML('beforeend', html);
// // //     countriesContainer.style.opacity = 1;
// // //   });
// // // };

// // // genCountryData('portugal');
// // // genCountryData('usa');
// // // genCountryData('germany');
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

// // // const getCountryDataAndNeighbour = function (country) {
// // //   //AJAX call country 1
// // //   const request = new XMLHttpRequest();
// // //   request.open('Get', `https://restcountries.com/v3.1/name/${country}`);
// // //   request.send();
// // //   request.addEventListener('load', function () {
// // //     const [data] = JSON.parse(this.responseText);
// // //     console.log(data);
// // //     console.log(Object.values(data.currencies)[0].name);

// // //     //render Country 1
// // //     renderCountry(data);
// // //     // Get neighbout country 2
// // //     const neighbout = data.borders[0];
// // //     console.log(neighbout);
// // //     const request2 = new XMLHttpRequest();
// // //     request2.open('Get', `https://restcountries.com/v3.1/alpha/${neighbout}`);
// // //     request2.send();
// // //     request2.addEventListener('load', function () {
// // //       const [data2] = JSON.parse(this.responseText);
// // //       console.log(data2);
// // //       renderCountry(data2, 'neighbour');
// // //     });
// // //   });
// // // };

// // // getCountryDataAndNeighbour('portugal');
// // // getCountryDataAndNeighbour('nepal');

// // // https://restcountries.com/v2/

// // // const request = fetch('https://restcountries.com/v3.1/name/portugal');
// // // console.log(request);

// // // const getCountryData = function (country) {
// // //   fetch(`https://restcountries.com/v3.1/name/${country}`)
// // //     .then(function (response) {
// // //       //   console.log(response);
// // //       return response.json();
// // //     })
// // //     .then(function (data) {
// // //       console.log(data);
// // //       renderCountry(data[0]);
// // //     });
// // // };

// // const renderError = function (msg) {
// //   countriesContainer.insertAdjacentText('beforeend', msg);
// //   // countriesContainer.style.opacity = 1;
// // };

// // const getJSON = function (url, message = 'Some thing is wrong') {
// //   fetch(url).then(response => {
// //     if (!response.ok) {
// //       throw new Error(`Country name not found${response.status}`);
// //     }
// //     return response.json();
// //   });
// // };

// // // const getCountryData = function (country) {
// // //   fetch(`https://restcountries.com/v3.1/name/${country}`)
// // //     .then(response => {
// // //       console.log(response);
// // //       if (!response.ok) {
// // //         throw new Error(`Country name not found${response.status}`);
// // //       }
// // //       return response.json();
// // //     })
// // //     .then(data => {
// // //       renderCountry(data[0]);
// // //       const neighbour = data[0].borders?.[0];
// // //       console.log(data);

// // //       if (!neighbour) return;
// // //       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
// // //     })
// // //     .then(response => response.json())
// // //     .then(data => renderCountry(data[0], 'neighbour'))
// // //     .catch(err => {
// // //       console.error(`${err}:(:(:(`);
// // //       renderError(`Something went wrong ${err.message}`);
// // //     })
// // //     .finally(() => (countriesContainer.style.opacity = 1));
// // // };

// // const getCountryData = function (country) {
// //   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
// //     .then(data => {
// //       renderCountry(data[0]);
// //       const neighbour = data[0].borders?.[0];
// //       console.log(data);

// //       if (!neighbour) throw new Error('NO nneighbour found');
// //       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
// //     })
// //     .then(response => response.json())
// //     .then(data => renderCountry(data[0], 'neighbour'))
// //     .catch(err => {
// //       console.error(`${err}:(:(:(`);
// //       renderError(`Something went wrong ${err.message}`);
// //     })
// //     .finally(() => (countriesContainer.style.opacity = 1));
// // };

// // btn.addEventListener('click', function () {
// //   getCountryData('portugal');
// // });

// // getCountryData('fdfdfdf');

// // // I have 2 reasons for wanting to participate as a Mentee . The first is that I think this program will help me to increase my self awareness and communication skills and also help me to grow as a person, student. Being envloved in this program will help in growing of personal network within business aswell. The second is that I truly believe I have something to contribute: by being there, I can bring unique insight, perspective, and a positive, collaborative attitude.

// // /*Asynchronous JavaScript
// // Coding Challenge #1
// // In this challenge you will build a function 'whereAmI' which renders a country
// // only based on GPS coordinates. For that, you will use a second API to geocode
// // coordinates. So in this challenge, you’ll use an API on your own for the first time 😁
// // Your tasks:
// // PART 1
// // 1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
// // and a longitude value ('lng') (these are GPS coordinates, examples are in test
// // data below).
// // 2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
// // to convert coordinates to a meaningful location, like a city and country name.
// // Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
// // will be done to a URL with this format:
// // https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
// // promises to get the data. Do not use the 'getJSON' function we created, that
// // is cheating 😉
// // 3. Once you have the data, take a look at it in the console to see all the attributes
// // that you received about the provided location. Then, using this data, log a
// // message like this to the console: “You are in Berlin, Germany”
// // 4. Chain a .catch method to the end of the promise chain and log errors to the
// // console
// // 5. This API allows you to make only 3 requests per second. If you reload fast, you
// // will get this error with code 403. This is an error with the request. Remember,
// // fetch() does not reject the promise in this case. So create an error to reject
// // the promise yourself, with a meaningful error message
// // PART 2
// // 6. Now it's time to use the received data to render a country. So take the relevant
// // attribute from the geocoding API result, and plug it into the countries API that
// // we have been using.
// // 7. Render the country and catch any errors, just like we have done in the last
// // lecture (you can even copy this code, no need to type the same code)
// // The Complete JavaScript Course
// // 30Test data:
// // § Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// // § Coordinates 2: 19.037, 72.873
// // § Coordinates 3: -33.933, 18.474
// // // GOOD LUCK 😀*/

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(`Country name not found${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       console.log(data);

//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err}:(:(:(`);
//       renderError(`Something went wrong ${err.message}`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`problem with geo coding ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(response => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(`Country name not found${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//     })

//     .catch(err => console.log(err));
// };
// whereAmI(19.037, 72.873);
// // whereAmI(52.508, 13.381);

// console.log('time iin');

// setTimeout(function () {
//   console.log('timer got');
// }, 0);

// Promise.resolve('Promise 1').then(res => console.log(res));

// Promise.resolve('Promise 2').then(res => {
//   for (let i = 0; i <= 1000000000; i++) {}
//   console.log(res);
// });

// console.log('time out');

// const luckyDrawal = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You are lucky guy');
//     } else {
//       reject('Yup your money is gone ');
//     }
//   }, 2000);
// });

// luckyDrawal.then(res => console.log(res)).catch(err => console.log(err));

// const wait = function (second) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, second);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('I waited 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I wated 1 sec'));

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   er => console.log(er)
// );

// const getPosition = function () {
//   return new Promise();
// };

const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const data = await res.json();
  console.log(data);
  renderCountry(data[0]);
};

whereAmI('Portugal');
