import { graphql } from "../generated";

export const CREATE_PRIORITY_MUTATION = graphql(`
  mutation CreatePriority($priority: PriorityInput!) {
    createPriority(data: $priority) {
      data {
        id
      }
    }
  }
`);
