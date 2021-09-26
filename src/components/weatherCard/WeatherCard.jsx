import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch, useSelector} from "react-redux";
import {getListOfCity, removeCity} from "../../reducers/weatherReducer";


const WeatherCard = ({searchCity, setSearchCity, setValue, city}) => {
    const [watchCompareCity, setWatchCompareCity] = useState(false)
    const cityList = useSelector(state => state.weather.listOfCities)
    const dispatch = useDispatch()


    const handleAddToList = () => {
        const compareCity = cityList.find(cityList => cityList.id === searchCity.id)
        if (compareCity) {
            setWatchCompareCity(true)
        } else {
            dispatch(getListOfCity([searchCity]))
            setSearchCity(null)
            setValue('')
            setWatchCompareCity(false)
        }
    }


    const handleRemoveCity = (city) => {
        // console.log(city.id)
        dispatch(removeCity(city.id))
    }

    useEffect(() => {
        localStorage.setItem('cityList', JSON.stringify(cityList))
        // eslint-disable-next-line
    }, [handleAddToList])


    return (
        <Card sx={{width: 300, margin: '20px'}}>
            <CardContent>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', pl: 1, pb: 1}}>
                    <img
                        src={searchCity ?
                            `http://openweathermap.org/img/wn/${searchCity?.weather[0].icon}@2x.png` :
                            `http://openweathermap.org/img/wn/${city?.weather[0].icon}@2x.png`}
                        alt={searchCity?.name || city?.name}/>
                    <Typography variant="h5">
                        {searchCity?.name || city?.name || 'Name'}
                    </Typography>
                </Box>
                <Typography variant="h6">
                    temp {searchCity?.main.temp || city?.main.temp} Сº
                </Typography>
                <Typography variant="h6">
                    wet {searchCity?.main.humidity || city?.main.humidity} %
                </Typography>
                <Typography variant="body1">
                    wind {searchCity?.wind.speed || city?.wind.speed} km/h
                </Typography>
            </CardContent>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', pl: 1, pb: 3, pt: 1}}>
                {searchCity &&
                <Button variant='outlined' color='inherit' disabled={watchCompareCity}
                        onClick={() => handleAddToList()}>
                    {watchCompareCity ? 'This city is on your list' : 'Add to my list'}
                </Button>}
                {city && <DeleteIcon onClick={() => handleRemoveCity(city)}/>}
            </Box>
        </Card>
    )
}

export default WeatherCard;