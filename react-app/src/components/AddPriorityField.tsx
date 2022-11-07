import React, { useState } from 'react';
import { useStore } from '../stores/useStore';
import { Box, IconButton, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const AddPriorityField = () => {
  const [title, setTitle] = useState('');
  const [weekGoal, setWeekGoal] = useState("3");

  return (
      <Box sx={{
        mt: 3, display: 'flex', flexDirection: 'row',
        alignItems: 'center', justifyContent: 'center'}}>
      <Box sx={{border: '1px solid', borderRadius: 3, padding: 5, mx: 2, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <IconButton color='primary' aria-label='upload picture' component='label'>
          <input hidden accept='image/*' type='file' />
          <AddIcon />
        </IconButton>
        <Typography component='p' sx={{ flexGrow: 1}}>
          Add Picture
        </Typography>
      </Box>
        <Box sx={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'left', mx: 2}}>
      <TextField
        sx={{ borderRadius: 3 }}
        id='outlined-basic'
        label='Title'
        color='secondary'
        variant='outlined'
        onChange={(e) => setTitle(e.target.value)}
        value={title} />
      <Typography component='p' sx={{ flexGrow: 1, my:1 }}>
        How many days do you want to allocate per week?
      </Typography>
          <TextField
            sx={{ borderRadius: 3 }}
            id="outlined-number"
            label="Weekly Goal"
            type="number"
            color='secondary'
            InputLabelProps={{
              shrink: true,
            }}
            value={weekGoal}
            onChange={(e)=> setWeekGoal(e.target.value)}
          />
        </Box>
      </Box>
  );
};
