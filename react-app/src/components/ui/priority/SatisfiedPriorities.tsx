import { Box, Checkbox } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { PriorityCard } from './PriorityCard';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../../graphql/endpoint';
import { ACTIVE_PRIORITIES_QUERY } from '../../../graphql/queries/active-priorities.query';

export const SatisfiedPriorities = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['ACTIVE_PRIORITIES_QUERY'],
    queryFn: () => request(GRAPHQL_ENDPOINT, ACTIVE_PRIORITIES_QUERY)
  });

  return (
    <Box sx={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={4}>
        {data?.priorities?.data && data?.priorities?.data.map((priority) => (
          <Grid key={priority.id} xs={6} md={4}>
            <Checkbox
              sx={{
                width: '100%'
              }}
              disableRipple
              color='secondary'
              key={priority.id}
              icon={<PriorityCard priorityId={priority.id!} hideProgress={true} />}
              checkedIcon={<PriorityCard priorityId={priority.id!} hideProgress={true} borderColor='#FFC107' />}
              // checked={activePriorities.includes(priority.id!)}
              // onChange={handleSetActive}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
