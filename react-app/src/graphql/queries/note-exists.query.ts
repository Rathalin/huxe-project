import { graphql } from "../generated/gql";

export const NOTE_EXISTS_QUERY = graphql(`
  query DailyMoodHasNote($dailyMoodId: ID!) {
    dailyMood(id: $dailyMoodId) {
      data {
        attributes {
          note {
            data {
              id
            }
          }
        }
      }
    }
  }
`);
