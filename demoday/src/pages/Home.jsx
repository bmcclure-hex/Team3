import React from 'react';
import { Typography, Button, Box, Container } from '@mui/material';

const Home = () => {
  return (
    <>

      <Container sx={{ pt: 5, pb: 20 }}>
        <Typography variant="h4" pt={3} gutterBottom>Welcome to GSU Demo Day Spring 2024</Typography>
        <Typography variant="h5" gutterBottom>Date: Friday, April 12, 2024</Typography>
        <Typography variant="h5" gutterBottom>Location: Creative Media Industries Institute | 25 Park Place, 2nd Floor</Typography>

        <Typography paragraph>
          The Spring 2024 GSU Demo Day event provides an opportunity for Computer Science students (undergraduate and graduate) to present and demonstrate their latest research. Come see many exciting projects from various groups in the Computer Science department. The event is sponsored by the GSU University Career Services, Department of Computer Science, ACM Student Chapter and the Computer Science Club.
        </Typography>
        <Typography paragraph>
          This is a great opportunity to demonstrate your work and see what other students are up to. Snacks and drinks will be provided. The event will feature a poster/demo competition, with posters/demos being evaluated by faculty and invited guests from Industry. The best posters/demos will be recognized and awarded.
        </Typography>

        <Box sx={{ backgroundColor: '#0071CE', color: '#FFFFFF', margin: 3, padding: 2 }}>
          <Typography variant="h5" gutterBottom>Who Can Participate?</Typography>
          <Typography paragraph>
            Poster/demo submissions are open to both undergrads and graduate students in the Computer Science department. A poster/demo can be related to research or class projects. If it is based on a class project, please include the instructor as the mentor in the registration form. Ph.D. candidates are strongly encouraged to participate in this event and present their research.
          </Typography>
          <Button variant="contained" href="https://gsudemoday.cs.gsu.edu/" sx={{ backgroundColor: '#CC0000' }}>Sign Up as a Competitor</Button>
        </Box>
      </Container>

      
    </>
  );
};

export default Home;
