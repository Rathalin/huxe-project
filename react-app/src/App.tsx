import React from 'react';
import logo from './logo.svg';
import { CustomAppbar } from './components/CustomAppbar';
import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from './components/ui/theme/Theme';
import { Copyright } from './components/Copyright';
import { CustomRouter } from './components/routes/Router';

const theme = Theme();


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xs' className='App' disableGutters={true}>
        <CssBaseline />
        <CustomAppbar />
        <CustomRouter />
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  )
    ;
}

export default App;
