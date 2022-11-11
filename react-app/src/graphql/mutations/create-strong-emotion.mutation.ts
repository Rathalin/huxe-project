import { graphql } from "../generated";

export const CREATE_STRONG_EMOTION_MUTATION = graphql(`
  mutation CreateStrongEmotion($strongEmotion: StrongEmotionInput!) {
    createStrongEmotion(data: $strongEmotion) {
      data {
        id
      }
    }
  }
`);

