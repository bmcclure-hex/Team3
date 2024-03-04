import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import statsComp from "../components/statsComp";
import statsIncomp from "../components/statsIncomp";
import { useNavigate } from "react-router-dom";

const Container = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

const headLabel = styled("h1")({
  textAlign: "center",
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.secondary,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

function Judge() {
  const navigate = useNavigate();

  const scorePage = () => {
    navigate("/score");
  };

  return (
    <h1 style={{ textAlign: "center" }}>
      {" "}
      Judge View
      <Container>
        <Box sx={{ width: "50%" }}>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 10">
              <Item>
                <div>Team 2</div>
                <div style={{ color: "green" }}>COMPLETE</div>

                <Button size="small">Review</Button>
              </Item>
            </Box>
            <Box gridColumn="span 10">
              <Item>
                <div>Team 1</div>
                <div style={{ color: "green" }}>COMPLETE</div>
                <Button size="small">Review</Button>
              </Item>
            </Box>
            <Box gridColumn="span 10">
              <Item>
                <div>Team 3</div>
                <div style={{ color: "green" }}>COMPLETE</div>
                <Button size="small">Review</Button>
              </Item>
            </Box>
            <Box gridColumn="span 10">
              <Item>
                <div>Team 9</div>
                <div style={{ color: "red" }}>INCOMPLETE</div>
                <Button size="small" onClick={scorePage}>
                  Review
                </Button>
              </Item>
            </Box>
          </Box>
        </Box>
      </Container>
    </h1>
  );
}

export default Judge;
