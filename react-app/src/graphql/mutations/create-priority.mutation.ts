import { graphql } from "../generated";

export const CREATE_PRIORITY_MUTATION = graphql(`
  mutation CreatePriority($note: NoteInput!) {
    createNote(data: $note) {
      data {
        id
      }
    }
  }
`);
