import { graphql } from '../generated/';

export const PRIORITIES_QUERY = graphql(`
  query Priorities {
    priorities {
      data {
        id
        attributes {
          active
        }
      }
    }
  }
`);
