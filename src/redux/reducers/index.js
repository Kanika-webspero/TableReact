import {count} from "./count";
import { options } from "./options";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    count,
    options,
})

export default rootReducer;