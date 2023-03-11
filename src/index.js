import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import './css/styles.css';
import {RestCountriesApi} from './js/fetchCountries';
import {countryListMarkup, сountryInfoMarkup} from './js/markup';

const DEBOUNCE_DELAY = 300;

const restCountriesApi = new RestCountriesApi();

const refs = {
    inputEl: document.querySelector('#search-box'),
    countryListEl: document.querySelector('.country-list'),
    countryInfoEl: document.querySelector('.country-info'),
}

refs.inputEl.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(event){
    restCountriesApi.query = event.target.value.trim();
    const {query} = restCountriesApi;
    if(!query){
        refs.countryListEl.innerHTML = '';
        return;
    }
    
    const dataMarkup = restCountriesApi.fetchCountries();

    dataMarkup.then(data => {
        console.log(data)
        if(data === undefined){
            Notiflix.Notify.failure(
            "Oops, there is no country with that name",
                {
                    timeout: 6000,
                },
            );
            return; 
        }else if(data.length > 0 && data.length <= 2){
            refs.countryListEl.innerHTML = сountryInfoMarkup(data);
            return;
        }else if(data.length > 2 && data.length <= 10){
            refs.countryListEl.innerHTML = countryListMarkup(data);
            return;
        } else if(data.length > 10){
            refs.countryListEl.innerHTML = '';
            Notiflix.Notify.info(
                "Too many matches found. Please enter a more specific name.",
                {
                    timeout: 6000,
                },
            );
            return;
        } 
    })
}