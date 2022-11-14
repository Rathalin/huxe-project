import { Box, Checkbox } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { PriorityCard } from './PriorityCard';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../../graphql/endpoint';
import { ACTIVE_PRIORITIES_QUERY } from '../../../graphql/queries/active-priorities.query';
import { Loading } from '../loading/Loading';
import { MEDIA_ENDPOINT } from '../../../utils/media-endpoint';
import { PriorityItem } from './PriorityItem';

export const SatisfiedPriorities = () => {
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
            <Checkbox
              sx={{
                width: '100%'
              }}
              disableRipple
              color='secondary'
              key={priority.id}
              icon={<PriorityItem priorityId={priority.id!} />}
              checkedIcon={<PriorityItem priorityId={priority.id!} checked />}
            // checked={activePriorities.includes(priority.id!)}
            // onChange={handleSetActive}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
