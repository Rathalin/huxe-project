import { useStore } from '../stores/useStore';
import { Box, IconButton, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { PriorityCard } from './PriorityCard';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import SwitchAccessShortcutAddIcon from '@mui/icons-material/SwitchAccessShortcutAdd';
import { BorderLinearProgress } from './Progressbar';
import { AddNoteButton } from './ui/buttons/AddNoteButton';

export const DashboardPriorities = () => {
  const { priorities } = useStore();
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, justifyContent: "center", alignItems: 'center' }}>
      <Grid container spacing={4}>
        {priorities.map((priority) => (
          <Grid key={priority.id} xs={6} md={4}>
            <PriorityCard priority={priority} />
            <BorderLinearProgress variant="determinate" value={(priority.weeklyGoal / 7) * 100} />
            <AddNoteButton />
          </Grid>
        ))}
        <Grid display='flex' justifyContent='center' alignItems='center' xs={12}>
          <IconButton color='secondary' aria-label='add' onClick={() => navigate("/priorities")}>
            <SwitchAccessShortcutAddIcon />
            <Typography component='p' sx={{ flexGrow: 1, mx: 1 }}>
              Change Priorities
            </Typography>
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );

};
