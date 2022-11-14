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
import { useDailyMoodIdStore } from '../../stores/dailyMoodStore';

type MoodCalenderProps = {
  month: number
  year: number
};

export const MoodCalender = ({ year, month }: MoodCalenderProps) => {
  const { dailyMoodId } = useDailyMoodIdStore();
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
  console.log(dailyMoodsPerDay.map(m => m?.id));

  return (
    <Box sx={{ flexGrow: 1, justifyContent: "center", alignItems: 'center', mr: 3 }}>
      <Grid container spacing={1} columns={7}>
        {dailyMoodsPerDay.map((mood, i) => (
          <Grid key={i} md={1} sx={{ transform: 'scale(1.5)' }}>
            <MoodIconButton
              onClick={() => navigate(`/daily-summary/${mood?.id ?? 'no-data'}`)}
              moodType={mood?.attributes?.mood ?? null}
              strongEmotion={(mood?.attributes?.strongEmotions?.data?.length ?? 0) > 0}
              highlight={mood?.id === dailyMoodId}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
