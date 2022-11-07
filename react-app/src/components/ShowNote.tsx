import { Typography } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import request from "graphql-request";
import { Fragment } from "react";
import { GRAPHQL_ENDPOINT } from "../graphql/endpoint";
import { NOTE_QUERY } from "../graphql/queries/note.query";
import { useDailyMoodIdStore } from "../stores/dailyMoodStore";

type ShowNoteProps = {
  noteId: string,
}

export const ShowNote = ({ noteId }: ShowNoteProps) => {
  const { data } = useQuery({
    queryKey: ['NOTE_QUERY', noteId],
    queryFn: () => request(GRAPHQL_ENDPOINT, NOTE_QUERY, { noteId }),
  });

  const note = {
    id: data?.note?.data?.id,
    text: data?.note?.data?.attributes?.text,
  }

  return (
    <Fragment>
      <Typography component='h3' variant='h5'>
        Note
      </Typography>
      <Typography component='p'>
        {note.text}
      </Typography>
    </Fragment>
  );
}