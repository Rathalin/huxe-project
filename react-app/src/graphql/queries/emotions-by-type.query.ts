import { graphql } from '../generated';

export const EMOTIONS_BY_TYPE_QUERY = graphql(`
  query EmotionsByType($emotionType: String!) {
    emotions(filters: { emotionType: { eqi: $emotionType } }) {
      data {
        attributes {
          name
        }
      }
    }
  }
`);
