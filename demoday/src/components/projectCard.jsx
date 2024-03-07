import {Typography,Card,CardContent,CardMedia} from "@mui/material";
import React from "react";
import exampleImage from '../assets/placeholder.jpg';


const ProjectCard = () => {
  return (
    <Card style={{ position: "sticky", top: "0" }}>
      <CardContent>
        <Typography align="left" style={{ marginBottom: "16px" }} variant="h4">
          Project Title: Sample Project{" "}
        </Typography>
        <Typography style={{ marginBottom: "8x" }} variant="h5">
          Project Description:
        </Typography>
        <Typography style={{ marginBottom: "16px" }} variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        image={exampleImage}
        height="370"
        alt="Project Media"
      />
    </Card>
  );
};

export default ProjectCard;
