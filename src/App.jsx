import AppRouter from "./components/appRouter/AppRouter";
import NavBar from "./components/navBar/NavBar";
import {Container} from "@mui/material";
import Alert from '@mui/material/Alert';
import {useEffect, useState} from "react";
import WeatherCard from "./components/weatherCard/WeatherCard";
import Loader from "./helpers/loader/Loader";
import {getListOfCity} from "./reducers/weatherReducer";
import {useDispatch} from "react-redux";


const App = () => {
    // or you can also make a call on click
    const [value, setValue] = useState('')
    const [searchCity, setSearchCity] = useState(null)
    const [error, setError] = useState(null)
    const [load, setLoad] = useState(false)
    const listCity = JSON.parse(localStorage.getItem('cityList'))
    const dispatch = useDispatch()


    useEffect(() => {
        if (listCity) {
            dispatch(getListOfCity(listCity))
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
