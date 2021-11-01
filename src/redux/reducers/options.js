import { cities, countryState } from "../../pages/CountriesData";
import { countries } from "../../pages/CountriesData";
import { SEARCHCITIES, SEARCHCOUNTRIES, SEARCHSTATES } from "../constants";

const initialState = {
    listOfStates: countryState, 
    list: countries, 
    listOfCities: cities,
    requiredStates: [],
    requiredCountries: [],
    requiredCities: [],

};

export const options = (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case SEARCHCOUNTRIES: return {
            ...state,
            list: payload
        }        
        case SEARCHSTATES: return {
            ...state,
            requiredStates: payload
        }
        case SEARCHCITIES: return {
            ...state,
            requiredCities: payload
        }
        default: return state;
        
    }
}
