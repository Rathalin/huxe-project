import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../../graphql/endpoint';
import { ACTIVE_PRIORITIES_QUERY } from '../../../graphql/queries/active-priorities.query';
import { Loading } from '../loading/Loading';
import { SatisfiedPriorityCheckbox } from './SatisfiedPriorityItem';

export const SatisfiedPriorities = () => {
  const { data: activePrioritiesData, isLoading: isLoadingActivePriorities } = useQuery({
    queryKey: ['ACTIVE_PRIORITIES_QUERY'],
    queryFn: () => request(GRAPHQL_ENDPOINT, ACTIVE_PRIORITIES_QUERY)
  });

  if (isLoadingActivePriorities) return <Loading />;

  return (
    <Box sx={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={4}>
        {activePrioritiesData?.priorities?.data.map((priority) => (
          <Grid key={priority.id} xs={6} md={4}>
            <SatisfiedPriorityCheckbox priorityId={priority.id!} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
