import { Box, Checkbox } from '@mui/material';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import request from 'graphql-request';
import { Fragment } from 'react';
import { GRAPHQL_ENDPOINT } from '../../graphql/endpoint';
import { Enum_Dailymood_Mood } from '../../graphql/generated/graphql';
import { SET_MOOD_MUTATION } from '../../graphql/mutations/set-mood.mutation';
import { SELECTED_MOOD_QUERY } from '../../graphql/queries/selected-mood.query';
import { useDailyMoodIdStore } from '../../stores/daily-mood.store';
import { MoodIcon } from './MoodIcon';

const moodOptions: Enum_Dailymood_Mood[] = [
  Enum_Dailymood_Mood.VeryGood,
  Enum_Dailymood_Mood.Good,
  Enum_Dailymood_Mood.Neutral,
  Enum_Dailymood_Mood.Bad,
  Enum_Dailymood_Mood.VeryBad,
];

export const SelectMood = () => {
  const queryClient = useQueryClient();
  const { dailyMoodId } = useDailyMoodIdStore();
  const selectedMoodQueryKey = ['SELECTED_MOOD_QUERY', dailyMoodId];
  const { data } = useQuery({
    queryKey: selectedMoodQueryKey,
    queryFn: () => request(GRAPHQL_ENDPOINT, SELECTED_MOOD_QUERY, { dailyMoodId }),
  });
  const { mutate: setSelectedMood } = useMutation({
    mutationFn: ({ mood }: { mood: Enum_Dailymood_Mood, }) => {
      return request(GRAPHQL_ENDPOINT, SET_MOOD_MUTATION, {
        dailyMoodId: dailyMoodId ?? '',
        dailyMoodInput: {
          mood,
        },
      })
    },
    onSuccess: (_data, _variables) => {
      queryClient.invalidateQueries(selectedMoodQueryKey);
    },
  });

  const selectedMood = data?.dailyMood?.data?.attributes?.mood;

  return (
    <Fragment>
      <Box sx={{
        mt: 3, mb: 5, display: 'flex', flexDirection: 'row',
        alignItems: 'center'
      }}>
        {moodOptions.map((mood) => (
          <Checkbox
            sx={{
              color: '#fff', transform: 'scale(2)', m: 2, '&.MuiButtonBase-root:hover': {
                color: '#EDD99D'
              }
            }}
            disableRipple
            color='secondary'
            key={mood}
            icon={<MoodIcon moodType={mood} />}
            checkedIcon={<MoodIcon moodType={mood} />}
            onChange={() => { setSelectedMood({ mood }) }}
            checked={selectedMood === mood}
          />
        ))}
      </Box>
    </Fragment>
  );
};
