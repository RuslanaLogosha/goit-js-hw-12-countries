import './styles.css';
import debounce from 'lodash.debounce';
import getRefs from './js/get-refs'
import API from './js/api-service'
import renderCountryCard from './js/renderCountryCard'


const refs = getRefs();

refs.searchInput.addEventListener('input', debounce(onSearch, 500));

function onSearch(event) {
  const searchQuery = refs.searchInput.value;
  API.fetchCountry(searchQuery).then(renderCountryCard).catch(onFetchError);
}

function onFetchError(error) {
  console.log('Надо ввести буквы')
}

refs.searchInput.addEventListener('keydown', onBackspacePress);

function onBackspacePress(event) {
  if (event.code === 'Backspace') {
    refs.countriesCountainer.innerHTML = '';
  }
}
