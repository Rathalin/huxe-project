import { Box, Checkbox, Container } from '@mui/material';
import { MoodIcon } from './MoodIcon';
import Typography from '@mui/material/Typography';
import { Priorities } from './Priorities';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { NewNote } from './NewNote';
import Button from '@mui/material/Button';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../graphql/endpoint';
import { SET_MOOD_MUTATION } from '../graphql/mutations/set-mood.mutation';
import { SELECTED_MOOD_QUERY } from '../graphql/queries/selected-mood.query';
import { useDailyMoodIdStore } from '../stores/dailyMoodStore';
import { Enum_Dailymood_Mood } from '../graphql/generated/graphql';

const moodOptions: Enum_Dailymood_Mood[] = [
  Enum_Dailymood_Mood.VeryGood,
  Enum_Dailymood_Mood.Good,
  Enum_Dailymood_Mood.Neutral,
  Enum_Dailymood_Mood.Bad,
  Enum_Dailymood_Mood.VeryBad,
];

export const NewMood = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { dailyMoodId } = useDailyMoodIdStore();
  const selectedMoodQueryKey = ['SELECTED_MOOD_QUERY', dailyMoodId];
  const { data: selectedMoodData, isSuccess: isSuccessSelctedMood } = useQuery({
    queryKey: selectedMoodQueryKey,
    queryFn: () => request(GRAPHQL_ENDPOINT, SELECTED_MOOD_QUERY, { dailyMoodId }),
  });
  const { mutate: setSelectedMood } = useMutation({
    mutationFn: ({ mood }: { mood: Enum_Dailymood_Mood, }) => {
      return request(GRAPHQL_ENDPOINT, SET_MOOD_MUTATION, {
        dailyMoodId: dailyMoodId ?? '',
        dailyMoodInput: {
          mood,
        },
      })
    },
    onSuccess: (_data, _variables) => {
      queryClient.invalidateQueries(selectedMoodQueryKey);
    },
  });

  const selectedMood = selectedMoodData?.dailyMood?.data?.attributes?.mood;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // addMood(selectedMood);
    navigate('/dashboard');
  }

  return (
    <Container maxWidth='md' sx={{ mt: 3, display: 'flex', gap: 1 }}>
      <Box component='form' onSubmit={handleSubmit} sx={{
        mt: 3, display: 'flex', flexDirection: 'column',
        alignItems: 'left'
      }}>
        <Typography component='h1' variant='h3'>
          Track Mood
        </Typography>
        <Box sx={{
          mt: 3, display: 'flex', flexDirection: 'row',
          alignItems: 'center'
        }}>
          {isSuccessSelctedMood && moodOptions.map((mood) => (
            <Checkbox
              key={mood}
              icon={<MoodIcon moodType={mood} />}
              checkedIcon={<MoodIcon moodType={mood} />}
              onChange={() => { setSelectedMood({ mood }) }}
              checked={selectedMood === mood}
            />
          ))}
        </Box>
        <Typography component='h3' variant='h5'>
          Priorities Satisfied today
        </Typography>
        <Priorities />
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
