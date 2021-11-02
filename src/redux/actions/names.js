import { SEARCHNAMES } from "../constants/index"

export const searchName = (relatedNames) => {
    return {
        type: SEARCHNAMES,
        payload: relatedNames
    }
}