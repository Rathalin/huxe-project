import { Box, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const AddNoteButton = () => {
  return (
      <Box sx={{border: '1px solid', borderRadius: 3, width: '100%', my:2,  display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <IconButton color='primary' component='label'>
          <AddIcon />
          <Typography component='p' sx={{ flexGrow: 1}}>
            Add Note
          </Typography>
        </IconButton>
      </Box>
  );
};
