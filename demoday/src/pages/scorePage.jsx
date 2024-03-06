import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import React from 'react';
import Rubric from '../components/rubric'
import Project from '../components/projectCard'
import { Button, Typography } from '@mui/material';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// const genLabel =styled('h4')({
//   textAlign: 'center',

// });

// const Container = styled(Grid)({
//     display: 'flex',
//     justifyContent: 'center',
//     margin:20
//   });
  

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

//   {/*Title*/}
//   return(
//     <h1 style={{ textAlign: 'center' }}>Evaluation
//   <Container>
 
//    <Grid container spacing={2}>
//     {/* First grid */}
//     <Grid item xs={6}>
//     <h4>Project Name:</h4>
//     <p>Sample Project</p>
    
//     <h4>Project Description:</h4>
//     <p>This project aims to develop a new application for managing tasks and deadlines.</p>

//     <h4>Project Classification:</h4>
//     <p>Software Development</p>

//     <h4>Project Type:</h4>
//     <p>Web Application</p>

//     <Grid item xs={6}>
//     <h4>Score:</h4>
//     </Grid>
    
//     <Grid item xs={6}><TextField /></Grid>
    
//     </Grid>
//     {/* Second grid */}
//     <Grid item xs={6}>
//       <img src="/Assets/placeholder.jpg" alt="Logo" />
  
//     </Grid>
  
//     {/* Third grid */}
//     <Grid item xs={12}>
//      <button>Submit</button>
//     </Grid>
//   </Grid>
//   </Container>
// </h1>
//   );