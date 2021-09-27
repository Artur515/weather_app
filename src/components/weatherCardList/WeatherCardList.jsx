import React from 'react';
import {useSelector} from "react-redux";
import WeatherCard from "../weatherCard/WeatherCard";


const WeatherCardList = () => {
    const cityList = useSelector(state => state.toolkitReduce.listOfCities)

    // console.log(cityList)

    return (
        <>
            {cityList.length <= 0 ?
                <h2>No city list</h2> : <>{cityList.map((city) => {
                    return <WeatherCard key={city?.id} city={city}/>
                })}</>}
        </>
    );
};

export default WeatherCardList;