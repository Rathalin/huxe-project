import React, { useState } from 'react';
import { useStore } from '../../stores/useStore';
import { Button, Container } from '@mui/material';
import { AddPriorityField } from '../AddPriorityField';
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
      <AddPriorityField title={title} weekGoal={weekGoal} setTitle={setTitle} setWeekGoal={setWeekGoal} />
      <Button variant='contained' onClick={handleAdd}>Finish</Button>
    </Container>
  );
};
