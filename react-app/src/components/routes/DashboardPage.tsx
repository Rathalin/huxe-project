import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { useMutation, useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { useDailyMoodIdStore } from '../../stores/dailyMoodStore';
import { now } from '../../utils/date.util';
import { GRAPHQL_ENDPOINT } from '../../graphql/endpoint';
import { DashboardPriorities } from '../ui/DashboardPriorities';
import { AddButton } from '../ui/buttons/AddButton';
import { MoodCalender } from '../ui/MoodCalender';
import { MoodGraph } from '../ui/MoodGraph';
import { ShowNotes } from '../ui/notes/ShowNotes';
import { RECENT_NOTES_QUERY } from '../../graphql/queries/recent-notes.query';
import { dataService } from '../../services/data.service';

export const DashboardPage = () => {
  const navigate = useNavigate();
  const { dailyMoodId, setDailyMoodId } = useDailyMoodIdStore();
  // Create Emotions in db if none exist
  dataService.seedEmotions();
  // Create DailyMood in db if none exists
  if (dailyMoodId == null) {
    dataService.initDailyMood().then(id => {
      if (id != null) {
        setDailyMoodId(id);
      }
    });
  }
  const { data: recentNotesData } = useQuery({
    queryKey: ['RECENT_NOTES_QUERY'],
    queryFn: () => request(GRAPHQL_ENDPOINT, RECENT_NOTES_QUERY, { limit: 3 }),
  });
  const recentNoteIds: string[] = recentNotesData?.notes?.data
    .map(n => n.id)
    .filter((id): id is string => id != null) ?? [];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
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
            <DashboardPriorities />
          </Grid>
          <Grid xs={12} md={6}>
            <Typography component='h3' variant='h5'>
              Track Mood
            </Typography>
            <AddButton Icon={() => <SentimentSatisfiedAltIcon fontSize='large' />} onClick={() => { navigate('/track-mood') }} />
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
            <ShowNotes noteIds={recentNoteIds} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
