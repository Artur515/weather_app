import React from 'react';
import {Container} from "@mui/material";
import style from './style.module.css'
import {useDispatch, useSelector} from "react-redux";
import WeatherCard from "../weatherCard/WeatherCard";

const WeatherCardList = () => {
    const cityList = useSelector(state => state.weather.listOfCities)
    const dispatch = useDispatch()


    return (
        <Container className={style.card_content}>
            {cityList ? <div>No list</div> : <>{cityList.map((city) => {
                return <WeatherCard key={city?.id} city={city}/>
            })}</>}
        </Container>
    );
};

export default WeatherCardList;