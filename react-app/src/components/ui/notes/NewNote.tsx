import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

type NewNoteProps = {
  onAddNote(text: string): void,
  hidden?: boolean,
  buttonLabel?: string,
};

export const NewNote = ({ onAddNote, hidden = false, buttonLabel = 'Add Note' }: NewNoteProps) => {
  const [note, setNote] = useState('');

  if (hidden) return null;

  return (
    <Box sx={{ my: 2 }}>
      <h4>Add a Note</h4>
      <TextField
        placeholder='Note'
        sx={{
          border: 3, borderRadius: 3, '& legend': { display: 'none' }, '& fieldset': { top: 0 }, '& .MuiOutlinedInput-root': {
            color: '#fff'
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
        }}>{buttonLabel}</Button>
      </Box>
    </Box>
  );
};
