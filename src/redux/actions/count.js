import { INCREMENT, DECREMENT, ADD, SUBTRACT, MULTIPLY, DIVIDE, RESET } from "../constants"

export const incNum = (inc) => {
    return {
        type: INCREMENT,
        payload: inc + 1
    }
}

export const decNum = (dec) => {
    return {
        type: DECREMENT,
        payload: dec - 1
    }
}

export const add = (a, b) => {
    return {
        type: ADD,
        payload: a + b
    }
}

export const sub = (a, b) => {
    return {
        type: SUBTRACT,
        payload: a - b
    }
}

export const multiple = (a, b) => {
    return {
        type: MULTIPLY,
        payload: a * b
    }
}

export const divide = (a, b) => {
    return {
        type: DIVIDE,
        payload: a / b
    }


}

export const reset = () => {
    return {
        type: RESET,
        payload: ''
    }
}

