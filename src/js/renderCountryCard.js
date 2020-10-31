import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';
import { defaults } from '@pnotify/core';
import countryTempOne from '../templateOne.hbs';
import countryTemp2_10 from '../template2_10.hbs'
import getRefs from './get-refs'

const refs = getRefs();

export default function renderCountryCard(countries) {

  if (countries.length === 1) {
     const markup = countryTempOne(countries[0]);
     refs.countriesCountainer.innerHTML = markup;
  }
  if (countries.length >= 2 && countries.length <= 10) {
    const markup2_10 = countryTemp2_10(countries);
    refs.countriesCountainer.innerHTML = markup2_10;
  }

  if (countries.length >= 11) {

    defaults.width = '400px';
    defaults.delay = 700;
    defaults.addClass = 'errorStyle';

    const myError = error({
    text: "Too many matches found. Please enter a more specific query."
  });
  }
 
}

