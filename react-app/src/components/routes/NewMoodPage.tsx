import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { PrioritiesPage } from './PrioritiesPage';
import { NewNote } from '../NewNote';
import { BackButton } from '../ui/buttons/BackButton';
import { SelectMood } from '../SelectMood';
import { useQuery } from '@tanstack/react-query';

export const NewMoodPage = () => {

  const { data } = useQuery({});

  return (
    <Container sx={{ mt: 3, display: 'flex', gap: 1 }}>
      <Box sx={{
        mt: 3, display: 'flex', flexDirection: 'column'
      }}>
        <SelectMood />
        <Typography component='h3' variant='h5'>
          Priorities Satisfied today
        </Typography>
        <PrioritiesPage />
        <NewNote />
        <BackButton />
      </Box>
    </Container>
  );
};
