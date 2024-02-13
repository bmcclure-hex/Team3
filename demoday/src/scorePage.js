import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import logo from './Assets/istockphoto-1147544807-612x612.jpg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Container = styled('h1')({
    display: 'flex',
    justifyContent: 'center',
  });
  

function scorePage(){
    return(
        <Container>
     <Grid container spacing={2}>
      {/* First grid */}
      <Grid item xs={6}>
      <h4>Project Name:</h4>
      <p>Sample Project</p>
      <h4>Project Description:</h4>
      <p>This project aims to develop a new application for managing tasks and deadlines.</p>

      <h4>Project Classification:</h4>
      <p>Software Development</p>

      <h4>Project Type:</h4>
      <p>Web Application</p>
      <Grid item xs={6}>
      <h4>Score:</h4>
      <TextField />
      </Grid>
      
      </Grid>
      {/* Second grid */}
      <Grid item xs={6}>
        <img src={logo} alt="Logo" />
    
      </Grid>
    
      {/* Third grid */}
      <Grid item xs={12}>
       <button>Submit</button>
      </Grid>
    </Grid>
      </Container>
    );
}
export default scorePage;
