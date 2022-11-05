import { MoodCalender } from './MoodCalender';
import { MoodGraph } from './MoodGraph';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Notes } from './Notes';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { AddButton } from './AddButton';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { Priorities } from './Priorities';
import { useEffect } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../graphql/endpoint';
import { CREATE_DAILY_MOOD_MUTATION } from '../graphql/mutations/new-daily-mood-mutation';
import { DAILY_MOODS_BETWEEN_QUERY } from '../graphql/queries/daily-moods-between.query';
import { Loading } from './ui/loading/Loading';
import { graphql } from '../graphql/generated';

export const Dashboard = () => {
  const navigate = useNavigate();

  // Create empty daily mood if none exists today
  const now = new Date();
  const { data, isLoading } = useQuery({
    queryKey: ['DAILY_MOODS_BETWEEN_QUERY'],
    queryFn: () => {
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      // console.log('Today', today);
      // console.log('Tomorrow', tomorrow);
      return request(GRAPHQL_ENDPOINT, DAILY_MOODS_BETWEEN_QUERY, {
        startDate: today,
        endDate: tomorrow,
      });
    },
  });
  const mutation = useMutation({
    mutationKey: ['CREATE_DAILY_MOOD'],
    mutationFn: () => request(GRAPHQL_ENDPOINT, CREATE_DAILY_MOOD_MUTATION, { dailyMoodInput: {} }),
  });

  if (isLoading) return <Loading />;

  if (data?.dailyMoods?.data.length === 0) {
    // mutation.mutate();
    // console.log('Creating Daily Mood');
  }

  if (data) {
    // console.log('DailyMood of today', data.dailyMoods?.data[0] ?? null);
  }


  const date = new Date();
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <Container component='main' maxWidth='md'>
      <CssBaseline />
      <Box sx={{
        mt: 3, display: 'flex', flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Typography component='h1' variant='h4'>
          Dashboard
        </Typography>
        <Grid container spacing={1}>
          <Grid xs={12} md={12}>
            <Typography component='h3' variant='h5'>
              Priorities
            </Typography>
            <Priorities />
          </Grid>
          <Grid xs={12} md={6}>
            <Typography component='h3' variant='h5'>
              Track Mood
            </Typography>
            <AddButton Icon={() => <SentimentSatisfiedAltIcon fontSize='large' />} onClick={() => { navigate('/newMood') }} />
          </Grid>
          <Grid xs={12} md={6}>
            <Typography component='h3' variant='h5'>
              Strong Emotion
            </Typography>
            <AddButton Icon={() => <ThunderstormIcon fontSize='large' />} onClick={() => { navigate('/emotion') }} />
          </Grid>
          <Grid xs={12} md={12}>
            <Grid xs={12} md={6}>
              <Typography component='h3' variant='h5'>
                {monthNames[date.getMonth()]}
              </Typography>
              <MoodCalender year={date.getFullYear()} month={date.getMonth() + 1} />
            </Grid>
            <Grid xs={12} md={6}>
              <MoodGraph />
            </Grid>
          </Grid>
          <Grid xs={12} md={12}>
            <Typography component='h3' variant='h5'>
              Recent Notes
            </Typography>
            <Notes />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
