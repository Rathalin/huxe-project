import { NewNote } from './NewNote';
import { NewMood } from './NewMood';
import React from 'react';
import { Container } from '@mui/material';

export const StrongEmotion = () => {

  return (
    <Container  maxWidth='xl'>
      <NewNote />
    </Container>
  );
};