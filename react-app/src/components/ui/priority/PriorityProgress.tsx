import { LinearProgress, linearProgressClasses, styled } from '@mui/material';

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
