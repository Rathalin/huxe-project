import { graphql } from "../generated";

export const SET_NOTE_OF_DAILY_MOOD_MUTATION = graphql(`
  mutation UpdateDailyMood($dailyMoodId: ID!, $dailyMoodInput: DailyMoodInput!) {
    updateDailyMood(id: $dailyMoodId, data: $dailyMoodInput) {
      data {
        id
      }
    }
  }
`);
