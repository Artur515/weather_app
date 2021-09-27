import React from 'react';
import Card from "@mui/material/Card";
import {countingFunction} from "../../helpers/counting/counting";

const TemperatureGraph = ({hour}) => {
    const {temp, dt, weather} = hour
    return (
        <Card sx={{minWidth: 80,height:100,textAlign:'center'}}>
            <img style={{width: '30px'}} src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                 alt={weather[0].description}/>
            <p>{countingFunction(dt)}</p>
            <p>{temp} Сº</p>
        </Card>
    );
};

export default TemperatureGraph;