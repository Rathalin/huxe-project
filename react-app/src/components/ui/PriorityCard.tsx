import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { Priority } from '../../interfaces/priority';

type PriorityProps = {
  priority: Priority;
}

export const PriorityCard = ({ priority }: PriorityProps) => {

  return (
    <Card variant='outlined'
          sx={{
            border: 3,
            borderColor: '#fff',
            borderRadius: 3,
            backgroundColor: '#323463'
          }}>
      <CardHeader title={priority.title} sx={{ textAlign: 'center', my:1 }} disableTypography={true} />
      <CardMedia
        component='img'
        height='75'
        image='mood1.png'
        alt='priority image'
        sx={{
          objectFit:'contain'
        }}
      />
      <CardContent sx={{ textAlign: 'right'}}>
        <Typography variant='body2' color='text.secondary'>
          {Math.ceil((priority.weeklyGoal / 7) * 100)}%
        </Typography>
      </CardContent>
    </Card>
  );

};
