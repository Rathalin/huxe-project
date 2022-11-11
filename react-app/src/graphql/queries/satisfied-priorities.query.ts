import { graphql } from "../generated";

export const SATISFIED_PRIORITIES_QUERY = graphql(`
  query SatisfiedPriorities($dailyMoodId: ID!) {
    dailyMood(id: $dailyMoodId) {
      data {
        attributes {
          satisfiedPriorities(filters: { priority: { active: { eq: true } } }) {
            data {
              id
              attributes {
                priority {
                  data {
                    attributes {
                      weeklyGoal
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`);
