import { NewNote } from './NewNote';
import { Container, Box, Button, Typography } from '@mui/material';
import { SelectEmotionType } from './SelectEmotionType';
import { SelectEmotion } from './SelectEmotion';
import { Notes } from './Notes';
import { createContext, FormEvent, useState } from 'react';
import { Enum_Emotion_Emotiontype } from '../graphql/generated/graphql';
import { useNavigate } from 'react-router-dom';

export interface EmotionTypeContext {
  selectedEmotionType: Enum_Emotion_Emotiontype | null,
  setSelectedEmotionType: (emotionType: Enum_Emotion_Emotiontype | null) => void,
}

export const emotionTypeOptions: Enum_Emotion_Emotiontype[] = [
  Enum_Emotion_Emotiontype.Good,
  Enum_Emotion_Emotiontype.Bad,
];

export const SelectedEmotionTypeCtx = createContext<EmotionTypeContext>({
  selectedEmotionType: null,
  setSelectedEmotionType(_emotionType) { },
});

export const StrongEmotion = () => {
  const navigate = useNavigate();
  const [selectedEmotionType, setSelectedEmotionType] = useState<Enum_Emotion_Emotiontype | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate('/dashboard');
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
