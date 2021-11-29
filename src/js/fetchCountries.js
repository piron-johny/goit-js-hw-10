import { Notify } from 'notiflix/build/notiflix-notify-aio';

function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v2/name/${name}?fields=name,capital,population,languages,flag`,
  )
    .then(response => response.json())
    .then(data => data)
    .catch(Notify.failure('Oops, there is no country with that name'));
}

export { fetchCountries };
