import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY

const baseUrl = `https://api.openweathermap.org/data/2.5/`


export const getCityWeather = (queryCity) => {
    return axios.get(baseUrl + `weather?q=${queryCity}&units=metric&appid=${API_KEY}`)
}

export const getWeatherWithId = (id) => {
    return axios.get(baseUrl + `weather?id=${id}&units=metric&appid=${API_KEY}`)
}


export const getFullInfo = (id) => {
    return axios.get(baseUrl + `forecast?id=${id}&units=metric&appid=${API_KEY}`)
}

// export const getOneCallApiWeather = (lat, lon) => {
//     return axios.get(baseUrl + `onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
// }
