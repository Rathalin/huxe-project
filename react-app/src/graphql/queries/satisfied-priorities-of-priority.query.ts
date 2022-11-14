import { graphql } from "../generated";

export const SATISFIED_PRIORITY_OF_PRIORITY_QUERY = graphql(`
  query SatisfiedPrioritiesOfPriority($dailyMoodId: ID!, $priorityId: ID!) {
    satisfiedPriorities(
      filters: {
        dailyMood: { id: { eq: $dailyMoodId } }
        priority: { id: { eq: $priorityId } }
      }
    ) {
      data {
        id
      }
    }
  }
`);
