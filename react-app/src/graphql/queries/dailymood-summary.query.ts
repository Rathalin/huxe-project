import { graphql } from '../generated';

export const DAILYMOOD_SUMMARY_QUERY = graphql(`
  query DailyMoodSummary($dailyMoodId: ID!) {
    dailyMood(id: $dailyMoodId) {
      data {
        attributes {
          mood
          note {
            data {
              attributes {
                text
              }
            }
          }
          satisfiedPriorities {
            data {
              id
              attributes {
                title
                iconName
              }
            }
          }
          strongEmotions {
            data {
              id
              attributes {
                emotions {
                  data {
                    id
                    attributes {
                      name
                    }
                  }
                }
                note {
                  data {
                    id
                    attributes {
                      text
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`);
