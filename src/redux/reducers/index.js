import {count} from "./count";
import { options } from "./options";
import  namesReducer from "./names";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    count,
    options,
    namesReducer,
})

export default rootReducer;