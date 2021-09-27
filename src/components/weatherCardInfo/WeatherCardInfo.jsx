import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getOneCallApiWeather, getWeatherWithId} from "../../api";
import {setFullWeatherInfo, setWeatherOfCity, getError, setUpdateCurrentCity} from "../../redux/toolKitSlice";
import Loader from "../../helpers/loader/Loader";
import Button from "@mui/material/Button";
import Error from "../error/Error";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import CustomTypography from "../weatherFullInfo/CustomTypography";
import WeatherFullInfo from "../weatherFullInfo/WeatherFullInfo";
import UpdateIcon from '@mui/icons-material/Update';

const WeatherCardInfo = () => {
    const [load, setLoad] = useState(false)
    const params = useParams()
    const dispatch = useDispatch()
    const weatherOfCity = useSelector(state => state.toolkitReduce.weatherOfCity)
    const fullWeatherInfo = useSelector(state => state.toolkitReduce.fullWeatherInfo)
    const updatedWeather = useSelector(state => state.toolkitReduce.updateCurrentCity)
    const errorPage = useSelector(state => state.toolkitReduce.error)


    useEffect(() => {
        setLoad(true)
        getWeatherWithId(params.id)
            .then(response => dispatch(setWeatherOfCity(response.data)))
            .catch(error => {
                dispatch(getError(error))
                dispatch(setWeatherOfCity(null))
            }).finally(() => setLoad(false))

        // eslint-disable-next-line
    }, [params.id])


    const handleUpdate = () => {
        setLoad(true)
        const {lon, lat} = weatherOfCity.coord
        getOneCallApiWeather(lon, lat)
            .then(response => dispatch(setUpdateCurrentCity(response.data)))
            .catch(error => {
                dispatch(getError(error))
                dispatch(setWeatherOfCity(null))
            }).finally(() => setLoad(false))
    }


    const handleFullInfo = () => {
        const {lon, lat} = weatherOfCity.coord
        getOneCallApiWeather(lon, lat)
            .then(response => {
                dispatch(setUpdateCurrentCity(response.data))
                dispatch(setFullWeatherInfo(response.data.hourly))
            })
            .catch(error => {
                dispatch(getError(error))
                dispatch(setWeatherOfCity(null))
            })
    }


    return (
        <>
            {load && <Loader props={'Loading'}/>}
            {errorPage && <Error/>}
            {weatherOfCity === null ? <Loader props={'Loading'}/> :
                <Card sx={{padding: '15px'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                        <CardMedia
                            component="img" sx={{width: 150}} src={updatedWeather ?
                            `http://openweathermap.org/img/wn/${updatedWeather?.current.weather[0].icon}@2x.png` :
                            `http://openweathermap.org/img/wn/${weatherOfCity?.weather[0].icon}@2x.png`}
                            alt={weatherOfCity.name || weatherOfCity.current.weather[0].description}/>
                        <Typography gutterBottom variant="h5" component="div">
                            {weatherOfCity.name}
                        </Typography>
                        <UpdateIcon className='cursor' onClick={handleUpdate}/>
                    </Box>
                    <CardContent sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                        <CustomTypography title={'Temperature'}
                                          text={parseInt(updatedWeather ? updatedWeather?.current.temp :
                                              weatherOfCity.main?.temp)} meaning={' Сº'}/>
                        <CustomTypography title={'Wet'}
                                          text={updatedWeather ? updatedWeather.current?.humidity :
                                              weatherOfCity.main?.humidity} meaning={'%'}/>
                        <CustomTypography title={'Wind'}
                                          text={updatedWeather ? updatedWeather.current.wind_speed :
                                              weatherOfCity.wind?.speed} meaning={'km/h'}/>
                        <CustomTypography title={'Clouds'}
                                          text={updatedWeather ? updatedWeather.current?.clouds :
                                              weatherOfCity.clouds?.all} meaning={'%'}/>
                    </CardContent>
                    <CardContent>
                        {fullWeatherInfo && <WeatherFullInfo/>}
                    </CardContent>
                    <CardActions>
                        {fullWeatherInfo ? '' : <Button className='' onClick={handleFullInfo}>More</Button>}
                    </CardActions>
                </Card>
            }
        </>
    );
};

export default WeatherCardInfo;