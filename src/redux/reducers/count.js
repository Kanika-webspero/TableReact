import { INCREMENT, DECREMENT } from "../constants";

const initialState = {count: 0};

export const count = (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case INCREMENT: return {
            ...state,
            count: payload + 1
        } 
        case DECREMENT: return {
            ...state,
            count: payload - 1
        } ;
        default: return state;
    }
}

// export default count;