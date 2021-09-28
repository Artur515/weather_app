import React from 'react';
import {useSelector} from "react-redux";
import Loader from "../../helpers/loader/Loader";

import Box from "@mui/material/Box";
import TemperatureGraph from "../temperatureGraph/TemperatureGraph";
import CardContent from "@mui/material/CardContent";
import CustomTypography from "./CustomTypography";
import {countingFunction} from "../../helpers/counting/counting";


const WeatherFullInfo = () => {
    const fullWeatherInfo = useSelector(state => state.toolkitReduce.fullWeatherInfo)

    return (<>
            {fullWeatherInfo !== null ?
                <Box>
                    <CardContent sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                        <CustomTypography
                            title={'Sunrise'}
                            text={countingFunction(fullWeatherInfo.city.sunrise, fullWeatherInfo.city.timezone)}
                            meaning={'am'}
                        />
                        <CustomTypography
                            title={'Sunset'}
                            text={countingFunction(fullWeatherInfo.city.sunset, fullWeatherInfo.city.timezone)}
                            meaning={'pm'}/>
                    </CardContent>
                    <div style={{display: "flex", overflowX: 'scroll', maxWidth: '1000px', minHeight: '200px'}}>
                        {fullWeatherInfo.list.map((hour) => {
                            return <TemperatureGraph key={hour.dt} hour={hour}/>
                        })}
                    </div>
                </Box>
                : <Loader props={'Loading'}/>
            }
        </>
    );
};

export default WeatherFullInfo;