import { Box, Checkbox, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { PriorityCard } from '../ui/priority/PriorityCard';
import InterestsIcon from '@mui/icons-material/Interests';
import { AddButton } from '../ui/buttons/AddButton';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../graphql/endpoint';
import { PRIORITIES_QUERY } from '../../graphql/queries/priorities.query';
import { Loading } from '../ui/loading/Loading';
import { BackButton } from '../ui/buttons/BackButton';
import { useState } from 'react';
import { SET_PRIORITY_ACTIVE } from '../../graphql/mutations/set-priority-active.mutation';

export const PrioritiesPage = () => {
  const [activePriorities, setActivePriorities] = useState<string[]>([]);

  const findActivePriorities = () => {
    setActivePriorities([]);
    data?.priorities?.data?.map((priority) => {
        if (priority.attributes?.active) {
          setActivePriorities(prevState => [...prevState, priority.id!]);
        }
      }
    );
  };

  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ['PRIORITIES_QUERY'],
    queryFn: () => request(GRAPHQL_ENDPOINT, PRIORITIES_QUERY),
    onSuccess: () => findActivePriorities()
  });


  if (isLoading) return <Loading />;

  const handleSetActive = () =>{

  }

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
                icon={<PriorityCard priorityId={priority.id!} hideProgress={true} />}
                checkedIcon={<PriorityCard priorityId={priority.id!} hideProgress={true} borderColor='#FFC107' />}
                checked={activePriorities.includes(priority.id!)}
                onChange={handleSetActive}
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
