import '../css/styles.css';
import { fetchCountries } from '../js/fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import markupCountriesList from '../hbs/countries-card-min.hbs';
import markupCountriesInfo from '../hbs/countries-card-max.hbs';

// const Handlebars = require('handlebars');
const debounce = require('lodash.debounce');
const inputValue = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const DEBOUNCE_DELAY = 300;

inputValue.addEventListener('input', debounce(onInputValue, DEBOUNCE_DELAY));

function onInputValue(e) {
  const countriesValue = e.target.value;
  if (countriesValue == '') {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
  } else {
    fetchCountries(countriesValue.trim().toLowerCase())
      .then(renderCountriesList)
      .catch(err => Notify.failure('Oops, there is no country with that name'));
  }
}

function renderCountriesList(data) {
  const Counrties = data.map(elem => markupCountriesList(elem)).join('');
  const CounrtiesInfo = data.map(elem => markupCountriesInfo(elem)).join('');

  if (data.length > 1 && data.length <= 10) {
    countryInfo.innerHTML = '';
    return (countryList.innerHTML = Counrties);
  }
  if (data.length === 1) {
    return (countryList.innerHTML = Counrties), (countryInfo.innerHTML = CounrtiesInfo);
  }
  Notify.info('Too many matches found. Please enter a more specific name.');
}
