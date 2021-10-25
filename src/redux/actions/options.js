import { SEARCHCOUNTRIES, SEARCHSTATES } from '../constants/index' 

export const searchCountry = (searchedValue, allCountries) => {
    //     console.log(searchedValue, 'searchedValue');
    //     console.log(allCountries, 'allCountries');
    // const unLinked = allCountries.filter((suggestion) => suggestion.name.toLowerCase().indexOf(searchedValue.toLowerCase()) > -1)
    
    
        return {
            type: SEARCHCOUNTRIES,
            // payload: unLinked
        }
    }

export const searchState = (a) => {
    return {
        type: SEARCHSTATES,
        payload: a
    }
}