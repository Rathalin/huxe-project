import { graphql } from '../generated/';

export const PRIORITIES_QUERY = graphql(`
  query Priorities {
    priorities(sort: "updatedAt") {
      data {
        id
        attributes {
          active
        }
      }
    }
  }
`);
