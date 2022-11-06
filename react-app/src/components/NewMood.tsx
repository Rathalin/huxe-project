import { useStore } from '../stores/useStore';
import { Box, Checkbox, Container } from '@mui/material';
import { MoodIcon } from './MoodIcon';
import { MOODS } from '../utils/utils';
import Typography from '@mui/material/Typography';
import { Priorities } from './Priorities';
import { AddButton } from './AddButton';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NewNote } from './NewNote';
import Button from '@mui/material/Button';
import { useMutation, useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../graphql/endpoint';
import { MOODS_QUERY } from '../graphql/queries/moods.query';
import { Loading } from './ui/loading/Loading';

export const NewMood = () => {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState('');
  const { data: moodsData, isLoading: isLoadingMoods, isSuccess: isSuccessMoods } = useQuery({
    queryKey: ['MOODS_QUERY'],
    queryFn: () => request(GRAPHQL_ENDPOINT, MOODS_QUERY),
  });

  const moods = moodsData?.moods?.data.map(moodData => ({
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
          {isLoadingMoods && <Loading />}
          {isSuccessMoods && moods.map((mood) => (
            <Checkbox
              key={mood.displayOrder}
              icon={<MoodIcon moodType={mood.iconName} />}
              checkedIcon={<MoodIcon moodType={mood.iconName} />}
              onChange={() => { setSelectedMood(mood.iconName) }}
              checked={selectedMood === mood.iconName}
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
