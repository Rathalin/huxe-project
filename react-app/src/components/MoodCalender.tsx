import { useStore } from '../store/useStore';
import {Container } from '@mui/material';

export const MoodCalender = () => {
  const { moods } = useStore();

  return (
    <Container maxWidth='xs'>

    </Container>
  );

}
