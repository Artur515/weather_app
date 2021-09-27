import React, {useState} from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch, useSelector} from "react-redux";
import {addToListOfCity, removeCity} from "../../redux/toolKitSlice";
import {Link} from "react-router-dom";


const WeatherCard = ({searchCity, setSearchCity, setValue, city}) => {
    const [watchCompareCity, setWatchCompareCity] = useState(false)
    const cityList = useSelector(state => state.toolkitReduce.listOfCities)
    const dispatch = useDispatch()


    const handleAddToList = () => {
        const compareCity = cityList.find(cityList => cityList.id === searchCity.id)
        if (compareCity) {
            setWatchCompareCity(true)
        } else {
            dispatch(addToListOfCity([searchCity]))
            setValue('')
            setWatchCompareCity(false)
            setSearchCity(null)
        }
    }


    const handleRemoveCity = (city) => {
        dispatch(removeCity(city.id))
    }


    return (
        <Card sx={{width: 300, margin: '20px'}}>
            <CardContent>

                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', pl: 1, pb: 1}}>
                    <Link to={`/weather/${city?.id}`}>
                        <img
                            src={searchCity ?
                                `http://openweathermap.org/img/wn/${searchCity?.weather[0].icon}@2x.png` :
                                `http://openweathermap.org/img/wn/${city?.weather[0].icon}@2x.png`}
                            alt={searchCity?.name || city?.name}/>
                    </Link>
                    <Typography variant="h5">
                        {searchCity?.name || city?.name || 'Name'}
                    </Typography>
                </Box>

                <Typography variant="h6">
                    temp {parseInt(searchCity?.main.temp) || parseInt(city?.main.temp)} Сº
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
                {city && <DeleteIcon className='cursor' onClick={() => handleRemoveCity(city)}/>}
            </Box>
        </Card>
    )
}

export default WeatherCard;