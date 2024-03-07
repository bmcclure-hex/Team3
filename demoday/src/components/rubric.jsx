import PropTypes from 'prop-types'
import { Grid,Button, FormControl, Input, TextField, Paper, Typography,FormControlLabel, RadioGroup } from '@mui/material'
import { useState } from 'react'
import React from 'react'
import Ratings from '../components/radioButtonRatings'

const Rubric = () => {
    const[formData,setFormData] = useState({
        //needs to updated for 
        presentation: '',
        content: '',
        content2:'',
        ox: '',
        ux: '',
        ux2:'',
        tech:'',
        tech2:'',
        comments: ''
    })

    //allows selection
   const handleChange = (e)=>{
    const {name ,value} = e.target;
    setFormData({...formData,[name]:value});
   };

   return (
    <div>
        <form>
            <Grid container spacing={4}>

                <Grid item xs={12}>
                    <Typography style={{ marginBottom: '16px' }}  sx={{textDecoration: 'underline'}} variant='h5'>Presentation </Typography>

                    <Typography variant='h6'>How clear and concise was the presentation of the project?</Typography>
                    <Ratings
                        name="presentation"
                        value={formData.presentation}
                        onChange={handleChange}
                        options={["Very Clear", "Clear", "Neutral", "Unclear", "Very Unclear"]}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography style={{ marginBottom: '16px' }} sx={{textDecoration: 'underline'}} variant='h5'>Content </Typography>

                    <Typography variant='h6'>Did the project address a relevant problem or need in the field of Computer Science?</Typography>
                    <Ratings
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        options={["Very Clear", "Clear", "Neutral", "Unclear", "Very Unclear"]}
                    />
                    <Typography variant='h6'>How innovative did you find the project concept or solution?</Typography>
                    <Ratings
                        name="content2"
                        value={formData.content2}
                        onChange={handleChange}
                        options={["Very Clear", "Clear", "Neutral", "Unclear", "Very Unclear"]}
                        
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography style={{ marginBottom: '16px' }}  sx={{textDecoration: 'underline'}} variant='h5'>Technical Execution</Typography>

                    <Typography variant='h6'>How well was the project technically executed?</Typography>
                    <Ratings
                        name="tech"
                        value={formData.tech}
                        onChange={handleChange}
                        options={["Very Clear", "Clear", "Neutral", "Unclear", "Very Unclear"]}
                    />
                    <Typography variant='h6'>Were you impressed by the technical skills demonstrated in the project?</Typography>
                    <Ratings
                        name="tech2"
                        value={formData.tech2}
                        onChange={handleChange}
                        options={["Very Clear", "Clear", "Neutral", "Unclear", "Very Unclear"]}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography style={{ marginBottom: '16px' }}  sx={{textDecoration: 'underline'}} variant='h5'>User Experience</Typography>
                    <Typography variant='h6'>How user-friendly was the project?</Typography>
                    <Ratings
                        name="ux"
                        value={formData.ux}
                        onChange={handleChange}
                        options={["Very Clear", "Clear", "Neutral", "Unclear", "Very Unclear"]}
                    />
                    <Typography variant='h6'>Did the project provide a positive user experience?</Typography>
                    <Ratings
                        name="ux2"
                        value={formData.ux2}
                        onChange={handleChange}
                        options={["Very Clear", "Clear", "Neutral", "Unclear", "Very Unclear"]}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography style={{ marginBottom: '16px' }}  sx={{textDecoration: 'underline'}} variant='h5'>Overall Experience</Typography>
                    <Typography variant='h6'>How user-friendly was the project?</Typography>
                    <Ratings
                        name="ox"
                        value={formData.ox}
                        onChange={handleChange}
                        options={["Excellent", "Very Good", "Good", "Fair", "Poor"]}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography style={{ marginBottom: '16px' }} sx={{textDecoration: 'underline'}} variant='h5'>Additional Comments</Typography>
                    <Typography variant='h6' name="comments" value={formData.comments}>Please provide any suggestions or feedback for improving the project or presentation:</Typography>
                    <TextField></TextField>
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained"> Submit</Button>
                </Grid>

            </Grid>

        </form>

    </div>
)
}

export default Rubric
