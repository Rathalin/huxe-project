import { Box, Button, Container, Typography } from '@mui/material';
import { useAuthStore } from '../../stores/auth.store';
import { useNavigate } from 'react-router-dom';
import { AddPriorityField } from '../ui/priority/AddPriorityField';

export const InitialPrioritiesPage = () => {
  const { user } = useAuthStore();
  const loggedIn = user != null;
  const navigate = useNavigate();

  return (
    <Container component='main' maxWidth='md'>
      {loggedIn && (
        <Box sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Typography variant='h6' component='h1' sx={{ flexGrow: 1 }}>
            Hello, {user.username}
          </Typography>
          <Typography variant='h6' component='p' sx={{ flexGrow: 1 }}>
            Enter your top 3 priorities at the moment
          </Typography>
          {/*{[...Array(3)].map((e, i) => (*/}
          {/*  <AddPriorityField key={i}*/}
          {/*  />*/}
          {/*))}*/}
          <Button variant='contained' onClick={()=>navigate('/dashboard')}>Finish</Button>
        </Box>
      )}
    </Container>
  );
};
