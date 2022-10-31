import { useStore } from '../store/useStore';
import { Card, CardContent, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export const Moods = () => {
  const { moods } = useStore();

  return (
    <Container maxWidth='xs'>
      <Grid container spacing={3}>
        {moods.map((mood) => (
          <Grid key={mood.id} xs={6} md={4}>
            <Card variant='outlined'>
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {mood.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {mood.date.toString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );

};
