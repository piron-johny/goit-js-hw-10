import '../css/styles.css';
import { fetchCountries } from '../js/fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const debounce = require('lodash.debounce');
let Handlebars = require('handlebars');

const inputValue = document.getElementById('search-box');
const DEBOUNCE_DELAY = 300;

inputValue.addEventListener('input', debounce(onInputValue, DEBOUNCE_DELAY));

function onInputValue(e) {
  const countriesValue = e.target.value;
  console.log(fetchCountries(countriesValue.trim().toLowerCase()));
}
