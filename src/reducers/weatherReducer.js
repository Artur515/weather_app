import {ERROR, LIST_OF_CITIES, REMOVE_CITY} from "../actions/action";


const initState = {
    listOfCities: [],
    weather: null,
    error: null
}


export const weatherReducer = (state = initState, action) => {
    switch (action.type) {
        case LIST_OF_CITIES:
            return {...state, listOfCities: [...state.listOfCities, ...action.payload]}
        case REMOVE_CITY:
            return {...state, listOfCities: state.listOfCities.filter(city => city.id !== action.payload)}
        case ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}


export const getListOfCity = (payload) => ({type: LIST_OF_CITIES, payload})
export const removeCity = (payload) => ({type: REMOVE_CITY, payload})
