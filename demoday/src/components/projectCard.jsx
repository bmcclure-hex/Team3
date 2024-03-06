import { Grid, Typography } from '@mui/material'
import React from 'react'

const ProjectCard = () => {
  return (
    <div>
        <Typography align='center' variant='h4' >Project Title:</Typography>
        <Typography variant= 'h5'>Project Description:</Typography>
        <Typography variant= 'body2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>

        <img src="/Assets/placeholder.jpg" alt="Logo" />
    </div>
           


  )
}

export default ProjectCard
