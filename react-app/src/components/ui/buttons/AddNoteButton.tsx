import { Box, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const AddNoteButton = () => {
  return (
      <Box
        sx={{ 
          borderRadius: '10px',
          color: '#E8EAF6',
          borderColor: '#FFC107',
          border: '1px solid',
          backgroundColor: '#323463',
          width: '100%',
          my:2,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          "&:hover": {
            backgroundColor: '#422cb0',
            color: '#323463',
            borderColor: '#E8EAF6',
          } 
        }}>
        <IconButton color='primary' component='label'>
          <AddIcon sx={{ color: '#E8EAF6'}}/>
          <Typography component='p' sx={{ flexGrow: 1, color: '#E8EAF6' }}>
            Add Note
          </Typography>
        </IconButton>
      </Box>
  );
};
