const BASE_URL = 'https://restcountries.eu/rest/v2';

async function fetchCountry(countryName) {
// return fetch(`${BASE_URL}/name/${countryName}`).then(response => response.json(),);
    const response = await fetch(`${BASE_URL}/name/${countryName}`);
    const countries = await response.json();
    return countries;
}
export default { fetchCountry };