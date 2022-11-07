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
import { useMutation, useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../graphql/endpoint';
import { DAILY_MOODS_BETWEEN_QUERY } from '../graphql/queries/daily-moods-between.query';
import { useDailyMoodIdStore } from '../stores/dailyMoodStore';
import { now, today, todayDateString, tomorrow } from '../utils/date.util';
import SwitchAccessShortcutAddIcon from '@mui/icons-material/SwitchAccessShortcutAdd';
import { CREATE_DAILY_MOOD_MUTATION } from '../graphql/mutations/new-daily-mood-mutation';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { setDailyMoodId } = useDailyMoodIdStore();

  const todayDailyMoodQueryKey = ['DAILY_MOODS_BETWEEN_QUERY', todayDateString];
  useQuery({
    queryKey: todayDailyMoodQueryKey,
    queryFn: () => {
      return request(GRAPHQL_ENDPOINT, DAILY_MOODS_BETWEEN_QUERY, {
        startDate: today,
        endDate: tomorrow,
      });
    },
    onSuccess: (data) => {
      const dailyMoodDataId = data?.dailyMoods?.data[0]?.id;
      const dailyMoodExistsToday = dailyMoodDataId != null;
      if (dailyMoodExistsToday) {
        setDailyMoodId(dailyMoodDataId);
      } else {
        createEmptyDailyMood();
      }
    },
  });

  const { mutate: createEmptyDailyMood } = useMutation({
    mutationKey: ['CREATE_DAILY_MOOD_MUTATION'],
    mutationFn: () => request(GRAPHQL_ENDPOINT, CREATE_DAILY_MOOD_MUTATION, { dailyMoodInput: {} }),
    onSuccess: (data, _variables) => {
      const dailyMoodId = data.createDailyMood?.data?.id;
      if (dailyMoodId != null) {
        console.log('Created DailyMood with id')
        setDailyMoodId(dailyMoodId);
      }
    },
  });

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
            <AddButton Icon={() => <SwitchAccessShortcutAddIcon fontSize='large' />} onClick={() => { navigate('/newPriority') }} />
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
