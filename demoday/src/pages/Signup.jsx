import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, Typography, Button, Box } from '@mui/material';

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      style={{ height: '90vh' }}
    >
      <Paper elevation={3} style={{ margin: 5, padding: 16, width: '90%', maxWidth: 600 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Interested in presenting?
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Who Can Participate?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Poster/demo submissions are open to both undergrads and graduate students in the Computer Science department. A poster/demo can be related to research or class projects. If it is based on a class project, please include the instructor as the mentor in the registration form. Ph.D. candidates are strongly encouraged to participate in this event and present their research.
        </Typography>
        <Box mt={2}>
          <Button variant="contained" color="primary" fullWidth onClick={() => navigate('/pages/signup/competitorSignup')}>
            Sign up as a competitor
          </Button>
        </Box>
      </Paper>

      <Paper elevation={3} style={{ margin: 16, padding: 16, width: '80%', maxWidth: 600 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Are you a Judge?
        </Typography>
        <Box mt={2}>
          <Button variant="contained" color="primary" fullWidth onClick={() => navigate('/pages/signup/judgeSignup')}>
            Sign up as a Judge
          </Button>
        </Box>
      </Paper>

      {/* Already signed up? section */}
      <Typography variant="body1" gutterBottom>
          Already signed up?
        </Typography>
        <Box display="flex" justifyContent="center" mt={2}>
          <Button variant="outlined" color="primary" style={{ margin: '0 8px' }}>
            Login as a Competitor
          </Button>
          <Button variant="outlined" color="primary" style={{ margin: '0 8px' }}>
            Login as a Judge
          </Button>
        </Box>
    </Box>
    </>
  );
};

export default SignUpPage;