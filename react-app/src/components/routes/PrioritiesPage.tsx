import { useStore } from '../../stores/useStore';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { PriorityCard } from '../ui/PriorityCard';
import InterestsIcon from '@mui/icons-material/Interests';
import { AddButton } from '../ui/buttons/AddButton';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export const PrioritiesPage = () => {
  const { priorities } = useStore();
  const navigate = useNavigate();

  return (
    <Container component='main' maxWidth='md'>
        <Grid container spacing={4} sx={{mt:1}}>
          {priorities.map((priority) => (
            <Grid key={priority.id} xs={6} md={3}>
              <PriorityCard priority={priority} />
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
  )
};
