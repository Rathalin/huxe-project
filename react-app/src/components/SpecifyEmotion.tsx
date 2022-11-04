import { useState } from 'react';
import { Container, Checkbox, Box, FormControlLabel, Typography } from '@mui/material';


export const SpecifyEmotion = () => {
  const [strongFeeling, setStrongFeeling] = useState('');

  const strongSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.dir(e.currentTarget.value)
    //setStrongFeeling(e.currentTarget.value)
  };

  return (
    <Container maxWidth='xl'>

      <Typography component='h3' variant='h4'>
          Select the emotions you are feeling
      </Typography>


      <Box>
        <FormControlLabel
        label='Feeling'
        control={<Checkbox />}
        />
        </Box>

    </Container>
  );
};
