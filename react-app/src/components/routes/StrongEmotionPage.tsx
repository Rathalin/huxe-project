import { NewNote } from '../ui/notes/NewNote';
import { Container, Box, Typography } from '@mui/material';
import { SelectEmotionType } from '../ui/SelectEmotionType';
import { SelectEmotion } from '../ui/SelectEmotion';
import { ShowNotes } from '../ui/notes/ShowNotes';
import { createContext, FormEvent, useState } from 'react';
import { Enum_Emotion_Emotiontype } from '../../graphql/generated/graphql';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../ui/buttons/BackButton';

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

export const StrongEmotionPage = () => {
  const navigate = useNavigate();
  const [selectedEmotionType, setSelectedEmotionType] = useState<Enum_Emotion_Emotiontype | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate('/dashboard');
  }

  return (
    <Container maxWidth='md'>
      <Box sx={{
        mt: 5, display: 'flex', flexDirection: 'column',
        alignItems: 'center', minHeight: '80vh'
      }}>
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
          {/* <NewNote /> */}
          <ShowNotes noteIds={[]} />
          <BackButton />
        </Box>
      </Box>
    </Container>



  );
};
