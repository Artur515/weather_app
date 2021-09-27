import {combineReducers, configureStore} from "@reduxjs/toolkit";
import toolkitReducer from "../toolKitSlice";


const rootReducer = combineReducers({
    toolkitReduce: toolkitReducer
})


export const store = configureStore({
    reducer: rootReducer
})