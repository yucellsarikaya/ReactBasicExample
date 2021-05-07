import { combineReducers } from "redux" // reduxlari bir araya etir
import counterReducer from "./counterReducer"
const reducers = combineReducers({
    counterReducer
});
export default reducers;