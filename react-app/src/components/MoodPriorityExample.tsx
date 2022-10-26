import { gql, useQuery } from '@apollo/client';
import { graphql } from '../graphql';

export function MoodPriorityExample() {
  const { loading, error, data } = useQuery(graphql(`
      query MoodPriority {
        moodPriorities {
          data {
            attributes {
              Title
              IconName
              WeeklyGoal
              Notes {
                data {
                  attributes {
                    Text
                  }
                }
              }
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

  const moodPriorities = data!.moodPriorities!.data.map(moodPriority => moodPriority.attributes!);
  return (
    <p>
      {moodPriorities.map(moodPriority => (
        <div key={moodPriority.Title}>
          <h1>{moodPriority.Title}</h1>
          <div>Weekly goal: {moodPriority.WeeklyGoal}x</div>
          {(moodPriority.Notes?.data.length ?? 0) > 0 && (
            <p>Notes:
              {moodPriority.Notes?.data.map(note => (
                <div>{note.attributes?.Text}</div>
              ))}
            </p>
          )}
        </div>
      ))}
    </p>
  );
}
