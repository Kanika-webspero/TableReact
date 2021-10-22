import { INCREMENT, DECREMENT } from "../constants"

export const incNum = (inc) => {
    return {
        type: INCREMENT,
        payload: inc
    }
}

export const decNum = (dec) => {
    return {
        type: DECREMENT,
        payload: dec
    }
}