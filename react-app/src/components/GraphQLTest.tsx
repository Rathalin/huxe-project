import { gql, useQuery } from '@apollo/client';
import { graphql } from '../gql/gql';

export function GraphQLTest() {
  const { loading, error, data } = useQuery(graphql(`
      query MoodPriority {
        moodPriorities {
          data {
            attributes {
              Title
              IconName
              WeeklyGoal
              Test
            }
          }
        }
      }
    `));

  if (loading) return (
    <div>'Loading...'</div>
  );
  if (error) return (
    <div>`Error! ${error.message}`</div>
  );

  return (
    <ul>{data?.moodPriorities?.data.map(moodPriority => moodPriority.attributes).map(attributes => (
      <li key={attributes?.Title}>
        <div>{attributes?.Title}</div>
        <div>{attributes?.IconName}</div>
      </li>
    ))}</ul>
  );
}