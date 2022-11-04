import { useState } from 'react';
import { Container, Checkbox, Box, FormControlLabel, Typography } from '@mui/material';
import { MoodIcon } from './MoodIcon';
import { BADEMOTIONS } from '../utils/utils';
import { EmotionCard } from './EmotionCard';


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

      <Box sx={{
        mt: 3, display: 'flex', flexDirection: 'row',
        alignItems: 'center'
      }}>
        {Object.keys(BADEMOTIONS).map((emotionType) => (
          <Checkbox key={emotionType} 
          icon={<EmotionCard emotionType={emotionType} />} 
          checkedIcon={<EmotionCard emotionType={emotionType} />} 
          onChange={() => { setStrongFeeling(emotionType) }} 
          checked={strongFeeling === emotionType} />
        ))}
      </Box>

{/* 
      <Box>
        <FormControlLabel
        label='Feeling'
        control={<Checkbox />}
        />
        </Box> */}

    </Container>
  );
};
