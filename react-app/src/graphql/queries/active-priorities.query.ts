import { graphql } from "../generated";

export const ACTIVE_PRIORITIES_QUERY = graphql(`
  query ActivePriorities {
    priorities(filters: { active: { eq: true } }) {
       data {
        id
        attributes {
          weeklyGoal
        }
      }
    }
  }
`);
