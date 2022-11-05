import { graphql } from "../generated";

export const DAILY_MOODS_BETWEEN_QUERY = graphql(`
  query DailyMoodsBetween($startDate: DateTime!, $endDate: DateTime!) {
    dailyMoods(filters: { createdAt: { gte: $startDate, lt: $endDate } }) {
      data {
        id
      }
    }
  }
`);
