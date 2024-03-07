import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Menu, MenuItem, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';

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

  return (
    <AppBar position="static">
      {/* First row for logo and title */}
      <Toolbar variant="dense" style={{ minHeight: '120px' }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
              <img src={logo} alt="logo" style={{ height: '160px', paddingTop: '30px'}} />
            </Box>
          </Grid>
          <Grid item xs>
            <Typography variant="h2" component="div" sx={{ textAlign: 'center' }}>
              GSU Computer Science Demo Day
            </Typography>
          </Grid>
          <Grid item xs={2} /> {/* This is to balance the grid layout */}
        </Grid>
      </Toolbar >
      {/* Second row for navigation buttons and login */}
      <AppBar position="sticky" color="primary" sx={{ top: 'auto' }}>
      <Toolbar variant="dense" component="nav" style={{ justifyContent: 'center' }} >
        <Button color="inherit" sx={{ fontWeight: 'bold', fontSize: 'large' }} onClick={() => navigate('/')}>Home</Button>
        <Button color="inherit" sx={{ fontWeight: 'bold', fontSize: 'large' }} onClick={() => navigate('/agenda')}>Agenda</Button>
        <Button color="inherit" sx={{ fontWeight: 'bold', fontSize: 'large' }} onClick={() => navigate('/Past Events')}>Past Events</Button>
        <Button
          color="inherit"
          sx={{ fontWeight: 'bold', fontSize: 'large' }}
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
          <MenuItem onClick={() => navigate('/pages/login/competitorLogin')}>Login as a Competitor</MenuItem>
          <MenuItem onClick={() => navigate('/pages/login/judgeLogin')}>Login as a Judge</MenuItem>
        </Menu>
        <Button color="inherit" sx={{ fontWeight: 'bold', fontSize: 'large'}} onClick={() => navigate('/pages/Signup')}>Sign Up</Button>
      </Toolbar>
      </AppBar>
    </AppBar>
  );
};

export default Header;
