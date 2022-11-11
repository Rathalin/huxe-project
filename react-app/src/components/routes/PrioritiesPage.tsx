import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { PriorityCard } from '../ui/priority/PriorityCard';
import InterestsIcon from '@mui/icons-material/Interests';
import { AddButton } from '../ui/buttons/AddButton';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../graphql/endpoint';
import { PRIORITIES_QUERY } from '../../graphql/queries/priorities.query';
import { Loading } from '../ui/loading/Loading';

export const PrioritiesPage = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ['PRIORITIES_QUERY'],
    queryFn: () => request(GRAPHQL_ENDPOINT, PRIORITIES_QUERY),
  });

  if (isLoading) return <Loading />;

  return (
    <Container component='main' maxWidth='md'>
      <Grid container spacing={4} sx={{ mt: 1 }}>
        {data?.priorities?.data?.map((priority) => (
          <Grid key={priority.id} xs={6} md={3}>
            <PriorityCard priorityId={priority.id!} />
          </Grid>
        ))}
        <Grid display='flex' justifyContent='center' alignItems='center' xs={12}>
          <AddButton Icon={() => <InterestsIcon fontSize='large' />} onClick={() => { navigate('/new-priority') }} />
          <Typography component='p'>
            Add Priority
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
