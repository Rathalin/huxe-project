import React, { useState } from 'react';
import { useStore } from '../stores/useStore';
import { Button, Container, hslToRgb, TextField } from '@mui/material';
import { emitKeypressEvents } from 'readline';

export const NewPriority = () => {
  const { addNote } = useStore();
  const [note, setNote] = useState('');

  return (
    <Container maxWidth={false}>
      <h4>Add a Note</h4>
      <TextField
        //InputLabelProps={{shrink: false}}
        sx={{ border: 3, borderRadius: 3, '& legend': { display: 'none' }, '& fieldset': { top: 0 } }}
        id='outlined-basic'
        label='Note'
        multiline
        rows={4}
        fullWidth
        color="secondary"
        focused
        variant='filled'
        onChange={(e) => setNote(e.target.value)}
        value={note} />

      <Button variant='outlined' onClick={() => {
        if (note.length) {
          addNote(note);
          setNote('');
        }
      }}>Add Note</Button>

    </Container>
  );
};
