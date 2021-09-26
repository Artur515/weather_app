import React from 'react';
import {styled} from '@mui/material/styles';
import {AppBar} from "@material-ui/core";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import {useDebounce} from "../../hooks/useDebounce/useDebounce";
import {getCityWeather} from "../../api";
import {Link} from "react-router-dom";
import {WEATHER_LIST} from "../../utils/constants";


const StyledInputBase = styled(InputBase)(({theme}) => ({
    borderBottom: '1px solid black',
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


const NavBar = ({value, setValue, setError, setSearchCity, setLoad}) => {
        const debouncedSearch = useDebounce(search, 1000)


        // console.log(value)
        function search(query) {
            getCityWeather(query)
                .then((response) => {
                    setSearchCity(response.data)
                    setLoad(false)
                })
                .catch((error) => {
                        setError(error)
                        setSearchCity(null)
                        setLoad(false)
                    }
                )
        }

        const handleChange = (event) => {
            setValue(event.target.value)
            debouncedSearch(event.target.value)
            setLoad(true)
        }


        return (<AppBar color='default' position='sticky' style={{marginBottom: 20}}>
                <Toolbar>
                    <Typography variant="h5" sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}>
                        <Link to={WEATHER_LIST}> Weather App </Link>
                    </Typography>
                    <StyledInputBase placeholder="Search city…" value={value} onChange={handleChange}/>
                </Toolbar>
            </AppBar>
        );
    }
;

export default NavBar;