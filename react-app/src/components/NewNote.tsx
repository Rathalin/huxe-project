import { useState } from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../graphql/endpoint';
import { CREATE_NOTE_MUTATION } from '../graphql/mutations/create-note.mutation';
import { SET_NOTE_OF_DAILY_MOOD_MUTATION } from '../graphql/mutations/set-note-of-daily-mood.mutation';
import { useDailyMoodIdStore } from '../stores/dailyMoodStore';
import { Loading } from './ui/loading/Loading';

export const NewNote = () => {
  const { dailyMoodId } = useDailyMoodIdStore();
  const [note, setNote] = useState('');
  const queryClient = useQueryClient();
  const { mutate: createNote, isLoading } = useMutation({
    mutationKey: ['CREATE_NOTE_MUTATION'],
    mutationFn: (text: string) => request(GRAPHQL_ENDPOINT, CREATE_NOTE_MUTATION, { note: { text } }),
    onSuccess: (data, _variables) => {
      setNoteOfDailyMood(data.createNote?.data?.id ?? '');
    },
  });
  const { mutate: setNoteOfDailyMood } = useMutation({
    mutationKey: ['SET_NOTE_OF_DAILY_MOOD_MUTATION'],
    mutationFn: (noteId: string) => request(GRAPHQL_ENDPOINT, SET_NOTE_OF_DAILY_MOOD_MUTATION, {
      dailyMoodId: dailyMoodId ?? '',
      dailyMoodInput: { note: noteId },
    }),
    onSuccess: () => {
      queryClient.invalidateQueries(['NOTE_EXISTS_QUERY', dailyMoodId]);
    },
  });

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

      <Box sx={{ display: 'flex' }}>
        <Button variant='outlined' onClick={() => {
          if (note.trim().length > 0) {
            createNote(note);
            setNote('');
          }
        }}>Add Note</Button>
        {isLoading && <Loading />}
      </Box>
    </Container>
  );
};
