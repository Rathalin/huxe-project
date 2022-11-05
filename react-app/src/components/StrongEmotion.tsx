import { NewNote } from './NewNote';
import { Container, Box, Button, Typography } from '@mui/material';
import { SelectEmotionType } from './SelectEmotionType';
import { SelectEmotion } from './SelectEmotion';
import { Notes } from './Notes';
import { createContext, useState } from 'react';

export type EmotionTypeOption = 'Good' | 'Bad';

export interface EmotionTypeContext {
  selectedEmotionType: EmotionTypeOption | null,
  setSelectedEmotionType: (emotionType: EmotionTypeOption | null) => void,
}

export const SelectedEmotionTypeCtx = createContext<EmotionTypeContext>({
  selectedEmotionType: null,
  setSelectedEmotionType(_emotionType) { },
});

export const StrongEmotion = () => {
  const [selectedEmotionType, setSelectedEmotionType] = useState<EmotionTypeOption | null>(null);

  const handleSubmit = () => {
    //addMood(selectedMood)
    //navigate("/dashboard")
  }

  return (
    <Container maxWidth='md'>

      <Typography component='h1' variant='h3'>
        Strong Emotion
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{
        mt: 3, display: 'flex', flexDirection: 'column',
        alignItems: 'left'
      }}>
        <SelectedEmotionTypeCtx.Provider value={{ selectedEmotionType, setSelectedEmotionType }}>
          <SelectEmotionType />
          <SelectEmotion />
        </SelectedEmotionTypeCtx.Provider>
        <NewNote />
        <Notes />

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
