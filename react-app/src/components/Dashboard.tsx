import { MoodCalender } from './MoodCalender';
import { MoodGraph } from './MoodGraph';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Notes } from './Notes';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { AddButton } from './AddButton';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { Priorities } from './Priorities';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../graphql/endpoint';
import { DAILY_MOODS_BETWEEN_QUERY } from '../graphql/queries/daily-moods-between.query';
import { DailyMoodsBetweenQuery } from '../graphql/generated/graphql';

export const Dashboard = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const now = new Date();
  const todayDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  // const todayDailyMoodQueryKey = ['DAILY_MOODS_BETWEEN_QUERY', todayDate];
  const todayDailyMoodQueryKey = ['testkey'];
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const {
    data: dailyMoodData,
    isSuccess: isSuccessDailyMood,
    isLoading: isLoadingDailyMood,
    isFetching: isFetchingDailyMood,
  } = useQuery({
    queryKey: todayDailyMoodQueryKey,
    queryFn: () => request(GRAPHQL_ENDPOINT, DAILY_MOODS_BETWEEN_QUERY, {
      startDate: today,
      endDate: tomorrow,
    }),
  });
  const { mutate: createEmptyDailyMood, isLoading: isLoadingCreate } = useMutation({
    mutationKey: ['CREATE_DAILY_MOOD_MUTATION'],
    // mutationFn: () => request(GRAPHQL_ENDPOINT, CREATE_DAILY_MOOD_MUTATION, { dailyMoodInput: {} }),
    mutationFn: async () => {
      return {};
    },
    onSuccess: (data, _variables) => {
      console.log('data', data);
      queryClient.setQueryData(todayDailyMoodQueryKey, (): DailyMoodsBetweenQuery => {
        return data;
        // return {
        //   dailyMoods: {
        //     data: [
        //       { id: data.createDailyMood?.data?.id },
        //     ],
        //   },
        // };
      });
    },
  });

  // if (isSuccessDailyMood && !isLoadingDailyMood && !isFetchingDailyMood) {
  // Create empty daily mood if none exists today
  //   const dailyMoodToday = dailyMoodData?.dailyMoods?.data[0] ?? null;
  //   if (dailyMoodToday == null) {
  //     console.log('DailyMoodData', dailyMoodData);
  //     console.count('Create empty daily mood');
  //     createEmptyDailyMood();
  //   }
  // }

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <Container component='main' maxWidth='md'>
      <CssBaseline />
      <Box sx={{
        mt: 5, display: 'flex', flexDirection: 'column',
        alignItems: 'center', minHeight: '80vh'
      }}>
        <Typography component='h1' variant='h3'>
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
                {monthNames[now.getMonth()]}
              </Typography>
              <MoodCalender year={now.getFullYear()} month={now.getMonth() + 1} />
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
          <Button onClick={() => createEmptyDailyMood()}>Debug Mutate</Button>
        </Grid>
      </Box>
    </Container>
  );
};
