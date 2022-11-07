import { graphql } from "../generated/gql";

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
