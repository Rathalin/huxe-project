import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { BackButton } from '../ui/buttons/BackButton';
import { SelectMood } from '../ui/SelectMood';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../graphql/endpoint';
import { NOTE_EXISTS_QUERY } from '../../graphql/queries/note-exists.query';
import { useDailyMoodIdStore } from '../../stores/dailyMoodStore';
import { NoteCard } from '../ui/notes/NoteCard';
import { CREATE_NOTE_MUTATION } from '../../graphql/mutations/create-note.mutation';
import { SET_NOTE_OF_DAILY_MOOD_MUTATION } from '../../graphql/mutations/set-note-of-daily-mood.mutation';
import { SatisfiedPriorities } from '../ui/priority/SatisfiedPriorities';
import { Loading } from '../ui/loading/Loading';
import { NewNote } from '../ui/notes/NewNote';
import Grid from '@mui/material/Unstable_Grid2';

export const TrackMoodPage = () => {
  const { dailyMoodId } = useDailyMoodIdStore();
  const queryClient = useQueryClient();
  const { data, isLoading: isLoadingNoteExists } = useQuery({
    queryKey: ['NOTE_EXISTS_QUERY', dailyMoodId],
    queryFn: () => request(GRAPHQL_ENDPOINT, NOTE_EXISTS_QUERY, { dailyMoodId: dailyMoodId ?? '' })
  });
  const { mutate: createNote, isLoading: isLoadingCreateNote } = useMutation({
    mutationKey: ['CREATE_NOTE_MUTATION'],
    mutationFn: (text: string) => request(GRAPHQL_ENDPOINT, CREATE_NOTE_MUTATION, { note: { text } }),
    onSuccess: (data, _variables) => {
      setNoteOfDailyMood(data.createNote?.data?.id ?? '');
    }
  });
  const { mutate: setNoteOfDailyMood, isLoading: isLoadingSetNote } = useMutation({
    mutationKey: ['SET_NOTE_OF_DAILY_MOOD_MUTATION'],
    mutationFn: (noteId: string) => request(GRAPHQL_ENDPOINT, SET_NOTE_OF_DAILY_MOOD_MUTATION, {
      dailyMoodId: dailyMoodId ?? '',
      dailyMoodInput: { note: noteId }
    }),
    onSuccess: () => {
      queryClient.invalidateQueries(['NOTE_EXISTS_QUERY', dailyMoodId]);
    }
  });
  const isLoading = isLoadingNoteExists || isLoadingCreateNote || isLoadingSetNote;

  const noteId = data?.dailyMood?.data?.attributes?.note?.data?.id;
  const noteExists = noteId != null;

  return (
    <Container component='main' maxWidth='md'>
      <Box sx={{
        mt: 5, display: 'flex', flexDirection: 'column',
        alignItems: 'center', minHeight: '80vh'
      }}>
        <Typography component='h1' variant='h3'>
          Track Mood
        </Typography>
        <Grid container spacing={1}>
          <Grid xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <SelectMood />
          </Grid>
          <Grid xs={12} md={12}>
            <Typography component='h3' variant='h5'>
              Priorities Satisfied today
            </Typography>
            <SatisfiedPriorities />
          </Grid>
          <Grid xs={12} md={12}>
            {isLoading && <Loading />}
            {(!isLoading && noteExists) ?
              <NoteCard noteId={noteId} /> :
              <NewNote onAddNote={createNote} buttonLabel={'Save note'} hidden={isLoading} />
            }
          </Grid>
        </Grid>
        <BackButton />
      </Box>
    </Container>
  );
};
