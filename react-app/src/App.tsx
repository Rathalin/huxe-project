import { CustomAppbar } from './components/CustomAppbar';
import { Box, Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from './components/ui/theme/Theme';
import { Copyright } from './components/Copyright';
import { CustomRouter } from './components/routes/Router';

const theme = Theme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className='app' sx={{height: '100vh'}}>
        <CssBaseline />
        <CustomAppbar />
        <Container component='main' maxWidth='xl' >
          <CustomRouter />
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
