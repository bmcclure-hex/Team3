import React, {useState} from 'react';
import { TextField, Button, Grid, IconButton, Typography, Box } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const Footer = () => {
    return (
        <footer style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor:'#0034A9', color: '#FFFFFF', padding: '10px', textAlign: 'center'}}>
            <p> Contact <a href="mailto:jhayes14@gsu.edu"> Jamie Hayes</a> or <a href="mailto:fhawamdeh1@gsu.edu"> Dr. Faris Hawamdeh</a> for questions.</p>
        </footer>
    );
};

const SubmissionPortal = () => {
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const [classification, setClassification] = useState('');
    const [type, setType] = useState('');
    const [teammates, setTeammates] = useState('');
    const [media, setMedia] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setMedia(file);
    };

    const handleSubmit = () => {
        //submission logic
        console.log({
            projectName,
            description,
            classification,
            type,
            teammates,
            media
        });
        //Reset form fields
        setProjectName('');
        setDescription('');
        setClassification('');
        setType('');
        setTeammates('');
        setMedia(null);
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>Project Submission Portal</Typography>
            <Grid container spacing={2}>
                <Grid iten xs={6}>
                    <TextField 
                        label="Project Name"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        fullWidth
                        margin="normal" 
                    />
                    <TextField
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Project Classification"
                        value={classification}
                        onChange={(e) => setClassification(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Project Type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Teammates"
                        value={teammates}
                        onChange={(e) => setTeammates(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Box>
                        sx={{
                            border: '1px dashed gray',
                            padding: '20px',
                            textAlign: 'center',
                        }}
                        
                        {media ? (
                            <img src={URL.createObjectURL(media)} alt="Upload Media" style={{maxWidth: '100%' }} />

                        ) : (
                            <React.Fragment>
                                <IconButton component="label" htmlFor="upload-file">
                                    <AddPhotoAlternateIcon />
                                    <input 
                                    id="upload-file"
                                    type="file"
                                    accept="image/*"
                                    style={{display: 'none '}}
                                    onChange={handleFileChange}
                                    />
                                </IconButton>
                                <Typography variant="body1">Click to upload media</Typography>
                            </React.Fragment>
                        )}
                    </Box>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};

export default SubmissionPortal;