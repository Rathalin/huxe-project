import { graphql } from "../generated";

export const SET_PRIORITY_ACTIVITY_MUTATION = graphql(`
  mutation SetPriorityActivity($priorityId: ID!, $active: Boolean!) {
    updatePriority(id: $priorityId, data: { active: $active }) {
      data {
        id
      }
    }
  }
`);
