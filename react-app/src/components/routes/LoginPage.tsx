import { FormEvent, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { LoadingError } from '../ui/loading/LoadingError';
import { Loading } from '../ui/loading/Loading';
import { useAuthStore } from '../../stores/auth.store';

export const LoginPage = () => {
  const { login } = useAuthStore();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    const formData = new FormData(event.currentTarget);
    const emailInput = formData.get('email')?.toString() ?? '';
    const passwordInput = formData.get('password')?.toString() ?? '';
    const res = await login(emailInput, passwordInput);
    if (res.error != null) {
      setError(res.error.message);
    }
    setIsLoading(false);
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Box component='form'
          noValidate onSubmit={handleLogin} sx={{ mt: 1, minHeight: '80vh' }}>
          <TextField
            sx={{
              border: 3, borderRadius: 3, "& .MuiOutlinedInput-root": {
                color: "#fff"
              }, bgcolor: '#323463'
            }}
            placeholder="Email Address"
            margin='normal'
            required
            fullWidth
            id='email'
            //label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            sx={{
              border: 3, borderRadius: 3, "& .MuiOutlinedInput-root": {
                color: "#fff"
              }, bgcolor: '#323463'
            }}
            placeholder="Password"
            margin='normal'
            required
            fullWidth
            name='password'
            //label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <Box sx={{ mt: 2 }}>
            <LoadingError error={error ?? undefined} />
            <Loading loading={isLoading} />
          </Box>
          <Button
            variant='contained'
            type='submit'
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Button color='secondary' to="/register" component={Link}>
                Don't have an account? Sign Up
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
