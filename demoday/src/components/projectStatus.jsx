import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProjectStatus = () => {
  //Used to dynamically change project title for each instance
  const [title, changeTitle] = useState("Project NULL");

  //dynamically change review button based on completion of review
  const [reviewCompleted, setReviewCompleted] = useState(false);

  //redirects users
  const navigate = useNavigate();

  const scorePage = () => {
    console.log("function called: scorepage");

    navigate("/scorePage");
  };

  //logic to disable review button once revies are completed
  const reviewButtonBehavior = () => {
    console.log("function called: review bttn");
    setReviewCompleted(true);
  };

  const PaperStat = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }));

  return (
    <div>
      <Box>
        <PaperStat>
          <Typography>{title}</Typography>
          <Typography style={{ color: reviewCompleted ? 'green' : 'red' }}>
            {reviewCompleted ? "REVIEW COMPLETED" : "NOT SUBMITTED"}
          </Typography>
          <Button size="small" onClick={scorePage} disabled={reviewCompleted ? true : false} >
            Review
          </Button>
          
       
        </PaperStat>
      </Box>
    </div>
  );
};

export default ProjectStatus;
