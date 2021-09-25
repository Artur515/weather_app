import React, {useEffect} from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch, useSelector} from "react-redux";
import {getListOfCity} from "../../reducers/weatherReducer";


const WeatherCard = ({searchCity, city}) => {
    const cityList = useSelector(state => state.weather.listOfCities)
    const dispatch = useDispatch()


    const handleAddToList = () => {
        dispatch(getListOfCity([searchCity]))
    }


    useEffect(() => {
        localStorage.setItem('cityList', JSON.stringify(cityList))
    }, [handleAddToList])


    return (
        <Card style={{width: 300}}>
            <CardContent>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', pl: 1, pb: 1}}>
                    <img
                        src={searchCity ? ` http://openweathermap.org/img/wn/${searchCity?.weather[0].icon}@2x.png` : ''}
                        alt={searchCity?.weather[0].description}/>
                    <Typography variant="h5">
                        {searchCity?.name || city?.name || 'Name'}
                    </Typography>
                </Box>
                <Typography variant="h6">
                    temp {searchCity?.main.temp || city?.temp} Сº
                </Typography>
                <Typography variant="h6">
                    wet {searchCity?.main.humidity}%
                </Typography>
                <Typography variant="body1">
                    wind {searchCity?.wind.speed} km/h
                </Typography>
            </CardContent>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', pl: 1, pb: 3, pt: 1}}>
                {searchCity &&
                <Button variant='outlined' color='inherit'
                        onClick={() => handleAddToList()}>Add to my
                    list</Button>}
                {city && <DeleteIcon/>}
            </Box>
        </Card>
    )
}

export default WeatherCard;