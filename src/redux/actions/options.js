import { SEARCHCITIES, SEARCHCOUNTRIES, SEARCHSTATES } from '../constants/index' 

export const searchCountry = () => {
       
        return {
            type: SEARCHCOUNTRIES,
        }
    }

export const searchState = (statesRelatedToCountry, b) => {
    return {
        type: SEARCHSTATES,
        payload: statesRelatedToCountry
    }
}

export const searchCity = (cityRelatedToState) => {
    return {
        type: SEARCHCITIES,
        payload: cityRelatedToState
    }
}