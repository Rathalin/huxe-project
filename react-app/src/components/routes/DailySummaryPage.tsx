import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { BackButton } from '../ui/buttons/BackButton';
export const DailySummaryPage = () => {

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
    </Container>
  );
};
