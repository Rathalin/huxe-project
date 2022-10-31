import { Moods } from './Moods';
import { NewMood } from './NewMood';
import { MoodCalender } from './MoodCalender';
import { MoodGraph } from './MoodGraph';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import { NewEmotion } from './NewEmotion';
import { Notes } from './Notes';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


export const Dashboard = () => {
  const date = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
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
            <Moods />
          </Grid>
          <Grid xs={12} md={6}>
            <Typography component='h3' variant='h5'>
              Track Mood
            </Typography>
            <NewMood />
          </Grid>
          <Grid xs={12} md={6}>
            <Typography component='h3' variant='h5'>
              Strong Emotion
            </Typography>
            <NewEmotion />
          </Grid>
          <Grid xs={12} md={12}>
            <Grid xs={12} md={6}>
              <Typography component='h3' variant='h5'>
                {monthNames[date.getMonth()]}
              </Typography>
              <MoodCalender />
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
