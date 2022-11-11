import { useStore } from '../../../stores/useStore';
import { Box, IconButton, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { PriorityCard } from './PriorityCard';

export const SatisfiedPriorities = () => {
  const { priorities } = useStore();

  return (
    <Box sx={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={4}>
        {priorities.map((priority) => (
          <Grid key={priority.id} xs={6} md={4} >
            <PriorityCard priorityId={priority.id} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
