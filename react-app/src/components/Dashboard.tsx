import { Moods } from './Moods';
import { NewMood } from './NewMood';
import React from 'react';
import { Container } from '@mui/material';

export const Dashboard = () => {

  return (
    <Container maxWidth='xs'>
      <Moods />
      <NewMood />
    </Container>
  );
};
