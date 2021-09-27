import React from 'react';
import {useSelector} from "react-redux";
import Loader from "../../helpers/loader/Loader";

import Box from "@mui/material/Box";
import TemperatureGraph from "../temperatureGraph/TemperatureGraph";


const WeatherFullInfo = () => {
    const fullWeatherInfo = useSelector(state => state.toolkitReduce.fullWeatherInfo)

    return (<>
            {fullWeatherInfo !== null ?
                <Box>
                    {/*<CardContent sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>*/}
                    {/*    <CustomTypography*/}
                    {/*        title={'Sunrise'}*/}
                    {/*        text={countingFunction(fullWeatherInfo.current.sunrise, weatherOfCity.timezone)}*/}
                    {/*        meaning={'am'}*/}
                    {/*    />*/}
                    {/*    <CustomTypography*/}
                    {/*        title={'Sunset'}*/}
                    {/*        text={countingFunction(fullWeatherInfo.current.sunset, weatherOfCity.timezone)}*/}
                    {/*        meaning={'pm'}/>*/}
                    {/*</CardContent>*/}
                    <div style={{display: "flex", overflowX: 'scroll', maxWidth: '1000px', minHeight: '200px'}}>
                        {fullWeatherInfo.map((hour) => {
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