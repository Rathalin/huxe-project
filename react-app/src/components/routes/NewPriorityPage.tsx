import React, { useState } from 'react';
import { useStore } from '../../stores/useStore';
import { Box, Button, Container, Typography } from '@mui/material';
import { AddPriorityField } from '../ui/AddPriorityField';
import { useNavigate } from 'react-router-dom';

export const NewPriorityPage = () => {
  const { addPriority } = useStore();
  const [title, setTitle] = useState('');
  const [weekGoal, setWeekGoal] = useState("3");
  const navigate = useNavigate();


  const handleAdd = () => {
    addPriority(title, parseInt(weekGoal))
    navigate("/dashboard")
  }

  return (
    <Container maxWidth={false} sx={{ textAlign: "center" }}>
      <Box sx={{
        mt: 5, display: 'flex', flexDirection: 'column',
        alignItems: 'center', minHeight: '80vh'
      }}>
      <Typography component='h1' variant='h3'>
          Add Priority
      </Typography>
      <AddPriorityField title={title} weekGoal={weekGoal} setTitle={setTitle} setWeekGoal={setWeekGoal} />
      <Button variant='contained'
      sx={{ mt: 5, mb: 2, gap: 1, width: '250px' }}
      onClick={handleAdd}>Finish</Button>
      </Box>
    </Container>
  );
};
