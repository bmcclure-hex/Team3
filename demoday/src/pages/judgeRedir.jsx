import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ProjectStatus from "../components/projectStatus"

const Container = styled(Box)({
  display: "flex",
  justifyContent: "center",
});



function Judge() {


  return (
    <h1 style={{ textAlign: "center" }}>
      <Typography align="center" sx={{ my: 5 }} variant="h4">
        Scoring Portal
      </Typography>
      <Container>
        <Box sx={{ width: "70%" }}>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 12">
            <ProjectStatus></ProjectStatus>
            </Box>
 
          </Box>
        </Box>
      </Container>
    </h1>
  );
}

export default Judge;
