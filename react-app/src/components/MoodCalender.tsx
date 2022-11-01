import { useStore } from '../store/useStore';
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { getDaysPerMonth } from '../utils/utils';
import { PropsWithChildren } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { grey } from '@mui/material/colors';
import { MoodIcon } from './MoodIcon';

type MoodCalenderProps = {
  month: number
  year: number
};



export const MoodCalender = ({ year, month } : PropsWithChildren<MoodCalenderProps>) => {
  const { moods } = useStore();
  const daysPerMonth = getDaysPerMonth(year, month)

  return (
    <Container maxWidth='xs'>
      <Grid container spacing={1} columns={7}>
        {[...Array(daysPerMonth)].map((e, i) => (
          <Grid key={i} md={1}>
            {moods[i] ?
                <MoodIcon moodType={moods[i].type}/>:
              <CircleIcon sx={{ color: grey[500] }} />
            }

          </Grid>
      ))}
      </Grid>
    </Container>
  );

}
