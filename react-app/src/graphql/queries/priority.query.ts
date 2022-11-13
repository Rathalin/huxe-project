import { graphql } from '../generated/';

export const PRIORITY_QUERY = graphql(`
  query Priority($priorityId: ID!) {
    priority(id: $priorityId) {
      data {
        id
        attributes {
          title
          weeklyGoal
          image {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
`);
