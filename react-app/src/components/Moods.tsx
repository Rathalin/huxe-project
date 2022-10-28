import { useStore } from '../store/useStore';
import { Card, CardContent, Container, Typography } from '@mui/material';

export const Moods = () => {
  const { moods } = useStore();

  return (
    <Container maxWidth='xs'>
      {moods.map((mood) => (
        <Card variant="outlined">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {mood.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {mood.date.toString()}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );

}
