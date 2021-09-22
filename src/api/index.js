import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY

const baseUrl = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${API_KEY}`


export const getWeather = () => {
    return axios.get(baseUrl)
}