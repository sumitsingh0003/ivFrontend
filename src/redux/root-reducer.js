import { combineReducers } from "redux";
import authReducers from "./authReducers";
import Prompts from "./promptsReducer";
import userReducers from "./userReducer";
import loadReducer from "./loadReducer";

const rootReducer = combineReducers({
    data: userReducers, prompts: Prompts, auth: authReducers, loading: loadReducer
});

export default rootReducer;