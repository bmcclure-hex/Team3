import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem  } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [loginAnchorEl, setLoginAnchorEl] = useState(null);
  const isLoginMenuOpen = Boolean(loginAnchorEl);

  const handleLoginMenuClick = (event) => {
    setLoginAnchorEl(event.currentTarget);
  };

  const handleLoginMenuClose = () => {
    setLoginAnchorEl(null);
  };

  const handleLogin = (role) => {
    // Navigate to the corresponding login page based on role
    navigate(`/pages/login/${role}`);
    handleLoginMenuClose();
  };

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
        {/* Login dropdown menu */}
        <Button
          color="inherit"
          aria-controls="login-menu"
          aria-haspopup="true"
          onClick={handleLoginMenuClick}
        >
          Login
        </Button>
        <Menu
          id="login-menu"
          anchorEl={loginAnchorEl}
          keepMounted
          open={isLoginMenuOpen}
          onClose={handleLoginMenuClose}
        >
          <MenuItem onClick={() => handleLogin('competitor')}>Login as a Competitor</MenuItem>
          <MenuItem onClick={() => handleLogin('judge')}>Login as a Judge</MenuItem>
        </Menu>
        <Button color="inherit" onClick={() => navigate('/pages/Signup')}>Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
