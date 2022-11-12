import { Box, Button, Container, Typography } from '@mui/material';
import { AddPriorityField } from '../ui/priority/AddPriorityField';
import { useMutation } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../graphql/endpoint';
import { CREATE_PRIORITY_MUTATION } from '../../graphql/mutations/create-priority.mutation';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PriorityInput } from '../../graphql/generated/graphql';
import { ArrowBack } from '@mui/icons-material';

export const NewPriorityPage = () => {
  const [title, setTitle] = useState('');
  const [weekGoal, setWeekGoal] = useState('2');
  const navigate = useNavigate();


  const { mutate: createPriority } = useMutation({
    mutationKey: ['CREATE_PRIORITY_MUTATION'],
    mutationFn: (priority: PriorityInput) => request(GRAPHQL_ENDPOINT, CREATE_PRIORITY_MUTATION, { priority }),
    onSuccess: () => {
      setTitle('')
      setWeekGoal('')
      navigate('/dashboard');
    },
  });

  return (
    <Container component='main' maxWidth='md' sx={{ textAlign: "center" }}>
      <Box sx={{
        mt: 5, display: 'flex', flexDirection: 'column',
        alignItems: 'center', minHeight: '80vh'
      }}>
        <Typography component='h1' variant='h3'>
          Add Priority
        </Typography>
        <AddPriorityField title={title} weekGoal={weekGoal} setTitle={setTitle} setWeekGoal={setWeekGoal} />
        <Button onClick={()=>{console.log(title); createPriority({active: true, image: null, title: title, weeklyGoal: parseInt(weekGoal), })}} variant='contained'
                sx={{ mt: 3, mb: 2, gap: 1, width: '250px' }}>
          <ArrowBack />Finish</Button>
      </Box>
    </Container>
  );
};
