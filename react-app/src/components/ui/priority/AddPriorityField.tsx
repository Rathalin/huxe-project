import { Box, IconButton, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ChangeEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../../graphql/endpoint';
import { CREATE_PRIORITY_MUTATION } from '../../../graphql/mutations/create-priority.mutation';


type PriorityFieldProps = {
  title: string,
  weekGoal: string,
  setTitle: (title: string) => void
  setWeekGoal: (weekGoal: string) => void
};

export const AddPriorityField = ({ title, weekGoal, setTitle, setWeekGoal }: PriorityFieldProps) => {
  const [imageName, setImageName] = useState('Add picture');

  // const { mutate: createPriority } = useMutation({
  //   mutationKey: [''],
  //   mutationFn: () => request(GRAPHQL_ENDPOINT, CREATE_PRIORITY_MUTATION),
  // });

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target || !e.target.files || !e.target.files[0]) {
      setImageName('Add picture')
    } else {
      setImageName(e.target.files[0].name)
    }
  }

  return (
    <Box sx={{
      mt: 3, display: 'flex', flexDirection: 'row',
      alignItems: 'center', justifyContent: 'center'
    }}>
      <Box sx={{ border: 3, borderRadius: 3, padding: 5, mx: 2, display: 'flex', alignItems: 'center', flexDirection: 'column', bgcolor: '#323463' }}>
        <IconButton color='primary' aria-label='upload picture' component='label'>
          <input accept='image/*' type='file' hidden onChange={handleFileUpload} />
          <AddIcon />
        </IconButton>
        <Typography component='p' sx={{ flexGrow: 1 }}>
          {imageName}
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'left', mx: 2
      }}>
        <TextField
          sx={{
            border: 3, borderRadius: 3, '& .MuiOutlinedInput-root': {
              color: '#fff'
            }, bgcolor: '#323463'
          }}
          id='outlined-basic'
          placeholder='Title'
          //label='Title'
          color='secondary'
          variant='outlined'
          onChange={(e) => setTitle(e.target.value)}
          value={title} />
        <Typography component='p' sx={{ flexGrow: 1, my: 1 }}>
          How many days do you want to allocate per week?
        </Typography>
        <TextField
          sx={{
            border: 3, borderRadius: 3, '& .MuiOutlinedInput-root': {
              color: '#fff'
            }, bgcolor: '#323463'
          }}
          id='outlined-number'
          placeholder='Weekly Goal'
          //label='Weekly Goal'
          type='number'
          inputProps={{ min: 1, max: 7 }}
          color='secondary'
          InputLabelProps={{
            shrink: true,
          }}
          value={weekGoal}
          onChange={(e) => setWeekGoal(e.target.value)}
        />
      </Box>
    </Box>
  );
};
