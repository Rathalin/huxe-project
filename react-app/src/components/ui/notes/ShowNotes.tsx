import { Box } from '@mui/material';
import { NoteCard } from './NoteCard';

type ShowNotesProps = {
  noteIds: string[],
};

export const ShowNotes = ({ noteIds }: ShowNotesProps) => {
  return (
    <Box sx={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      {noteIds.map((id) => (
        <NoteCard key={id} noteId={id} />
      ))}
    </Box>
  );
};
