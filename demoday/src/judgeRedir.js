import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const Container = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

function status(){

}






const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  display: 'flex',
  justifyContent: 'space-between', 
  alignItems: 'center',
}));

function Judge() {
  return (
  
    <Container>
      <Box sx={{ width: '50%' }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 10">
            <Item>
              <div>Team 2</div>
              <div>Team 2</div>
              <Button size="small" >Review</Button>
            </Item>
          </Box>
          <Box gridColumn="span 10">
            <Item>
              <div>Team 1</div>
              <div>Team 1</div>
              <Button size="small">Review</Button>
            </Item>
          </Box>
          <Box gridColumn="span 10">
            <Item>
              <div>Team 3</div>
              <div>Team 3</div>
              <Button size="small">Review</Button>
            </Item>
          </Box>
          <Box gridColumn="span 10">
            <Item>
            <div>Team 9</div>
            <div>Team 9</div>
              <Button size="small">Review</Button>
            </Item>
          </Box>
        </Box>
      </Box>
    </Container>
  
  );
}

export default Judge;
