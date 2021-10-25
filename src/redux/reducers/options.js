import { countryState } from "../../pages/CountriesData";
import { countries } from "../../pages/CountriesData";
import { SEARCHCOUNTRIES, SEARCHSTATES } from "../constants";

const initialState = {listOfStates: countryState, list: countries};

export const options = (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case SEARCHCOUNTRIES: return {
            ...state,
            list: payload
        }        
        case SEARCHSTATES: return {
            ...state,
            listOfStates: payload
        }
        default: return state;
        
    }
}
