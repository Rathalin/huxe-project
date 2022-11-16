import { Box, Card, CardContent, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../../graphql/endpoint';
import { NOTE_QUERY } from '../../../graphql/queries/note.query';
import NotesIcon from '@mui/icons-material/Notes';

type ShowNoteProps = {
  noteId: string,
};

export const NoteCard = ({ noteId }: ShowNoteProps) => {
  const { data } = useQuery({
    queryKey: ['NOTE_QUERY', noteId],
    queryFn: () => request(GRAPHQL_ENDPOINT, NOTE_QUERY, { noteId })
  });

  const note = {
    id: data?.note?.data?.id,
    text: data?.note?.data?.attributes?.text,
    createdAt: data?.note?.data?.attributes?.createdAt as string | null | undefined
  };

  return (
    <Card variant='outlined'
      sx={{
        border: 3,
        borderColor: '#fff',
        borderRadius: 3,
        backgroundColor: '#323463',
        my: 2
      }}>
      <CardContent sx={{ textAlign: 'left' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <NotesIcon sx={{ mr: 2 }} />
          <Typography component='p' color='text.primary'>
            {note.text}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
