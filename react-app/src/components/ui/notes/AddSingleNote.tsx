import { useMutation } from "@tanstack/react-query";
import request from "graphql-request";
import { GRAPHQL_ENDPOINT } from "../../../graphql/endpoint";
import { CREATE_NOTE_MUTATION } from "../../../graphql/mutations/create-note.mutation";
import { Loading } from "../loading/Loading";
import { NewNote } from "./NewNote";
import { NoteCard } from "./NoteCard";

type AddSingleNoteProps = {
  noteId: string | null,
  setNoteId: (id: string) => void,
};

export const AddSingleNote = ({ noteId, setNoteId }: AddSingleNoteProps) => {
  const { mutate: createNote, isLoading: isLoadingCreateNote } = useMutation({
    mutationKey: ['CREATE_NOTE_MUTATION'],
    mutationFn: (text: string) => request(GRAPHQL_ENDPOINT, CREATE_NOTE_MUTATION, { note: { text } }),
    onSuccess: (data) => setNoteId(data.createNote?.data?.id ?? ''),
  });

  if (isLoadingCreateNote) return <Loading />;
  if (noteId != null) return <NoteCard noteId={noteId} />;
  return <NewNote onAddNote={createNote} buttonLabel={'Save note'} hidden={isLoadingCreateNote} />;
};
