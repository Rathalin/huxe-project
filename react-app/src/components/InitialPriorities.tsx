import React, { useState } from 'react';
import { useStore } from '../stores/useStore';
import { Box, Button, Container, hslToRgb, TextField, Typography } from '@mui/material';
import { emitKeypressEvents } from 'readline';
import { useAuthStore } from '../stores/authStore';

export const InitialPriorities = () => {
  const { addNote } = useStore();
  const [note, setNote] = useState('');
  const { user } = useAuthStore();
  const loggedIn = user != null;


  return (
    <Container maxWidth={false}>
      {loggedIn && (
        <Box sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Typography variant='h6' component='h1' sx={{ flexGrow: 1 }}>
            Hello, {user.username}
          </Typography>
          <Typography variant='h6' component='p' sx={{ flexGrow: 1 }}>
            Enter your top 3 priorities at the moment
          </Typography>
          <TextField
            //InputLabelProps={{shrink: false}}
            sx={{ border: 3, borderRadius: 3, '& legend': { display: 'none' }, '& fieldset': { top: 0 } }}
            id='outlined-basic'
            label='Note'
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
        </Box>
      )}

    </Container>
  );
};
