import { graphql } from '../generated';

export const RECENT_NOTES_QUERY = graphql(`
  query RecentNote($limit: Int) {
    notes(sort: "createdAt:DESC", pagination: { limit: $limit }) {
      data {
        id
        attributes {
          text
        }
      }
    }
  }
`);
