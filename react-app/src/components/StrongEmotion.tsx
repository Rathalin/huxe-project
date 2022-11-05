import { NewNote } from './NewNote';
import { Container, Box, Button } from '@mui/material';
import { SelectEmotionType } from './SelectEmotionType';
import { SpecifyEmotion } from './SpecifyEmotion';
import { Notes } from './Notes';

export const StrongEmotion = () => {

  const handleSubmit = () => {
    //addMood(selectedMood)
    //navigate("/dashboard")
  }

  return (
    <Container maxWidth='md'>

      <Box component="form" onSubmit={handleSubmit} sx={{
        mt: 3, display: 'flex', flexDirection: 'column',
        alignItems: 'left'
      }}>
        <SelectEmotionType />
        <SpecifyEmotion emotionType='BAD' />
        <NewNote />
        <Notes />

        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
        >
          Finish
        </Button>

      </Box>
    </Container>
  );
};
