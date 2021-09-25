import {WEATHER_CITY_INFO, WEATHER_LIST} from "../utils/constants";
import WeatherCardInfo from "../components/weatherCardInfo/WeatherCardInfo";
import WeatherCardList from "../components/weatherCardList/WeatherCardList";

export const routes = [
    {
        path: WEATHER_LIST,
        Component: WeatherCardList
    }, {
        path: WEATHER_CITY_INFO,
        Component: WeatherCardInfo
    }
]
