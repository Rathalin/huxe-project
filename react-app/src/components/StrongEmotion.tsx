import { NewNote } from './NewNote';
import { NewMood } from './NewMood';
import React from 'react';
import { Container } from '@mui/material';
import { NewEmotion } from './NewEmotion';
import { SpecifyEmotion } from './SpecifyEmotion';
import { Moods } from './Moods';
import { Notes } from './Notes';

export const StrongEmotion = () => {

  return (
    <Container  maxWidth='xl'>
      <NewEmotion/>
      <SpecifyEmotion/>
      <NewNote />
      <Notes />
    </Container>
  );
};