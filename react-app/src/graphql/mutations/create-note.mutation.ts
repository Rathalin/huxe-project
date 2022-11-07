import { graphql } from "../generated";

export const CREATE_NOTE_MUTATION = graphql(`
  mutation CreateNote($note: NoteInput!) {
    createNote(data: $note) {
      data {
        id
      }
    }
  }
`);
