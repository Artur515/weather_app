import AppRouter from "./components/appRouter/AppRouter";
import NavBar from "./components/navBar/NavBar";
import {Container} from "@mui/material";
import Alert from '@mui/material/Alert';
import {useEffect, useState} from "react";
import WeatherCard from "./components/weatherCard/WeatherCard";
import Loader from "./helpers/loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {addToListOfCity} from "./redux/toolKitSlice";


const App = () => {
    // or you can also make a call on click & redux
    const [value, setValue] = useState('')
    const [searchCity, setSearchCity] = useState(null)
    const [error, setError] = useState(null)
    const [load, setLoad] = useState(false)

    const cityList = useSelector(state => state.toolkitReduce.listOfCities)
    const listCity = JSON.parse(localStorage.getItem('cityList'))
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('cityList', JSON.stringify(cityList))
    }, [cityList])


    useEffect(() => {
        if (listCity) {
            dispatch(addToListOfCity(listCity))
        }
        // eslint-disable-next-line
    }, [])


    useEffect(() => {
        setSearchCity(null)
    }, [error])


    return (
        <div>
            <NavBar value={value} setValue={setValue} setSearchCity={setSearchCity} setError={setError}
                    setLoad={setLoad}/>
            <Container sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {load && <Loader props={'Search'}/>}
                {value === '' ? <AppRouter/> :
                    <div>{searchCity === null ? <Alert severity="error">City not found</Alert> :
                        <WeatherCard setValue={setValue} searchCity={searchCity} setSearchCity={setSearchCity}/>}
                    </div>}
            </Container>
        </div>
    );
}

export default App;
