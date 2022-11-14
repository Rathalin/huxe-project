import { graphql } from "../generated";

export const CREATE_SATISFIED_PRIORITY_MUTATION = graphql(`
  mutation CreateSatisfiedPriority($satisfiedPriority: SatisfiedPriorityInput!) {
    createSatisfiedPriority(data: $satisfiedPriority) {
      data {
        id
      }
    }
  }
`);
