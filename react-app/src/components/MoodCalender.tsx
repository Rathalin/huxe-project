import { useStore } from '../stores/useStore';
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { getDaysPerMonth } from '../utils/utils';
import { PropsWithChildren } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { grey } from '@mui/material/colors';
import { MoodIcon } from './MoodIcon';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { graphql } from '../graphql/generated';
import { GRAPHQL_ENDPOINT } from '../graphql/endpoint';
import { CALENDER_QUERY } from '../graphql/queries/calender-query';
import { Loading } from './ui/loading/Loading';

type MoodCalenderProps = {
  month: number
  year: number
};

export const MoodCalender = ({ year, month }: PropsWithChildren<MoodCalenderProps>) => {
  const { data, isLoading } = useQuery({
    queryKey: ['CALENDER_QUERY'],
    queryFn: () => request(GRAPHQL_ENDPOINT, CALENDER_QUERY),
  });

  if (isLoading || data == null) return <Loading />;

  const daysPerMonth = getDaysPerMonth(year, month);

  return (
    <Container maxWidth='xs'>
      <Grid container spacing={1} columns={7}>
        {[...Array(daysPerMonth)].map((e, i) => (
          <Grid key={i} md={1}>
            {data.dailyMoods!.data[i] ?
              <MoodIcon
                moodType={data.dailyMoods?.data[i].attributes?.mood?.data?.attributes?.iconName ?? ''}
                strongEmotion={(data.dailyMoods?.data[i].attributes?.strong_emotions?.data?.length ?? 0) > 0}
              /> :
              <CircleIcon sx={{ color: grey[500] }} />
            }
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
