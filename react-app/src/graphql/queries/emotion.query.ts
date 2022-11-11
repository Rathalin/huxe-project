import { graphql } from '../generated';

export const EMOTION_QUERY = graphql(`
  query Emotion($emotionId: ID!) {
    strongEmotion(id: $emotionId) {
      data {
        id
        attributes {
          emotions {
            data {
              id
              attributes {
                name
              }
            }
          }
          note {
            data {
              id
              attributes {
                text
              }
            }
          }
        }
      }
    }
  }
`);
