import React from "react";
import {
  Typography,
  Button,
  Box,
  Container,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

const Home = () => {
  const ContactCard = ({ name, title, email }) => {
    return (
      <Card
        elevation={3}
        sx={{
          margin: "24px auto",
          padding: "16px",
          borderRadius: "15px",
          maxWidth: 345,
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {email}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={`mailto:${email}`}>
            Email
          </Button>
        </CardActions>
      </Card>
    );
  };

  return (
    <>
      <Container maxWidth="lg" color="background" sx={{ pt: 5, pb: 20 }}>
        <Paper elevation={3} style={{ margin: "24px 0", padding: "24px" }}>
          <Typography variant="h4" pt={3} gutterBottom>
            Welcome to GSU Demo Day Spring 2024
          </Typography>
          <Typography variant="h5" gutterBottom>
            Date: Friday, April 12, 2024
          </Typography>
          <Typography variant="h5" gutterBottom>
            Time: 12 pm to 4 pm
          </Typography>
          <Typography variant="h5" gutterBottom>
            Location: Creative Media Industries Institute, 2nd Floor
          </Typography>

          <Typography paragraph>
            The Spring 2024 GSU Demo Day event provides an opportunity for
            Computer Science students (undergraduate and graduate) to present
            and demonstrate their latest research. Come see many exciting
            projects from various groups in the Computer Science department. The
            event is sponsored by the GSU University Career Services, Department
            of Computer Science, ACM Student Chapter and the Computer Science
            Club. This is a great opportunity to demonstrate your work and see
            what other students are up to. Snacks and drinks will be provided.
            The event will feature a poster/demo competition, with posters/demos
            being evaluated by faculty and invited guests from Industry. The
            best posters/demos will be recognized and awarded.
          </Typography>
          <Typography paragraph>
            This is a great opportunity to demonstrate your work and see what
            other students are up to. Snacks and drinks will be provided. The
            event will feature a poster/demo competition, with posters/demos
            being evaluated by faculty and invited guests from Industry. The
            best posters/demos will be recognized and awarded.
          </Typography>

          <Box
            sx={{
              backgroundColor: "#0071CE",
              color: "#FFFFFF",
              margin: 3,
              padding: 2,
            }}
          >
            <Typography variant="h5" gutterBottom>
              Who Can Participate?
            </Typography>
            <Typography paragraph>
              Poster and demo submissions are open to both undergraduate and
              graduate students in the Computer Science department. A poster or
              demo can be related to research or class projects. If it is based
              on a class project, please include the instructor as the mentor in
              the registration form. Ph.D. candidates are strongly encouraged to
              participate in this event and present their research.
            </Typography>
            <Typography variant="h5" gutterBottom>
              Registration
            </Typography>
            <Typography paragraph>
              Students who want to present their research or project at Demo Day
              will need to submit an abstract no longer than 200 words outlining
              the research/project they wish to present by March 15th.
              Undergraduate students will need to mark if they will be doing a
              live demo of their project alongside their poster. Link to the
              registration form can be found below:
            </Typography>
            <Button
              variant="contained"
              href="https://gsudemoday.cs.gsu.edu/"
              sx={{ backgroundColor: "#CC0000" }}
            >
              Sign Up as a Competitor
            </Button>
            <Typography variant="h5" gutterBottom mt={2}>
              Posters
            </Typography>
            <Typography paragraph>
              All participants will be required to create a research poster to
              display during Spring Demo Day. The Computer Science department
              will provide poster printing services to all participants who
              submit their posters by the poster submission deadline. Full
              details and templates for posters can be found on the participant
              instructions page.
            </Typography>
            <Typography variant="h5" gutterBottom>
              Deadlines
            </Typography>
            <Typography paragraph>
              Abstract Submission: March 22nd 
              Poster Print Request: April 10th
            </Typography>
          </Box>
        </Paper>
        <Typography
          variant="h5"
          fontWeight={"bold"}
          gutterBottom
          textAlign={"center"}
        >
          Contact
        </Typography>
        <Typography variant="h6" gutterBottom textAlign={"center"}>
          Questions? Please send an email to Jamie Hayes or Dr. Faris Hawamdeh
        </Typography>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={6} md={4}>
            <ContactCard
              name="Jamie Hayes"
              title="Academic Program Coordinator"
              email="jhayes14@gsu.edu"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ContactCard
              name="Dr. Faris Hawamdeh"
              title="Academic Professional"
              email="fhawamdeh1@gsu.edu"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
