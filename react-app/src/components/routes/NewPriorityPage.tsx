import { Box, Container, Typography } from '@mui/material';
import { AddPriorityField } from '../ui/priority/AddPriorityField';
import { BackButton } from '../ui/buttons/BackButton';

export const NewPriorityPage = () => {

  return (
    <Container component='main' maxWidth='md' sx={{ textAlign: "center" }}>
      <Box sx={{
        mt: 5, display: 'flex', flexDirection: 'column',
        alignItems: 'center', minHeight: '80vh'
      }}>
        <Typography component='h1' variant='h3'>
          Add Priority
        </Typography>
        <AddPriorityField />
       <BackButton/>
      </Box>
    </Container>
  );
};
