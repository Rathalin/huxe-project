import { Box, Checkbox, Container } from '@mui/material';
import { MoodIcon } from './MoodIcon';
import Typography from '@mui/material/Typography';
import { Priorities } from './Priorities';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NewNote } from './NewNote';
import Button from '@mui/material/Button';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../graphql/endpoint';
import { MOODS_QUERY } from '../graphql/queries/moods.query';
import { Loading } from './ui/loading/Loading';
import { SET_MOOD_MUTATION } from '../graphql/mutations/set-mood.mutation';
import { SELECTED_MOOD_QUERY } from '../graphql/queries/selected-mood.query';
import { SelectedMoodQuery } from '../graphql/generated/graphql';

export const NewMood = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const TEMP_DAILY_MOOD_ID = '1';
  const { data: moodOptionsData, isSuccess: isSuccessMoodOptions } = useQuery({
    queryKey: ['MOODS_QUERY'],
    queryFn: () => request(GRAPHQL_ENDPOINT, MOODS_QUERY),
  });
  const selectedMoodQueryKey = ['SELECTED_MOOD_QUERY', TEMP_DAILY_MOOD_ID];
  const { data: selectedMoodData, isSuccess: isSuccessSelctedMood } = useQuery({
    queryKey: selectedMoodQueryKey,
    queryFn: () => request(GRAPHQL_ENDPOINT, SELECTED_MOOD_QUERY, { dailyMoodId: TEMP_DAILY_MOOD_ID }),
  });
  const { mutate: setSelectedMood } = useMutation({
    mutationFn: ({ moodId }: { moodId: string, }) => {
      console.log('Set mood id to ', moodId);
      return request(GRAPHQL_ENDPOINT, SET_MOOD_MUTATION, {
        dailyMoodId: TEMP_DAILY_MOOD_ID,
        dailyMoodInput: {
          mood: moodId,
        },
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(selectedMoodQueryKey);
      // queryClient.setQueryData(selectedMoodQueryKey, (): SelectedMoodQuery => ({
      //   dailyMood: { data: { attributes: { mood: { data: { id: variables.moodId } } } } }
      // }));
    }
  });

  const selectedMood = selectedMoodData?.dailyMood?.data?.attributes?.mood?.data;
  const moodOptions = moodOptionsData?.moods?.data.map(moodData => ({
    id: moodData.id,
    displayOrder: moodData.attributes?.displayOrder ?? 0,
    iconName: moodData.attributes?.iconName ?? '',
  })) ?? [];

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
          {isSuccessMoodOptions && isSuccessSelctedMood && moodOptions.map((mood) => (
            <Checkbox
              key={mood.displayOrder}
              icon={<MoodIcon moodType={mood.iconName} />}
              checkedIcon={<MoodIcon moodType={mood.iconName} />}
              onChange={() => { setSelectedMood({ moodId: mood.id ?? '' }) }}
              checked={selectedMood?.attributes?.iconName === mood.iconName}
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
