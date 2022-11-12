import { graphql } from "../generated";

export const SET_PRIORITY_ACTIVE = graphql(`
  mutation SetPriorityActive($priorityId: ID!, $priorityInput: PriorityInput!) {
    updatePriority(id: $priorityId, data: $priorityInput) {
      data {
        attributes {
          active
        }
      }
    }
  }
`);
