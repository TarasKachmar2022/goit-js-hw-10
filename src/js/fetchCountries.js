const BASE_URL = 'https://restcountries.com/v2';

export class RestCountriesApi{
    constructor(){
        this.searchQuery = '';
    }

    fetchCountries(){
        return fetch(`${BASE_URL}/name/${this.searchQuery}?fields=name,capital,population,flag,languages`).then(response => {
            if(!response.ok){
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .catch(error => console.log(error));
    }

    get query(){
        return this.searchQuery;
    }

    set query(newQuery){
        this.searchQuery = newQuery;
    }
}
