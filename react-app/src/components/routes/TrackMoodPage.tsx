import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { PrioritiesPage } from './PrioritiesPage';
import { NewNote } from '../NewNote';
import { BackButton } from '../ui/buttons/BackButton';
import { SelectMood } from '../SelectMood';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../graphql/endpoint';
import { NOTE_EXISTS_QUERY } from '../../graphql/queries/note-exists.query';
import { useDailyMoodIdStore } from '../../stores/dailyMoodStore';
import { ShowNote } from '../ShowNote';

export const TrackMoodPage = () => {
  const { dailyMoodId } = useDailyMoodIdStore();
  const { data } = useQuery({
    queryKey: ['NOTE_EXISTS_QUERY', dailyMoodId],
    queryFn: () => request(GRAPHQL_ENDPOINT, NOTE_EXISTS_QUERY, { dailyMoodId: dailyMoodId ?? '' }),
  });

  const noteId = data?.dailyMood?.data?.attributes?.note?.data?.id;
  const noteExists = noteId != null;

  return (
    <Container sx={{ mt: 3, display: 'flex', gap: 1 }}>
      <Box sx={{
        mt: 3, display: 'flex', flexDirection: 'column'
      }}>
        <SelectMood />
        <Typography component='h3' variant='h5'>
          Priorities Satisfied today
        </Typography>
        <PrioritiesPage />
        {noteExists ?
          <ShowNote noteId={noteId} /> :
          <NewNote />
        }
        <BackButton />
      </Box>
    </Container>
  );
};
