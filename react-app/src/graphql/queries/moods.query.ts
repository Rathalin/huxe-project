import { graphql } from "../generated/gql";

export const MOODS_QUERY = graphql(`
  query Moods {
    moods(sort: "displayOrder:ASC") {
      data {
        id
        attributes {
          iconName
          displayOrder
        }
      }
    }
  }
`);
