import { useStore } from '../../stores/useStore';
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { PriorityCard } from '../PriorityCard';
import InterestsIcon from '@mui/icons-material/Interests';
import { AddButton } from '../ui/buttons/AddButton';
import { useNavigate } from 'react-router-dom';

export const PrioritiesPage = () => {
  const { priorities } = useStore();
  const navigate = useNavigate();

  return (
    <Container maxWidth='xs'>
      <Grid container spacing={3}>
        {priorities.map((priority) => (
          <Grid key={priority.id} xs={4} md={3}>
            <PriorityCard priority={priority} />
          </Grid>
        ))}
        <Grid xs={6} md={4}>
          <AddButton Icon={() => <InterestsIcon fontSize='large' />} onClick={() => { navigate('/newPriority') }} />
        </Grid>
      </Grid>

    </Container>
  )
};
