import { Container, Box, Typography, Button } from '@mui/material';
import { SelectEmotionType } from '../ui/emotion/SelectEmotionType';
import { SelectEmotion } from '../ui/emotion/SelectEmotion';
import { createContext, useState } from 'react';
import { Enum_Emotion_Emotiontype, StrongEmotionInput } from '../../graphql/generated/graphql';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../ui/buttons/BackButton';
import { useMutation } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../graphql/endpoint';
import { CREATE_STRONG_EMOTION_MUTATION } from '../../graphql/mutations/create-strong-emotion.mutation';
import { useDailyMoodIdStore } from '../../stores/dailyMoodStore';
import { AddSingleNote } from '../ui/notes/AddSingleNote';
import Grid from '@mui/material/Unstable_Grid2';

export interface EmotionTypeContext {
  selectedEmotionType: Enum_Emotion_Emotiontype | null,
  setSelectedEmotionType: (emotionType: Enum_Emotion_Emotiontype | null) => void,
}

export const emotionTypeOptions: Enum_Emotion_Emotiontype[] = [
  Enum_Emotion_Emotiontype.Good,
  Enum_Emotion_Emotiontype.Bad
];

export const SelectedEmotionTypeCtx = createContext<EmotionTypeContext>({
  selectedEmotionType: null,
  setSelectedEmotionType(_emotionType) {
  }
});

export const TrackEmotionPage = () => {
  const navigate = useNavigate();
  const { dailyMoodId } = useDailyMoodIdStore();
  const [selectedEmotionType, setSelectedEmotionType] = useState<Enum_Emotion_Emotiontype | null>(null);
  const [selectedEmotionIds, setSelectedEmotionIds] = useState<string[]>([]);
  const [noteId, setNoteId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { mutate: createStrongEmotion } = useMutation({
    mutationKey: ['CREATE_STRONG_EMOTION_MUTATION'],
    mutationFn: (strongEmotion: StrongEmotionInput) => request(GRAPHQL_ENDPOINT, CREATE_STRONG_EMOTION_MUTATION, { strongEmotion }),
    onSuccess: () => navigate('/dashboard')
  });

  function onConfirmClick(): void {
    if (selectedEmotionIds.length === 0) {
      setError('Please select at least 1 emotion.');
    } else {
      setError(null);
      createStrongEmotion({
        dailyMood: dailyMoodId ?? '',
        emotions: selectedEmotionIds,
        note: noteId
      });
    }
  }

  return (
    <Container component='main' maxWidth='md'>
      <Box sx={{
        mt: 5, display: 'flex', flexDirection: 'column',
        alignItems: 'center', minHeight: '80vh'
      }}>
        <Typography component='h1' variant='h3'>
          Track Emotion
        </Typography>

        <Grid container spacing={1}>
          <SelectedEmotionTypeCtx.Provider
            value={{
              selectedEmotionType, setSelectedEmotionType: (emotionType) => {
                setError(null);
                setSelectedEmotionType(emotionType);
              }
            }}
          >
            <Grid xs={12} md={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Typography component='h5' variant='h5'>
                Is your emotion good or bad?
              </Typography>
              <SelectEmotionType />
            </Grid>
            <Grid xs={12} md={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {selectedEmotionType && <Typography component='h5' variant='h5'>
                Select the emotions you are feeling
              </Typography>}
              <SelectEmotion
                selectedEmotionIds={selectedEmotionIds}
                setSelectedEmotionIds={((ids) => {
                  setSelectedEmotionIds(ids);
                  setError(null);
                })}
              />
            </Grid>
          </SelectedEmotionTypeCtx.Provider>
        {error != null &&
          <Typography component='p' color='error'>
            {error}
          </Typography>
        }
        <Grid xs={12} md={12}>
          <AddSingleNote noteId={noteId} setNoteId={setNoteId} />
        </Grid>
        <Grid xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <BackButton />
          <Button
            variant='contained'
            sx={{ mt: 3, mb: 2, mx: 2, gap: 1, width: '250px' }}
            onClick={() => onConfirmClick()}
          >
            <Typography component='span'>Add </Typography>
            <Typography component='span'>
              <span>(</span>
              <strong>{selectedEmotionIds.length}</strong>
              <span>)</span>
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
</Container>
)
  ;
};
