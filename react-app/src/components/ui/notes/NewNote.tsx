import { useState } from 'react';
import { Box, Button, Container, TextField } from '@mui/material';

type NewNoteProps = {
  onAddNote(text: string): void,
};

export const NewNote = ({ onAddNote }: NewNoteProps) => {
  const [note, setNote] = useState('');

  return (
    <Container maxWidth='sm' sx={{ margin: '20px 0px' }}>
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

      <Box sx={{ display: 'flex' }}>
        <Button variant='outlined' onClick={() => {
          if (note.trim().length > 0) {
            onAddNote(note);
            setNote('');
          }
        }}>Add Note</Button>
      </Box>
    </Container>
  );
};
