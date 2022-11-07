import { Card, CardContent, Typography } from '@mui/material';
import { Priority } from '../interfaces/priority';

type PriorityProps = {
  priority: Priority;
}

export const PriorityCard = ({priority}: PriorityProps) => {

  return (
    <Card variant='outlined'>
      <CardContent>
        <Typography variant='h6' component='h3'>
          {priority.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {(priority.weeklyGoal/7) *100}%
        </Typography>
      </CardContent>
    </Card>
  );

};
