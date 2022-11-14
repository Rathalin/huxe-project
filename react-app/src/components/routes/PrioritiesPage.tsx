import { Box, Checkbox, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import InterestsIcon from '@mui/icons-material/Interests';
import { AddButton } from '../ui/buttons/AddButton';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../graphql/endpoint';
import { PRIORITIES_QUERY } from '../../graphql/queries/priorities.query';
import { Loading } from '../ui/loading/Loading';
import { BackButton } from '../ui/buttons/BackButton';
import { SET_PRIORITY_ACTIVITY_MUTATION } from '../../graphql/mutations/set-priority-activity.mutation';
import { PriorityItem } from '../ui/priority/PriorityItem';
import { LoadingError } from '../ui/loading/LoadingError';

export const PrioritiesPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['PRIORITIES_QUERY'],
    queryFn: () => request(GRAPHQL_ENDPOINT, PRIORITIES_QUERY),
  });
  const { mutate: setPriorityActive } = useMutation({
    mutationFn: ({ priorityId, active }: { priorityId: string, active: boolean }) => request(
      GRAPHQL_ENDPOINT, SET_PRIORITY_ACTIVITY_MUTATION, {
      priorityId,
      active
    }),
    onSuccess: () => queryClient.invalidateQueries(['PRIORITIES_QUERY']),
  });


  if (isLoading) return <Loading />;
  if (isError) return <LoadingError error={JSON.stringify(error)} />;

  return (
    <Container component='main' maxWidth='md'>
      <Box sx={{
        mt: 5, display: 'flex', flexDirection: 'column',
        alignItems: 'center', minHeight: '80vh'
      }}>
        <Typography component='h1' variant='h3'>
          My Priorities
        </Typography>
        <Grid container spacing={4} sx={{ mt: 1 }}>
          {data?.priorities?.data?.map((priority) => (
            <Grid key={priority.id} xs={6} md={3}>
              <Checkbox
                sx={{
                  width: '100%'
                }}
                disableRipple
                color='secondary'
                key={priority.id}
                icon={<PriorityItem priorityId={priority.id!} />}
                checkedIcon={<PriorityItem priorityId={priority.id!} checked />}
                checked={priority.attributes?.active}
                onChange={() => {
                  setPriorityActive({
                    priorityId: priority.id!,
                    active: priority.attributes?.active ? false : true,
                  });
                }}
              />
            </Grid>
          ))}
          <Grid display='flex' justifyContent='center' alignItems='center' xs={12}>
            <AddButton Icon={() => <InterestsIcon fontSize='large' />} onClick={() => {
              navigate('/new-priority');
            }} />
            <Typography component='p'>
              Add Priority
            </Typography>
          </Grid>
        </Grid>
        <BackButton />
      </Box>
    </Container>
  );
};
