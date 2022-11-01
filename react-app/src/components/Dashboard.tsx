import { MoodCalender } from './MoodCalender';
import { MoodGraph } from './MoodGraph';
import React from 'react';
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

export const Dashboard = () => {
  const navigate = useNavigate();
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
            <Priorities />
          </Grid>
          <Grid xs={12} md={6}>
            <Typography component='h3' variant='h5'>
              Track Mood
            </Typography>
            <AddButton Icon={() => <SentimentSatisfiedAltIcon  fontSize="large" />} onClick={() => { navigate("/newMood") }} />
          </Grid>
          <Grid xs={12} md={6}>
            <Typography component='h3' variant='h5'>
              Strong Emotion
            </Typography>
            <AddButton Icon={() => <ThunderstormIcon  fontSize="large" />} onClick={() => { navigate("/newEmotion") }} />
          </Grid>
          <Grid xs={12} md={12}>
            <Grid xs={12} md={6}>
              <Typography component='h3' variant='h5'>
                {monthNames[date.getMonth()]}
              </Typography>
              <MoodCalender year={date.getFullYear()} month={date.getMonth() +1} />
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
