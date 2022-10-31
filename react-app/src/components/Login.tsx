import { FormEvent, useEffect } from 'react';
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
import { useStore } from '../store/useStore';
import { ApolloError, useMutation } from '@apollo/client';
import { graphql } from '../graphql';
import { Loading } from './ui/loading/Loading';
import { LoadingError } from './ui/error/LoadingError';
import { useTheme } from '@mui/material';

export const Login = () => {
  const theme = useTheme();
  let showInvalidCredentialsError = false;
  const { setUsername, setLoggedIn } = useStore();

  const [login, { loading, error, data }] = useMutation(graphql(`
    mutation Login($input: UsersPermissionsLoginInput!) {
      login(input: $input) {
        user {
          username
        }
        jwt
      }
    }
  `));

  useEffect(() => {
    if (data != null) {
      setUsername(data.login.user.username);
      setLoggedIn(true);
    }
  }, [data]);

  if (loading) return <Loading />;
  if (error != null) {
    const err = error.graphQLErrors[0];
    if (err.extensions.code === 'BAD_USER_INPUT') {
      showInvalidCredentialsError= true;
    } else {
      return <LoadingError error={JSON.stringify(error)} />;
    }
  }

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(`Login with ${formData.get('email')} - ${formData.get('password')}`);
    const emailInput = formData.get('email') as string
    const passwordInput = formData.get('password') as string
    if (emailInput.length > 0) {
      login({
        variables: {
          input: {
            identifier: emailInput,
            password: passwordInput
          }
        }
      }).catch((error: ApolloError) => {
        console.log('Uncaught error' + error);
      });
    }
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
        <Box sx={{ mt: 1 }} component="form" onSubmit={handleLogin}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          {showInvalidCredentialsError && <p style={{ color: theme.palette.error.main }}>
            Invalid identifier or password
          </p>}
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to='/register'>
                {'Don\'t have an account? Sign Up'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
