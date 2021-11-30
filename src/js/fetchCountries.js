import { Notify } from 'notiflix/build/notiflix-notify-aio';

function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v2/name/${name}?fields=name,capital,population,languages,flag`,
  )
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => Notify.failure('Oops, there is no country with that name'));
  // .catch(err => Notify.failure(err));
  // .finality()
}

export { fetchCountries };
