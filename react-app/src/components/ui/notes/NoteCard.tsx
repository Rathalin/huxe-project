import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import request from "graphql-request";
import { Fragment } from "react";
import { GRAPHQL_ENDPOINT } from "../../../graphql/endpoint";
import { NOTE_QUERY } from "../../../graphql/queries/note.query";

type ShowNoteProps = {
  noteId: string,
}

export const NoteCard = ({ noteId }: ShowNoteProps) => {
  const { data } = useQuery({
    queryKey: ['NOTE_QUERY', noteId],
    queryFn: () => request(GRAPHQL_ENDPOINT, NOTE_QUERY, { noteId }),
  });

  const note = {
    id: data?.note?.data?.id,
    text: data?.note?.data?.attributes?.text,
    createdAt: data?.note?.data?.attributes?.createdAt as string | null | undefined,
  }

  return (
    <Card variant='outlined'
          sx={{
            border: 3,
            borderColor: '#fff',
            borderRadius: 3,
            backgroundColor: '#323463'
          }}>
      <CardContent sx={{ textAlign: 'left'}}>
        <Typography component="p" color='text.primary'>
          {note.text}
        </Typography>
      </CardContent>
    </Card>
  );
}
