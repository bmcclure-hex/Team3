import React from 'react'
import { RadioGroup, FormControlLabel, Radio, FormControl } from '@mui/material';


const QuestionRatings = ({ name, value, onChange, options }) => {
  return (
          <FormControl component="fieldset">
            <RadioGroup name={name} value={value} onChange={onChange} style={{ marginBottom: '16px' }}>
              {options.map((option) => (
                <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
              ))}
            </RadioGroup>
          </FormControl>
      );
};

export default QuestionRatings
