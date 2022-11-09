import { Container } from '@mui/material';
import { ShowNote } from './ShowNote';

type ShowNotesProps = {
  noteIds: string[],
};

export const ShowNotes = ({ noteIds }: ShowNotesProps) => {
  return (
    <Container maxWidth='xl'>
      {noteIds.map((id) => (
        <ShowNote key={id} noteId={id} />
      ))}
    </Container>
  );
}
