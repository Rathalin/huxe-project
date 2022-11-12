import { Box, IconButton, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from 'react-router-dom';
import SwitchAccessShortcutAddIcon from '@mui/icons-material/SwitchAccessShortcutAdd';
import { AddNoteButton } from '../buttons/AddNoteButton';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../../graphql/endpoint';
import { useDailyMoodIdStore } from '../../../stores/dailyMoodStore';
import { Loading } from '../loading/Loading';
import { PriorityCard } from './PriorityCard';
import { PriorityProgress } from './PriorityProgress';
import { ACTIVE_PRIORITIES_QUERY } from '../../../graphql/queries/active-priorities.query';

export const DashboardPriorities = () => {
  const navigate = useNavigate();
  // const { data, isLoading } = useQuery({
  //   queryKey: ['SATISFIED_PRIORITIES_QUERY', dailyMoodId],
  //   queryFn: () => request(GRAPHQL_ENDPOINT, SATISFIED_PRIORITIES_QUERY, { dailyMoodId: dailyMoodId ?? '' }),
  //   enabled: dailyMoodId != null,
  // });

  const { data, isLoading } = useQuery({
    queryKey: ['ACTIVE_PRIORITIES_QUERY'],
    queryFn: () => request(GRAPHQL_ENDPOINT, ACTIVE_PRIORITIES_QUERY)
  });

  if (isLoading) return <Loading />;

  return (
    <Box sx={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={4}>
        {data?.priorities?.data && data?.priorities?.data.map((priority) => (
          <Grid key={priority.id} xs={6} md={4}>
            <PriorityCard priorityId={priority.id!} />
            <PriorityProgress
              variant='determinate'
              value={((priority.attributes?.weeklyGoal ?? 0) / 7) * 100}
            />
            <AddNoteButton />
          </Grid>
        ))}
        <Grid display='flex' justifyContent='center' alignItems='center' xs={12}>
          <IconButton color='secondary' aria-label='add' onClick={() => navigate('/priorities')}>
            <SwitchAccessShortcutAddIcon />
            <Typography component='p' sx={{ flexGrow: 1, mx: 1 }}>
              Change Priorities
            </Typography>
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};
