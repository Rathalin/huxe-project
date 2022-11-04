import { useStore } from '../stores/useStore';
import { Box, Checkbox, Container } from '@mui/material';
import { MoodIcon } from './MoodIcon';
import { MOODS } from '../utils/utils';
import Typography from '@mui/material/Typography';
import { Priorities } from './Priorities';
import { AddButton } from './AddButton';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NewNote } from './NewNote';
import Button from '@mui/material/Button';

export const NewMood = () => {
  const { addMood } = useStore();
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState("")

  const handleSubmit = () => {
    addMood(selectedMood)
    navigate("/dashboard")
  }

  return (
    <Container maxWidth='md' sx={{ mt: 3, display: 'flex', gap: 1 }}>
      <Box component="form" onSubmit={handleSubmit} sx={{
        mt: 3, display: 'flex', flexDirection: 'column',
        alignItems: 'left'
      }}>
        <Typography component='h3' variant='h4'>
          Track Mood
        </Typography>
        <Box sx={{
          mt: 3, display: 'flex', flexDirection: 'row',
          alignItems: 'center'
        }}>
          {Object.keys(MOODS).map((moodType) => (
            <Checkbox key={moodType} icon={<MoodIcon moodType={moodType} />} checkedIcon={<MoodIcon moodType={moodType} />} onChange={() => { setSelectedMood(moodType) }} checked={selectedMood === moodType} />
          ))}
        </Box>
        <Typography component='h3' variant='h5'>
          Priorities Satisfied today
        </Typography>
        <Priorities />
        <Typography component='h3' variant='h5'>
          Strong Emotion
        </Typography>
        <Typography component='p'>
          Do you want to record a strong Emotion today?
        </Typography>
        <AddButton Icon={() => <ThunderstormIcon fontSize="large" />} onClick={() => { navigate("/newEmotion") }} />
        <NewNote />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
        >
          Finish
        </Button>
      </Box>
    </Container>
  );
};
