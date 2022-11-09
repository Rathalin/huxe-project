import { graphql } from '../generated';

export const GRAPH_QUERY = graphql(`
  query DailyMoodsGraph {
    dailyMoods {
      data {
        id
        attributes {
          createdAt
          mood
        }
      }
    }
  }
`);
