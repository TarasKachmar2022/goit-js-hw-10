export function countryListMarkup(data){
    return data.map(({name, flag}) => { return `<li><img src='${flag}' alt='flag of '${name}' width='30px'><p>${name}</p></li>`
})
}

export function сountryInfoMarkup(data){
    return data.map(({name, capital, population, languages, flag}) => { 
        let lang = languages.map(languages =>  ' ' + languages.name);
        return `<li><img src='${flag}' alt="flag of, ${name}" width='30px'><h2>${name}</h2><p>Capital: ${capital}</p><p>Population: ${population}</p><p>Languages: ${lang}</p></li>`
    });
}