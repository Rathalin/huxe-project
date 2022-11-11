import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { BackButton } from '../ui/buttons/BackButton';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../graphql/endpoint';
import { DAILYMOOD_SUMMARY_QUERY } from '../../graphql/queries/dailymood-summary.query';

export const DailySummaryPage = () => {
  const params = useParams();
  const { data } = useQuery({
    queryKey: ['DAILYMOOD_SUMMARY_QUERY'],
    queryFn: () => request(GRAPHQL_ENDPOINT, DAILYMOOD_SUMMARY_QUERY, { dailyMoodId: params.id ?? '' }),
  });

  if (params.id === 'no-data') return (
    <Container component='main' maxWidth='md'>
      <Box sx={{
        mt: 5, display: 'flex', flexDirection: 'column',
        alignItems: 'center', minHeight: '80vh'
      }}>
        <Typography component='h3' variant='h5'>
          You did not track any data on this day.
        </Typography>
        <BackButton />
      </Box>
    </Container>
  );

  // TODO (@Lisa) Use data from query
  return (
    <Container component='main' maxWidth='md'>
      <CssBaseline />
      <Box sx={{
        mt: 5, display: 'flex', flexDirection: 'column',
        alignItems: 'center', minHeight: '80vh'
      }}>
        <Typography component='h1' variant='h4'>
          {params.date}
        </Typography>
        <Grid container spacing={1}>
          <Grid xs={6}>
            <Typography component='h3' variant='h5'>
              Tracked Mood
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography component='h3' variant='h5'>
              Tracked Emotions
            </Typography>
          </Grid>
          <Grid xs={12} md={12}>
            <Typography component='h3' variant='h5'>
              Notes of the day
            </Typography>
          </Grid>
        </Grid>
        <BackButton />
      </Box>
    </Container >
  );
};
