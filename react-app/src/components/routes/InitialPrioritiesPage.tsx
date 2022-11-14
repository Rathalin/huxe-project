import { Box, Button, Container, Typography } from '@mui/material';
import { useAuthStore } from '../../stores/auth.store';
import { useNavigate } from 'react-router-dom';
import { NewPriority } from '../ui/priority/NewPriority';

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
          alignItems: 'center', width: '100%'
        }}>
          <Typography variant='h3' component='h1' sx={{ flexGrow: 1 }}>
            Hello, {user.username}
          </Typography>
          <Typography variant='h6' component='p' sx={{ flexGrow: 1 }}>
            Enter up to 3 priorities to your dashboard!
          </Typography>
          {[...Array(3)].map((e, i) => (
            <NewPriority key={i} />
          ))}
          <Button variant='contained' sx={{ mt: 3, mb: 2, gap: 1, width: '250px' }} onClick={()=>navigate('/dashboard')}>Finish</Button>
        </Box>
      )}
    </Container>
  );
};
