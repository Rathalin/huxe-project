import { graphql } from "../generated/gql";

export const CALENDER_QUERY = graphql(`
  query DailyMoodsCalender {
    dailyMoods {
      data {
        id
        attributes {
          createdAt
          mood
          strongEmotions {
            data {
              id
            }
          }
        }
      }
    }
  }
`);