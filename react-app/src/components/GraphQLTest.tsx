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
            }
          }
        }
      }
    `));
  const moodPriorities = data!.moodPriorities!.data.map(moodPriority => moodPriority.attributes!);

  if (loading) return (
    <div>'Loading...'</div>
  );
  if (error) return (
    <div>`Error! ${error.message}`</div>
  );

  return (
    <ul>{moodPriorities.map(moodPriority => (
      <li key={moodPriority.Title}>
        <div>{moodPriority.Title}</div>
        <div>{moodPriority.IconName}</div>
        <div>{moodPriority.WeeklyGoal}</div>
      </li>
    ))}</ul>
  );
}