import { Box, IconButton, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

type AddPriorityFieldProps = {
  title: string,
  setTitle(title: string): void,
  weeklyGoal: number,
  setWeeklyGoal(goal: number): void,
  image: File | null,
  setImage(image: File | null): void,
};

export const AddPriorityField = ({
  title, setTitle, weeklyGoal, setWeeklyGoal, image, setImage
}: AddPriorityFieldProps) => {
  return (
    <Box sx={{
      mt: 3, mb: 4, display: 'flex', flexDirection: 'row',
      alignItems: 'center', justifyContent: 'center'
    }}>
      <Box sx={{
        border: 3,
        borderRadius: 3,
        padding: 5,
        mx: 3,
        height: '180px',
        width: '180px',
        display: 'flex',
        justifyConten: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        bgcolor: '#323463'
      }}>
        <IconButton color='primary' aria-label='upload picture' component='label'>
          <input
            accept='image/*'
            type='file'
            onChange={(e) => setImage(e.target.files != null ? e.target.files[0] : null)}
            hidden
          />
          <AddIcon />
        </IconButton>
        <Typography component='p' sx={{ flexGrow: 1 }}>
          {image != null ? image.name : 'Select image'}
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
          inputProps={{ maxLength: 30 }}
          color='secondary'
          variant='outlined'
          onChange={(e) => setTitle(e.target.value)}
          value={title} />
        <Typography component='p' sx={{ flexGrow: 1, my: 1, mt: 3 }}>
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
            shrink: true
          }}
          value={weeklyGoal}
          onChange={(e) => setWeeklyGoal(parseInt(e.target.value))}
        />
      </Box>
    </Box>
  );
};
