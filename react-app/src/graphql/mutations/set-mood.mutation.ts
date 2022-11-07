import { graphql } from "../generated";

export const SET_MOOD_MUTATION = graphql(`
  mutation SetMood($dailyMoodId: ID!, $dailyMoodInput: DailyMoodInput!) {
    updateDailyMood(id: $dailyMoodId, data: $dailyMoodInput) {
      data {
        attributes {
          mood {
            data {
              id
              attributes {
                iconName
              }
            }
          }
        }
      }
    }
  }
`);
