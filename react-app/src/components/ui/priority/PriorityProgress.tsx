import { LinearProgress, linearProgressClasses, styled } from '@mui/material';


export const PriorityProgress = styled(LinearProgress)(({ theme }) => ({
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
