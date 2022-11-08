import { useStore } from '../../stores/useStore';
import { Box, Button, Container, Typography } from '@mui/material';
import { useAuthStore } from '../../stores/auth.store';
import { useNavigate } from 'react-router-dom';
import { AddPriorityField } from '../ui/AddPriorityField';
import { useState } from 'react';

export const InitialPrioritiesPage = () => {
  const { addPriority } = useStore();
  const { user } = useAuthStore();
  const loggedIn = user != null;
  const navigate = useNavigate();

  const [priorities, setPriorities] = useState<{ title: string; weekGoal: string }[]>([])
  const [title, setTitle] = useState('');
  const [weekGoal, setWeekGoal] = useState("3");

  const handleAddPriorities = () => {
    priorities.map((priority) => {
      addPriority(priority.title, parseInt(priority.weekGoal));
    })
    navigate('/dashboard')
  }

  return (
    <Container maxWidth={false}>
      {loggedIn && (
        <Box sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Typography variant='h6' component='h1' sx={{ flexGrow: 1 }}>
            Hello, {user.username}
          </Typography>
          <Typography variant='h6' component='p' sx={{ flexGrow: 1 }}>
            Enter your top 3 priorities at the moment
          </Typography>
          {[...Array(3)].map((e, i) => (
            <AddPriorityField key={i} title={priorities[i].title} weekGoal={priorities[i].weekGoal} setTitle={setTitle} setWeekGoal={setWeekGoal} />
          ))}
          <Button variant='contained' onClick={handleAddPriorities}>Finish</Button>
        </Box>
      )}

    </Container>
  );
};
