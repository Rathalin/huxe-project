import { Moods } from './Moods';
import { NewMood } from './NewMood';
import React from 'react';
import { Box } from '@mui/material';

export const Dashboard = () => {

  return (
    <Box sx={{height: '100vh'}}>
      <Moods />
      <NewMood />
    </Box>
  );
};
