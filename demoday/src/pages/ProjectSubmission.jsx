import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Select, MenuItem, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, Container } from '@mui/material';

const ProjectSubmission = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [teamMembers, setTeamMembers] = useState([{}]);
  const [project, setProject] = useState({
    title: '',
    description: '',
    type: '',
    classification: '',
    media: null,
    teamSize: 1,
  });

  const handleNext = () => {
    if (currentPage === 1) {
      setTeamMembers(Array.from({ length: project.teamSize }, () => ({})));
    }
    setCurrentPage(currentPage + 1);
  };

  const handleBack = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleProjectChange = (event) => {
    setProject({ ...project, [event.target.name]: event.target.value });
  };

  const handleTeamMemberChange = (index, event) => {
    const newTeamMembers = [...teamMembers];
    newTeamMembers[index] = { ...newTeamMembers[index], [event.target.name]: event.target.value };
    setTeamMembers(newTeamMembers);
  };

  // This would be expanded to handle file uploads, validations, etc.
  const handleSubmit = () => {
    console.log(project);
    console.log(teamMembers);
    // Submit logic goes here
  };

  return (
    <Container style={{ minHeight: '100vh' }}>
        <Box sx={{ '& .MuiTextField-root': { m: 1 }, '& .MuiButton-root': { m: 1 } }}>
      {currentPage === 1 && (
        <Box>
            <Box mt={5} mb={5} textAlign={'center'}><Typography variant="h4">Project Submission</Typography></Box>
          
          <TextField fullWidth label="Project Title" name="title" value={project.title} onChange={handleProjectChange} />
          <TextField fullWidth multiline rows={4} label="Project Description" name="description" value={project.description} onChange={handleProjectChange} />
          <Box ml={2} mt={2}>
          <Typography>Upload Project Media</Typography>
          <Button mb={3} variant="contained" component="label">
            Upload
            <input type="file" hidden onChange={(e) => setProject({ ...project, media: e.target.files[0] })} />
          </Button>
          </Box>
          <Box ml={2} mt={2}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Project Type</FormLabel>
            <RadioGroup row name="type" value={project.type} onChange={handleProjectChange}>
              <FormControlLabel value="Poster" control={<Radio />} label="Poster" />
              <FormControlLabel value="Demo" control={<Radio />} label="Demo" />
            </RadioGroup>
          </FormControl>
          </Box>
          
          <Box ml={2} mt={2} mb={2}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Team Classification</FormLabel>
            <RadioGroup row name="classification" value={project.classification} onChange={handleProjectChange}>
              <FormControlLabel value="PhD" control={<Radio />} label="PhD" />
              <FormControlLabel value="Master's" control={<Radio />} label="Master's" />
              <FormControlLabel value="Bachelor's" control={<Radio />} label="Bachelor's" />
            </RadioGroup>
          </FormControl>
          </Box>
          
          
          <Box ml={1} mt={2}>
          <FormControl fullWidth>
          <FormLabel component="legend">Number of Team Members</FormLabel>
            <Select
              labelId="team-size-select-label"
              id="team-size-select"
              value={project.teamSize}
              name="teamSize"
              onChange={handleProjectChange}
            >
              {[1, 2, 3, 4].map((size) => (
                <MenuItem key={size} value={size}>
                  {size}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          </Box>
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        </Box>
      )}
      {currentPage > 1 && teamMembers.map((member, index) => {
        if (index === currentPage - 2) {
          return (
            <Box key={index}>
              <Box mt={5} mb={5} textAlign={'center'}><Typography variant="h5">Team Member {index + 1}</Typography></Box>
              <TextField fullWidth label="First Name" name="firstName" value={member.firstName || ''} onChange={(e) => handleTeamMemberChange(index, e)} />
              <TextField fullWidth label="Last Name" name="lastName" value={member.lastName || ''} onChange={(e) => handleTeamMemberChange(index, e)} />
              <TextField fullWidth label="Panther ID" name="pantherId" value={member.pantherId || ''} onChange={(e) => handleTeamMemberChange(index, e)} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
              <TextField fullWidth label="GSU Email" name="email" value={member.email || ''} onChange={(e) => handleTeamMemberChange(index, e)} />
              {index >= 0 && <Button variant="contained" onClick={handleBack}>Back</Button>}
              {(index < project.teamSize - 1) && <Button variant="contained" onClick={handleNext}>Next</Button>}
              {(index === project.teamSize - 1) && <Button variant="contained" onClick={handleSubmit}>Submit</Button>}
            </Box>
          );
        }
        return null;
      })}
    </Box>
    </Container>
    
  );
};

export default ProjectSubmission;

// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Grid,
//   IconButton,
//   Typography,
//   Box,
// } from "@mui/material";
// import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

// const Footer = () => {
//   return (
//     <footer
//       style={{
//         position: "fixed",
//         bottom: 0,
//         width: "100%",
//         backgroundColor: "#0034A9",
//         color: "#FFFFFF",
//         padding: "10px",
//         textAlign: "center",
//       }}
//     >
//       <p>
//         Contact <a href="mailto:jhayes14@gsu.edu"> Jamie Hayes</a> or{" "}
//         <a href="mailto:fhawamdeh1@gsu.edu"> Dr. Faris Hawamdeh</a> for
//         questions.
//       </p>
//     </footer>
//   );
// };

// const SubmissionPortal = () => {
//   const [projectName, setProjectName] = useState("");
//   const [description, setDescription] = useState("");
//   const [classification, setClassification] = useState("");
//   const [type, setType] = useState("");
//   const [teammates, setTeammates] = useState("");
//   const [media, setMedia] = useState(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setMedia(file);
//   };

//   const handleSubmit = () => {
//     //submission logic
//     console.log({
//       projectName,
//       description,
//       classification,
//       type,
//       teammates,
//       media,
//     });
//     //Reset form fields
//     setProjectName("");
//     setDescription("");
//     setClassification("");
//     setType("");
//     setTeammates("");
//     setMedia(null);
//   };

//   return (
//     <div>
//       <Typography variant="h4" gutterBottom>
//         Project Submission Portal
//       </Typography>
//       <Grid container spacing={2}>
//         <Grid iten xs={6}>
//           <TextField
//             label="Project Name"
//             value={projectName}
//             onChange={(e) => setProjectName(e.target.value)}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Project Classification"
//             value={classification}
//             onChange={(e) => setClassification(e.target.value)}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Project Type"
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Teammates"
//             value={teammates}
//             onChange={(e) => setTeammates(e.target.value)}
//             fullWidth
//             margin="normal"
//           />
//           <Button variant="contained" color="primary" onClick={handleSubmit}>
//             Submit
//           </Button>
//         </Grid>
//         <Grid item xs={6}>
//           <Box
//             sx={{
//               border: "1px dashed gray",
//               padding: "20px",
//               textAlign: "center",
//             }}
//           >
//             {media ? (
//               <img
//                 src={URL.createObjectURL(media)}
//                 alt="Upload Media"
//                 style={{ maxWidth: "100%" }}
//               />
//             ) : (
//               <React.Fragment>
//                 <IconButton component="label" htmlFor="upload-file">
//                   <AddPhotoAlternateIcon />
//                   <input
//                     id="upload-file"
//                     type="file"
//                     accept="image/*"
//                     style={{ display: "none " }}
//                     onChange={handleFileChange}
//                   />
//                 </IconButton>
//                 <Typography variant="body1">Click to upload media</Typography>
//               </React.Fragment>
//             )}
//           </Box>
//         </Grid>
//       </Grid>
//       <Footer />
//     </div>
//   );
// };

// export default SubmissionPortal;
