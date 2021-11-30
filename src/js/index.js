import './src/css/styles.css';
import { fetchCountries } from './js/fetchCountries';
const debounce = require('lodash.debounce');
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const Handlebars = require('handlebars');

const inputValue = document.getElementById('search-box');
const DEBOUNCE_DELAY = 300;

inputValue.addEventListener('input', debounce(onInputValue, DEBOUNCE_DELAY));

function onInputValue(e) {
  const countriesValue = e.target.value;
  fetchCountries(countriesValue.trim());
}
