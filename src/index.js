import './styles.css';
import debounce from 'lodash.debounce';
import getRefs from './js/get-refs'
import API from './js/api-service'
import renderCountryCard from './js/renderCountryCard'
import onFetchError from './js/fetchError'


const refs = getRefs();

refs.searchInput.addEventListener('input', debounce(onSearch, 500));

async function onSearch() {
  const searchQuery = refs.searchInput.value;
  // API.fetchCountry(searchQuery).then(renderCountryCard).catch(onFetchError);
  try {
    await API.fetchCountry(searchQuery).then(renderCountryCard); 
  } catch(error) {
    onFetchError(error);
  }
}

refs.searchInput.addEventListener('keydown', onBackspacePress);

function onBackspacePress(event) {
  if (event.code === 'Backspace') {
    refs.countriesContainer.innerHTML = '';
  }
}
