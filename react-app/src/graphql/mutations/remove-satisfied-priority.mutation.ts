import { graphql } from "../generated";

export const REMOVE_SATISFIED_PRIORITY_MUTATION = graphql(`
  mutation RemoveSatisfiedPriority($satisfiedPriorityId: ID!) {
    deleteSatisfiedPriority(id: $satisfiedPriorityId) {
      data {
        id
      }
    }
  }
`);
