import { graphql } from "../generated/gql";

export const EMOTION_TYPES_QUERY = graphql(`
  query EmotionTypes {
    emotionTypes {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`);
