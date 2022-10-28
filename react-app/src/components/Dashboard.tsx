import { Moods } from './Moods';
import { NewMood } from './NewMood';
import { Container } from '@mui/material';

export const Dashboard = () => {
  return (
    <Container maxWidth='xs'>
      <Moods />
      <NewMood />
    </Container>
  );
};
