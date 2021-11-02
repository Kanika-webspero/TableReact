import { name } from "../../pages/NameData";
import { SEARCHNAMES } from "../constants";

const initialState = {listOfNames: name}

export default function namesReducer  (state = initialState, action)  {
    const {type, payload} = action
    switch(type) {
        case SEARCHNAMES: return {
            ...state, 
            listOfNames: payload
        }
    default: return state
    }
}