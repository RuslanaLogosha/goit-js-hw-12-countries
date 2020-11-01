import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';
import { defaults } from '@pnotify/core';
import countryTempOne from '../templateOne.hbs';
import countryTemp2_10 from '../template2_10.hbs'
import getRefs from './get-refs'

const refs = getRefs();

export default function renderCountryCard(countries) {

  if (countries.length === 1) {
    refs.countriesContainer.innerHTML = countryTempOne(countries[0]);
  }
  if (countries.length >= 2 && countries.length <= 10) {
    refs.countriesContainer.innerHTML = countryTemp2_10(countries);
  }

  if (countries.length >= 11) {

    defaults.width = '400px';
    defaults.delay = 700;
    defaults.addClass = 'errorStyle';

    error({
    text: "Too many matches found. Please enter a more specific query."
  });
  }
 
}

