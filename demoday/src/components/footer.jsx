import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
    return (
        <Box component="footer" sx={{ 
            marginTop: '20px',
            textAlign: 'center', 
            padding: '10px 0', 
            left: 0, 
            bottom: 0, 
            width: '100%' 
        }}>
            <Typography component="p" sx={{ margin: 0 }}>© 2024 My Website. All rights reserved.</Typography>
        </Box>
    );
}

export default Footer;
