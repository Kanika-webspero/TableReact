import { INCREMENT, DECREMENT, ADD, SUBTRACT, MULTIPLY, DIVIDE, RESET} from "../constants";

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
        case ADD: 
        case SUBTRACT: 
        case MULTIPLY: 
        case DIVIDE: 
        case RESET: return {
            ...state,
            calculate:  payload
        } 
        
        default: return state;
        
    }
}
