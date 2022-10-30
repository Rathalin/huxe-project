import { useState } from 'react';
import { useStore } from '../store/useStore';
import { Button, Container, Checkbox, IconButton, ButtonProps, Box, FormControlLabel } from '@mui/material';
import styled from '@emotion/styled';
import { purple } from '@mui/material/colors';


export const SpecifyEmotion = () => {
  const [strongFeeling, setStrongFeeling] = useState('');
  
  const strongSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.dir(e.currentTarget.value)
    //setStrongFeeling(e.currentTarget.value)
  };

  return (
    <Container maxWidth='xl'>

      <h5>Select the emotions you are feeling</h5>

      <Box>
        <FormControlLabel 
        label='Feeling'
        control={<Checkbox />}
        />
        </Box>

    </Container>
  );
};
