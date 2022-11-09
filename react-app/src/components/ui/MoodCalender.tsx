import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { getDaysPerMonth } from '../../utils/date.util';
import { MoodIconButton } from './buttons/MoodIconButton';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../graphql/endpoint';
import { CALENDER_QUERY } from '../../graphql/queries/calender.query';
import { Loading } from './loading/Loading';
import { useNavigate } from 'react-router-dom';

type MoodCalenderProps = {
  month: number
  year: number
};

export const MoodCalender = ({ year, month }: MoodCalenderProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ['CALENDER_QUERY'],
    queryFn: () => request(GRAPHQL_ENDPOINT, CALENDER_QUERY),
  });
  const navigate = useNavigate();

  if (isLoading) return <Loading />;

  const daysPerMonth = getDaysPerMonth(year, month);
  const dailyMoodsPerDay = [...Array(daysPerMonth).keys()].map(day =>
    data?.dailyMoods?.data?.find(mood =>
      new Date(mood.attributes?.createdAt).getDate() === day + 1
    ) ?? null
  );

  return (
    <Box sx={{ flexGrow: 1, justifyContent: "center", alignItems: 'center' }}>
      <Grid container spacing={1} columns={7}>
        {dailyMoodsPerDay.map((mood, i) => (
          <Grid key={i} md={1}>
            <MoodIconButton onClick={()=>navigate(`/daily-summary/${i}-${month}`)}
              moodType={mood?.attributes?.mood ?? null}
              strongEmotion={(mood?.attributes?.strongEmotions?.data?.length ?? 0) > 0}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
