import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo and title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate('/')}>
        GSU Demo Day Spring 2024
        </Typography>

        {/* Navigation Buttons */}
      
        
          <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
          <Button color="inherit" onClick={() => navigate('/agenda')}>Agenda</Button>
          <Button color="inherit" onClick={() => navigate('/Past Events')}>Past Events</Button>
          <Button color="inherit" onClick={() => navigate('/pages/login')}>Login</Button>
          <Button color="inherit" onClick={() => navigate('/pages/signup')}>Signup</Button>
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;
