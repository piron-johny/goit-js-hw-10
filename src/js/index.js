import '../css/styles.css';
// import { fetchCountries } from '../js/fetchCountries';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
const debounce = require('lodash.debounce');
const Handlebars = require("handlebars");

import renderCountriesList from '../hbs/countries-card-min.hbs';
const template = Handlebars.compile('renderCountriesList');

console.log(template);

const inputValue = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countrInfo = document.querySelector('.country-info');
const DEBOUNCE_DELAY = 300;

inputValue.addEventListener('input', debounce(onInputValue, DEBOUNCE_DELAY));

function onInputValue(e) {
  const countriesValue = e.target.value;
  fetchCountries(countriesValue.trim().toLowerCase())
    .then(renderCounList)
    .catch(err => console.log(err));
}

function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v2/name/${name}?fields=name,capital,population,languages,flag`,
  ).then(response => response.json());
}

function renderCounList(data) {
  const markup = template(data);
  countryList.innerHTML = markup;
}

//   .then(data => console.log(data))
//   .catch(err => Notify.failure('Oops, there is no country with that name'));
// // .catch(err => Notify.failure(err));
// // .finality()
