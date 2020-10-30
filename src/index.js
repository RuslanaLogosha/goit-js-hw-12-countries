import './styles.css';
import debounce from 'lodash.debounce';
import getRefs from './js/get-refs'
import API from './js/api-service'
import countryTempOne from './templateOne.hbs';
import countryTemp2_10 from './template2_10.hbs'
// import { alert } from '../node_modules/@pnotify/core/dist/PNotify.js';
import { alert } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';



const myAlert = alert({
  text: "Too many matches found. Please enter more specific query.",
  type: 'notice',
  styling: 'brighttheme',
});

const refs = getRefs();

refs.searchInput.addEventListener('input', debounce(onSearch, 500));


//   API.fetchCountry(searchQuery).
//   then(renderCountryCard).catch(onCatchError).finally(onResetInput)
// }

function onSearch(event) {
  const searchQuery = refs.searchInput.value;
  API.fetchCountry(searchQuery).then(renderCountryCard);
}

function renderCountryCard(countries) {

  if (countries.length === 1) {
     const markup = countryTempOne(countries[0]);
     refs.countriesCountainer.innerHTML = markup;
  }
  if (countries.length >= 2 || countries.length <= 10) {
    const markup2_10 = countryTemp2_10(countries);
    refs.countriesCountainer.innerHTML = markup2_10;
  }

  else if (countries.length > 10) {
    
    alert();
  }
 
}