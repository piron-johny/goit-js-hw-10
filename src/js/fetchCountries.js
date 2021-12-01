function fetchCountries(name) {
  if (name.length)
    return fetch(
      `https://restcountries.com/v3/name/${name}?fields=name,capital,population,languages,flag`,
    ).then(response => response.json());
}

export { fetchCountries };
