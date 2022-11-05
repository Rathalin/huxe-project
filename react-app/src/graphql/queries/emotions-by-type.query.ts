import { graphql } from "../generated/gql";

export const EMOTIONS_BY_TYPE_QUERY = graphql(`
  query EmotionsByType($emotionType: String!) {
    emotions(filters: { emotionType: { name: { eqi: $emotionType } } }) {
      data {
        attributes {
          name
        }
      }
    }
  }
`);
