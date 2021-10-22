import { INCREMENT, DECREMENT, ADD, SUBTRACT, MULTIPLY, DIVIDE} from "../constants";

const initialState = {count: 0, calculate: 0};

export const count = (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case INCREMENT: return {
            ...state,
            count: payload 
        } 
        case DECREMENT: return {
            ...state,
            count: payload
        } ;
        case ADD: return {
            ...state,
            calculate:  payload
        } 
        case SUBTRACT: return {
            ...state,
            calculate:  payload
        } 
        case MULTIPLY: return {
            ...state,
            calculate:  payload
        } 
        case DIVIDE: return {
            ...state,
            calculate:  payload
        } 
        default: return state;
        
    }
}
