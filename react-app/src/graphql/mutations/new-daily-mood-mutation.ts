import { graphql } from "../generated";

export const CREATE_DAILY_MOOD_MUTATION = graphql(`
  mutation CreateEmDailyMood($dailyMoodInput: DailyMoodInput!) {
    createDailyMood(data: $dailyMoodInput) {
      data {
        id
      }
    }
  }
`);
