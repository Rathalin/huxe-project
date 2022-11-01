import { useStore } from '../store/useStore';
import { Card, CardContent, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export const Priorities = () => {
  const { priorities } = useStore();

  return (
    <Container maxWidth='xs'>
      <Grid container spacing={3}>
        {priorities.map((priority) => (
          <Grid key={priority.id} xs={6} md={4}>
            <Card variant='outlined'>
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {priority.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {priority.weeklyGoal}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );

};
