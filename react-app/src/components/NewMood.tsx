import { useState } from 'react';
import { useStore } from '../store/useStore';
import { Button, Container, TextField } from '@mui/material';

export const NewMood = () => {
  const { addMood } = useStore();
  const [name, setName] = useState('');

  return (
    <Container maxWidth='xs' sx={{ mt: 3, display: 'flex', gap: 1 }}>
      <TextField id='outlined-basic' label='MoodName' variant='outlined' onChange={(e) => setName(e.target.value)}
        value={name} />
      <Button variant='outlined' onClick={() => {
        if (name.length) {
          addMood(name);
          setName('');
        }
      }}>Add Mood</Button>
    </Container>
  );
};
