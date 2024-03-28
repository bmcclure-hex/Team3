import { Grid, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import React from "react";
import Ratings from "../components/radioButtonRatings";

const Rubric = () => {
  const [error, setError] = React.useState(false);
  const [formData, setFormData] = useState({
    presentation: "",
    content: "",
    content2: "",
    ox: "",
    ux: "",
    ux2: "",
    tech: "",
    tech2: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(e.target.value);
  };

  const submitRubric = (e) => {
    e.preventDefault();

    const isAnyFieldEmpty = Object.values(formData).some(
      (value) => value === ""
    );

    if (isAnyFieldEmpty) {
      setError(true);
      alert("Error: Please complete all questions before submitting.");
    } else {
      // All fields are filled, proceed with form submission
      setError(false);
      // submission completed
      alert("submitted");
    }
  };

  return (
    <div>
      <form onSubmit={submitRubric}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography
              style={{
                marginBottom: "16px",
                color: formData.presentation ? "inherit" : "red",
              }}
              sx={{ textDecoration: "underline" }}
              variant="h5"
            >
              Presentation{" "}
            </Typography>

            <Typography variant="h6">
              How clear and concise was the presentation of the project?
            </Typography>
            <Ratings
              name="presentation"
              value={formData.presentation}
              onChange={handleChange}
              options={[
                "Very Clear",
                "Clear",
                "Neutral",
                "Unclear",
                "Very Unclear",
              ]}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              style={{ marginBottom: "16px" }}
              sx={{ textDecoration: "underline" }}
              variant="h5"
            >
              Content{" "}
            </Typography>

            <Typography variant="h6">
              Did the project address a relevant problem or need in the field of
              Computer Science?
            </Typography>
            <Ratings
              name="content"
              value={formData.content}
              onChange={handleChange}
              options={[
                "Very Clear",
                "Clear",
                "Neutral",
                "Unclear",
                "Very Unclear",
              ]}
            />
            <Typography variant="h6">
              How innovative did you find the project concept or solution?
            </Typography>
            <Ratings
              name="content2"
              value={formData.content2}
              onChange={handleChange}
              options={[
                "Very Clear",
                "Clear",
                "Neutral",
                "Unclear",
                "Very Unclear",
              ]}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              style={{ marginBottom: "16px" }}
              sx={{ textDecoration: "underline" }}
              variant="h5"
            >
              Technical Execution
            </Typography>

            <Typography variant="h6">
              How well was the project technically executed?
            </Typography>
            <Ratings
              name="tech"
              value={formData.tech}
              onChange={handleChange}
              options={[
                "Very Clear",
                "Clear",
                "Neutral",
                "Unclear",
                "Very Unclear",
              ]}
            />
            <Typography variant="h6">
              Were you impressed by the technical skills demonstrated in the
              project?
            </Typography>
            <Ratings
              name="tech2"
              value={formData.tech2}
              onChange={handleChange}
              options={[
                "Very Clear",
                "Clear",
                "Neutral",
                "Unclear",
                "Very Unclear",
              ]}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              style={{ marginBottom: "16px" }}
              sx={{ textDecoration: "underline" }}
              variant="h5"
            >
              User Experience
            </Typography>
            <Typography variant="h6">
              How user-friendly was the project?
            </Typography>
            <Ratings
              name="ux"
              value={formData.ux}
              onChange={handleChange}
              options={[
                "Very Clear",
                "Clear",
                "Neutral",
                "Unclear",
                "Very Unclear",
              ]}
            />
            <Typography variant="h6">
              Did the project provide a positive user experience?
            </Typography>
            <Ratings
              name="ux2"
              value={formData.ux2}
              onChange={handleChange}
              options={[
                "Very Clear",
                "Clear",
                "Neutral",
                "Unclear",
                "Very Unclear",
              ]}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              style={{ marginBottom: "16px" }}
              sx={{ textDecoration: "underline" }}
              variant="h5"
            >
              Overall Experience
            </Typography>
            <Typography variant="h6">
              How user-friendly was the project?
            </Typography>
            <Ratings
              name="ox"
              value={formData.ox}
              onChange={handleChange}
              options={["Excellent", "Very Good", "Good", "Fair", "Poor"]}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              style={{ marginBottom: "16px" }}
              sx={{ textDecoration: "underline" }}
              variant="h5"
            >
              Additional Comments
            </Typography>
            <Typography variant="h6">
              Please provide any suggestions or feedback for improving the
              project or presentation:
            </Typography>
            <TextField
              name="comments"
              value={formData.comments}
              onChange={handleChange}
            ></TextField>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" type="submit">
              {" "}
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Rubric;
