import { graphql } from '../generated';

export const DAILY_MOODS_QUERY = graphql(`
  query DailyMoods {
    dailyMoods {
      data {
        id
        attributes {
          mood
        }
      }
    }
  }
`);
