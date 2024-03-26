import React, { useState } from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';

const CompetitorSignup = () => {
  const [judgeInfo, setJudgeInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJudgeInfo({
      ...judgeInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    // Ensure password and confirmPassword match before proceeding
    if (judgeInfo.password !== judgeInfo.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Submission', judgeInfo);
    // Proceed with actual submission (API call or form processing)
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '60vh' }}
    >
      <Typography pb={3} pl={2} variant="h4" gutterBottom>
        Competitor Registration
      </Typography>
      
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ '& .MuiTextField-root': { m: 1 }, width: '300px' }}
        noValidate
        autoComplete="off"
      >
        <TextField
          fullWidth
          label="First Name"
          name="firstName"
          variant="outlined"
          value={judgeInfo.firstName}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Last Name"
          name="lastName"
          variant="outlined"
          value={judgeInfo.lastName}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="GSU Email"
          name="email"
          type="email"
          variant="outlined"
          value={judgeInfo.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          value={judgeInfo.password}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Retype Password"
          name="confirmPassword"
          type="password"
          variant="outlined"
          value={judgeInfo.confirmPassword}
          onChange={handleChange}
        />
        <Box ml={2}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          
        >
          Submit
        </Button>
        </Box>
        
      </Box>
    </Box>
  );
};

export default CompetitorSignup;
