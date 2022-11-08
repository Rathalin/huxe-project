import { useStore } from '../../stores/useStore';
import { Card, CardContent, Container, Typography } from '@mui/material';
import { ShowNote } from './ShowNote';

type ShowNotesProps = {
  noteIds: string[],
};

export const ShowNotes = ({ noteIds }: ShowNotesProps) => {
  return (
    <Container maxWidth='xl'>
      {noteIds.map((id) => (
        <ShowNote noteId={id} />
      ))}
    </Container>
  );
}
