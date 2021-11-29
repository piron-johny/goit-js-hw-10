import './css/styles.css';

const inputValue = document.getElementById('search-box');
const DEBOUNCE_DELAY = 300;

inputValue.addEventListener('input', onInputValue);

function onInputValue(e) {
  fetchCountries(e.currentTarget.value);
}

function fetchCountries(name) {
  // fetch(`https://restcountries.com/v2/${name}?fields=name.official,capital,currencies,population,flags.svg`)
  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => response.json())
    .then(data => {
      console.log(`rerender`, data);
    });
}
