import { graphql } from '../generated';

export const SELECTED_MOOD_QUERY = graphql(`
  query SelectedMood($dailyMoodId: ID) {
    dailyMood(id: $dailyMoodId) {
      data {
        attributes {
          mood
        }
      }
    }
  }
`);
