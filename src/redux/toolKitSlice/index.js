import {createSlice} from "@reduxjs/toolkit";

const toolKitSlice = createSlice({
    name: 'weather',
    initialState: {
        listOfCities: [],
        weatherOfCity: null,
        fullWeatherInfo: null,
        error: null
    },
    reducers: {

        addToListOfCity(state, action) {
            state.listOfCities.push(...action.payload)
        },
        removeCity(state, action) {
            state.listOfCities = state.listOfCities.filter(city => city.id !== action.payload)
        },
        setWeatherOfCity(state, action) {
            state.weatherOfCity = action.payload
        },
        setFullWeatherInfo(state, action) {
            state.fullWeatherInfo = action.payload
        },
        getError(state, action) {
            state.error = action.payload
        }
    }
})

export default toolKitSlice.reducer
export const {
    addToListOfCity,
    removeCity,
    setWeatherOfCity,
    setFullWeatherInfo,
    getError
} = toolKitSlice.actions