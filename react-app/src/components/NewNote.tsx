import React, { useState } from 'react';
import { useStore } from '../stores/useStore';
import { Button, Container, hslToRgb, TextField } from '@mui/material';

export const NewNote = () => {

  const { addNote } = useStore();
  const [note, setNote] = useState('');

  return (
    <Container maxWidth={false} sx={{ margin: '20px 0px' }}>
      <h4>Add a Note</h4>
      <TextField
        placeholder="Note"
        sx={{
          border: 3, borderRadius: 3, '& legend': { display: 'none' }, '& fieldset': { top: 0 }, "& .MuiOutlinedInput-root": {
            color: "#fff"
          }, bgcolor: '#323463', marginBottom: '30px'
        }}
        id='outlined-basic'
        //label='Note'
        multiline
        rows={4}
        fullWidth
        color='secondary'
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
