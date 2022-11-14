import { graphql } from "../generated";

export const SATISFIED_PRIORITIES_BETWEEN_QUERY = graphql(`
  query SatisfiedPrioritesBetween(
    $priorityId: ID!
    $dailyMoodId: ID!
    $beginDate: DateTime!
    $endDate: DateTime!
  ) {
    satisfiedPriorities(
      filters: {
        priority: { id: { eq: $priorityId } }
        dailyMood: {
          id: { eq: $dailyMoodId }
          createdAt: { gte: $beginDate, lt: $endDate }
        }
      }
    ) {
      data {
        id
      }
    }
  }
`);
