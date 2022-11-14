import { LinearProgress, linearProgressClasses, styled } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../../graphql/endpoint';
import { SATISFIED_PRIORITIES_BETWEEN_QUERY } from '../../../graphql/queries/satisfied-priorites-between.query';
import { useDailyMoodIdStore } from '../../../stores/dailyMoodStore';
import { today, tomorrow } from '../../../utils/date.util';


const ProgressBar = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 3,
  marginTop: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.background,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.secondary.dark,
  },
}));

type PriorityProgressProps = {
  progressPercent: number,
};

export const PriorityProgress = ({ progressPercent }: PriorityProgressProps) => {
  if (progressPercent == null) return null;

  return (
    <ProgressBar
      variant='determinate'
      value={progressPercent}
    />
  );
};
