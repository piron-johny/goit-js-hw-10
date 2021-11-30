import '../css/styles.css';
// import { fetchCountries } from '../js/fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const debounce = require('lodash.debounce');
const Handlebars = require("handlebars");

import renderCountriesList from '../hbs/countries-card-min.hbs';

const inputValue = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countrInfo = document.querySelector('.country-info');
const DEBOUNCE_DELAY = 300;

// const template = Handlebars.compile(countryList);
inputValue.addEventListener('input', debounce(onInputValue, DEBOUNCE_DELAY));

function onInputValue(e) {
  const countriesValue = e.target.value;
  if (countriesValue == '') {
    countryList.innerHTML = '';
  } else {
    fetchCountries(countriesValue.trim().toLowerCase())
      .then(renderCounList)
      .catch(err => Notify.failure('Oops, there is no country with that name'));
  }
}

function fetchCountries(name) {
  if (name.length) return fetch(
    `https://restcountries.com/v2/name/${name}?fields=name,capital,population,languages,flag`,
  ).then(response => response.json());
}

function renderCounList(data) {
  let markup = '';
  if (data.length > 10) {
    markup = data.slice(0, 10).map(elem => renderCountriesList(elem)).join('')
  } else {
    markup = data.map(elem => renderCountriesList(elem)).join('')
  }
  // if (data.length === 0){
  //   markup = data.map(elem => renderCountriesList(elem)).join('')
  // }
  return countryList.innerHTML = markup;

}

//   .then(data => console.log(data))
//   .catch(err => Notify.failure('Oops, there is no country with that name'));
// // .catch(err => Notify.failure(err));
// // .finality()
