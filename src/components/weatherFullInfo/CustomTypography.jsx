import React from 'react';
import Box from "@mui/material/Box";

const CustomTypography = ({title, text, meaning}) => {
    return (
        <Box color="text.secondary" sx={{margin: '15px'}}>
            <div>{title}</div>
            <div>{text} {meaning}</div>
        </Box>
    );
};

export default CustomTypography;