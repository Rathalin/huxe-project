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
import { FormEvent, useRef, useState } from 'react';
import { ResponseError, useAuthStore } from '../store/authStore';
import { Loading } from './ui/loading/Loading';
import { LoadingError } from './ui/error/LoadingError';
import { LoadingSuccess } from './ui/success/LoadingSuccess';

export const Register = () => {
  const { register } = useAuthStore();
  const [error, setError] = useState<ResponseError | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(false);
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const usernameInput = formData.get('username')?.toString() ?? '';
    const emailInput = formData.get('email')?.toString() ?? '';
    const passwordInput = formData.get('password')?.toString() ?? '';
    const responseError = await register(emailInput, usernameInput, passwordInput);
    setError(responseError);
    if (responseError == null) {
      setSuccess(true);
    }
    setIsLoading(false);
  }

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="username"
                name="username"
                label="Username"
                type="text"
                autoComplete="new-username"
                fullWidth
                required
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                name="email"
                label="Email Address"
                type="email"
                autoComplete="new-email"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
                autoComplete="new-password"
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 2 }}>
            <Loading loading={isLoading} />
            <LoadingError error={error?.text} />
            <LoadingSuccess success={success ? 'Sucessfully registered.' : undefined} />
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
