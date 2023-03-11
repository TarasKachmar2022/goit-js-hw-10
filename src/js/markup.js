export function countryListMarkup(data){
    return data.map(({name, flag}) => { return `<li><div class='container'><img src=${flag} alt=flag of '${name}' width='30px' height='25px'><p>${name}</p></div></li>`
}).join('');
}

export function сountryInfoMarkup(data){
    return data.map(({name, capital, population, languages, flag}) => { 
        let lang = languages.map(languages =>  ' ' + languages.name);
        return `<li><div class='container'><img src=${flag} alt="flag of, ${name}" width='30px' height='25px'><h2>${'' + name}</h2></div><p><span class="span">Capital:</span> ${capital}</p><p><span class="span">Population:</span> ${population}</p><p><span class="span">Languages:</span> ${lang}</p></li>`
    });
}