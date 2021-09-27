import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {useDispatch, useSelector} from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import Box from "@mui/material/Box";
import {getError} from "../../redux/toolKitSlice";
import {useHistory} from "react-router-dom";
import {WEATHER_LIST} from "../../utils/constants";

const Error = () => {
    const errorPage = useSelector(state => state.toolkitReduce.error)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleDeleteError = () => {
        dispatch(getError(null))
        history.push(WEATHER_LIST)
    }

    return (
        <Card sx={{maxWidth: 550, marginTop: 5}}>
            <CardContent>
                <Typography sx={{fontSize: 14, color: 'red'}} gutterBottom>
                    {errorPage.message}
                </Typography>
                <Typography variant="h5" sx={{color: 'red'}}>
                    {errorPage.name}
                </Typography>
                <Typography variant="body2">
                    {errorPage.stack}
                </Typography>
            </CardContent>
            <Box  className='cursor'  sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', pl: 1, pb: 3, pt: 1}}>
                <CloseIcon onClick={handleDeleteError}/>
            </Box>
        </Card>
    );
};

export default Error;