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
import { MoodIcon } from '../ui/MoodIcon';
import { MOODS } from '../../utils/utils';
import { NoteCard } from '../ui/notes/NoteCard';
import React from 'react';

export const DailySummaryPage = () => {
  const params = useParams();
  const { data } = useQuery({
    queryKey: ['DAILYMOOD_SUMMARY_QUERY'],
    queryFn: () => request(GRAPHQL_ENDPOINT, DAILYMOOD_SUMMARY_QUERY, { dailyMoodId: params.id ?? '' })
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
            <Box sx={{
              mt: 2, display: 'flex', flexDirection: 'row',
              alignItems: 'center', justifyContent: 'start'
            }}>
              <MoodIcon moodType={data?.dailyMood?.data?.attributes?.mood ?? null} />
              {data?.dailyMood?.data?.attributes?.mood &&
                <Typography component='p' sx={{ml:2}}>
                  {MOODS[data?.dailyMood?.data?.attributes?.mood]}
                </Typography>
              }
            </Box>
          </Grid>
          <Grid xs={6}>
            <Typography component='h3' variant='h5'>
              Tracked Emotions
            </Typography>
          </Grid>
          <Grid xs={12} md={12}>
            <Typography component='h3' variant='h5'>
              Priorities satisfied this day
            </Typography>
            {/*// ToDO: Uncomment once priority saving works correct*/}
            {/*{data?.dailyMood?.data?.attributes?.satisfiedPriorities?.data && data?.dailyMood?.data?.attributes?.satisfiedPriorities?.data.map((priority) => (*/}
            {/*  */}
            {/*  // <PriorityCard priority={priority} />*/}
            {/*))}*/}
          </Grid>
          <Grid xs={12} md={12}>
            <Typography component='h3' variant='h5' >
              Note of the day
            </Typography>
            <NoteCard noteId={data?.dailyMood?.data?.attributes?.note?.data?.id ?? ''}/>
          </Grid>
        </Grid>
        <BackButton />
      </Box>
    </Container>
  );
};
