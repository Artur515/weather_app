import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {weatherReducer} from "../reducers/weatherReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    weather: weatherReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))