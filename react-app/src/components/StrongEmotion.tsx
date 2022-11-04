import { NewNote } from './NewNote';
import { Container } from '@mui/material';
import { NewEmotion } from './NewEmotion';
import { SpecifyEmotion } from './SpecifyEmotion';
import { Notes } from './Notes';

export const StrongEmotion = () => {

  return (
    <Container maxWidth='xl'>
      <NewEmotion />
      <SpecifyEmotion />
      <NewNote />
      <Notes />
    </Container>
  );
};
