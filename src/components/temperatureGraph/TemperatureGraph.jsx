import React from 'react';
import Card from "@mui/material/Card";
import {countingFunction} from "../../helpers/counting/counting";
import {useSelector} from "react-redux";


const TemperatureGraph = ({hour}) => {
    const fullWeatherInfo = useSelector(state => state.toolkitReduce.fullWeatherInfo)

    return (
        <Card sx={{minWidth: 80,height:100,textAlign:'center'}}>
            <img style={{width: '30px'}} src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                 alt={hour.weather[0].description}/>
            <p>{countingFunction(hour.dt,fullWeatherInfo.city.timezone)}</p>
            <p>{hour.main.temp} Сº</p>
        </Card>
    );
};

export default TemperatureGraph;