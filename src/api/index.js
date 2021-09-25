import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY

const baseUrl = `https://api.openweathermap.org/data/2.5/`


export const getCityWeather = (queryCity) => {
    return axios.get(baseUrl + `weather?q=${queryCity}&units=metric&appid=${API_KEY}`)
}


// export const weatherCityAxios = (queryCity) => async dispatch => {
//     const res = await getCityWeather(queryCity)
//     dispatch({type: CITY_WEATHER, payload: res.data})
// }


//
// export const takeCustomers = () => {
//     return dispatch => {
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then(responce => responce.data)
//             //здесь actionCreator
//             .then(data => dispatch(getAllUsers(data)))
//     }
// }