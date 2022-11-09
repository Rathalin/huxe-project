import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { PrioritiesPage } from './PrioritiesPage';
import { NewNote } from '../ui/notes/NewNote';
import { BackButton } from '../ui/buttons/BackButton';
import { SelectMood } from '../ui/SelectMood';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../graphql/endpoint';
import { NOTE_EXISTS_QUERY } from '../../graphql/queries/note-exists.query';
import { useDailyMoodIdStore } from '../../stores/dailyMoodStore';
import { ShowNote } from '../ui/notes/ShowNote';
import { CREATE_NOTE_MUTATION } from '../../graphql/mutations/create-note.mutation';
import { SET_NOTE_OF_DAILY_MOOD_MUTATION } from '../../graphql/mutations/set-note-of-daily-mood.mutation';
import { Loading } from '../ui/loading/Loading';

export const TrackMoodPage = () => {
  const { dailyMoodId } = useDailyMoodIdStore();
  const queryClient = useQueryClient();
  const { data, isLoading: isLoadingNoteExists } = useQuery({
    queryKey: ['NOTE_EXISTS_QUERY', dailyMoodId],
    queryFn: () => request(GRAPHQL_ENDPOINT, NOTE_EXISTS_QUERY, { dailyMoodId: dailyMoodId ?? '' }),
  });
  const { mutate: createNote, isLoading: isLoadingCreateNote } = useMutation({
    mutationKey: ['CREATE_NOTE_MUTATION'],
    mutationFn: (text: string) => request(GRAPHQL_ENDPOINT, CREATE_NOTE_MUTATION, { note: { text } }),
    onSuccess: (data, _variables) => {
      setNoteOfDailyMood(data.createNote?.data?.id ?? '');
    },
  });
  const { mutate: setNoteOfDailyMood, isLoading: isLoadingSetNote } = useMutation({
    mutationKey: ['SET_NOTE_OF_DAILY_MOOD_MUTATION'],
    mutationFn: (noteId: string) => request(GRAPHQL_ENDPOINT, SET_NOTE_OF_DAILY_MOOD_MUTATION, {
      dailyMoodId: dailyMoodId ?? '',
      dailyMoodInput: { note: noteId },
    }),
    onSuccess: () => {
      queryClient.invalidateQueries(['NOTE_EXISTS_QUERY', dailyMoodId]);
    },
  });
  const isLoading = isLoadingNoteExists || isLoadingCreateNote || isLoadingSetNote;

  const noteId = data?.dailyMood?.data?.attributes?.note?.data?.id;
  const noteExists = noteId != null;

  return (
    <Container>
      <Box sx={{
        mt: 5, display: 'flex', flexDirection: 'column',
        alignItems: 'center', minHeight: '80vh'
      }}>
        <SelectMood />
        <Typography component='h3' variant='h5'>
          Priorities Satisfied today
        </Typography>
        <PrioritiesPage />
        {isLoading && <Loading />}
        {(!isLoading && noteExists) ?
          <ShowNote noteId={noteId} /> :
          <NewNote onAddNote={createNote} hidden={isLoading} />
        }
        <BackButton />
      </Box>
    </Container>
  );
};
