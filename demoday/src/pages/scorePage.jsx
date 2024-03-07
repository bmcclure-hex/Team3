import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import React from 'react';
import Rubric from '../components/rubric'
import Project from '../components/projectCard'
import { Button, Typography } from '@mui/material';

  

function scorePage(){
   return(
    <div style={{
        margin: '20px 0px 0px 20px'
    }}>
    <Typography align='center' sx={{my:5}} variant='h4'>Project Scoring Rubric</Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 5 }}>
          <Rubric />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
          <Project />
      </Grid>
    </Grid>
    <Button>Submit</Button>
  </div>

 
    
   );

   
}
export default scorePage;

