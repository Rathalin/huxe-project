import { graphql } from "../generated/gql";

export const NOTE_QUERY = graphql(`
  query Note($noteId: ID!) {
    note(id: $noteId) {
      data {
        id
        attributes {
          text
          createdAt
        }
      }
    }
  }
`);
